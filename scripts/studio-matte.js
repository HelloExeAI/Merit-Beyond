const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createStudioMatte() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public/images');

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Processing image ${width}x${height} with ${channels} channels...`);

  // Step 1: Collect background samples from the outer 40px border
  // Border regions contain only background
  const borderPoints = [];
  const borderSamples = [];

  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < 40; y += 10) {
      const idx = (y * width + x) * channels;
      borderPoints.push([x, y]);
      borderSamples.push([data[idx], data[idx + 1], data[idx + 2]]);
    }
    for (let y = height - 40; y < height; y += 10) {
      const idx = (y * width + x) * channels;
      borderPoints.push([x, y]);
      borderSamples.push([data[idx], data[idx + 1], data[idx + 2]]);
    }
  }

  for (let y = 40; y < height - 40; y += 10) {
    for (let x = 0; x < 40; x += 10) {
      const idx = (y * width + x) * channels;
      borderPoints.push([x, y]);
      borderSamples.push([data[idx], data[idx + 1], data[idx + 2]]);
    }
    for (let x = width - 40; x < width; x += 10) {
      const idx = (y * width + x) * channels;
      borderPoints.push([x, y]);
      borderSamples.push([data[idx], data[idx + 1], data[idx + 2]]);
    }
  }

  // Linear regression to model background plane: Bg_c(x, y) = a*x + b*y + c
  function fitPlane(channelIdx) {
    let sumX = 0, sumY = 0, sumZ = 0;
    let sumX2 = 0, sumY2 = 0, sumXY = 0;
    let sumXZ = 0, sumYZ = 0;
    const n = borderPoints.length;

    for (let i = 0; i < n; i++) {
      const x = borderPoints[i][0];
      const y = borderPoints[i][1];
      const z = borderSamples[i][channelIdx];

      sumX += x; sumY += y; sumZ += z;
      sumX2 += x * x; sumY2 += y * y; sumXY += x * y;
      sumXZ += x * z; sumYZ += y * z;
    }

    // Solve 3x3 system:
    // [ sumX2  sumXY  sumX ] [ a ]   [ sumXZ ]
    // [ sumXY  sumY2  sumY ] [ b ] = [ sumYZ ]
    // [ sumX   sumY   n    ] [ c ]   [ sumZ  ]
    const m = [
      [sumX2, sumXY, sumX, sumXZ],
      [sumXY, sumY2, sumY, sumYZ],
      [sumX, sumY, n, sumZ]
    ];

    // Gaussian elimination
    for (let i = 0; i < 3; i++) {
      let maxRow = i;
      for (let k = i + 1; k < 3; k++) {
        if (Math.abs(m[k][i]) > Math.abs(m[maxRow][i])) maxRow = k;
      }
      [m[i], m[maxRow]] = [m[maxRow], m[i]];

      for (let k = i + 1; k < 3; k++) {
        const factor = m[k][i] / m[i][i];
        for (let j = i; j <= 3; j++) {
          m[k][j] -= factor * m[i][j];
        }
      }
    }

    const sol = [0, 0, 0];
    for (let i = 2; i >= 0; i--) {
      let sum = m[i][3];
      for (let j = i + 1; j < 3; j++) {
        sum -= m[i][j] * sol[j];
      }
      sol[i] = sum / m[i][i];
    }
    return sol; // [a, b, c]
  }

  const planeR = fitPlane(0);
  const planeG = fitPlane(1);
  const planeB = fitPlane(2);

  console.log('Background Plane R:', planeR);
  console.log('Background Plane G:', planeG);
  console.log('Background Plane B:', planeB);

  // Step 2: Compute alpha and decontaminate color
  const outBuffer = Buffer.alloc(width * height * 4);

  const T_LOW = 12.0;   // Background threshold
  const T_HIGH = 35.0;  // Foreground threshold

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const outIdx = (y * width + x) * 4;

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const expR = planeR[0] * x + planeR[1] * y + planeR[2];
      const expG = planeG[0] * x + planeG[1] * y + planeG[2];
      const expB = planeB[0] * x + planeB[1] * y + planeB[2];

      // Euclidean distance in RGB
      const dist = Math.sqrt(
        Math.pow(r - expR, 2) +
        Math.pow(g - expG, 2) +
        Math.pow(b - expB, 2)
      );

      let alpha = 0;
      if (dist <= T_LOW) {
        alpha = 0;
      } else if (dist >= T_HIGH) {
        alpha = 1.0;
      } else {
        // Smooth cubic Hermite interpolation
        const t = (dist - T_LOW) / (T_HIGH - T_LOW);
        alpha = t * t * (3 - 2 * t);
      }

      if (alpha === 0) {
        outBuffer[outIdx] = 0;
        outBuffer[outIdx + 1] = 0;
        outBuffer[outIdx + 2] = 0;
        outBuffer[outIdx + 3] = 0;
      } else if (alpha === 1.0) {
        outBuffer[outIdx] = r;
        outBuffer[outIdx + 1] = g;
        outBuffer[outIdx + 2] = b;
        outBuffer[outIdx + 3] = 255;
      } else {
        // Color decontamination: remove the background color component
        // C_measured = alpha * F + (1 - alpha) * Bg  =>  F = (C_measured - (1 - alpha) * Bg) / alpha
        const decontamR = Math.max(0, Math.min(255, (r - (1 - alpha) * expR) / alpha));
        const decontamG = Math.max(0, Math.min(255, (g - (1 - alpha) * expG) / alpha));
        const decontamB = Math.max(0, Math.min(255, (b - (1 - alpha) * expB) / alpha));

        outBuffer[outIdx] = Math.round(decontamR);
        outBuffer[outIdx + 1] = Math.round(decontamG);
        outBuffer[outIdx + 2] = Math.round(decontamB);
        outBuffer[outIdx + 3] = Math.round(alpha * 255);
      }
    }
  }

  // Save master transparent PNG
  const masterFile = path.join(outputDir, 'logo-transparent-master.png');
  await sharp(outBuffer, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(masterFile);
  console.log('Saved:', masterFile);

  // Step 3: Extract Clean Monogram (with true transparency)
  // Monogram area: X 380 to 1280, Y 15 to 615
  const monoCrop = await sharp(masterFile)
    .extract({
      left: 370,
      top: 15,
      width: 910,
      height: 600
    })
    .trim()
    .toBuffer();

  const monoFile = path.join(outputDir, 'logo-monogram-transparent.png');
  await sharp(monoCrop).png().toFile(monoFile);
  console.log('Saved:', monoFile);

  // Step 4: Extract Clean Wordmark ("Merit & Beyond")
  // Wordmark area: X 100 to 1570, Y 605 to 885
  const wordCrop = await sharp(masterFile)
    .extract({
      left: 100,
      top: 605,
      width: 1470,
      height: 280
    })
    .trim()
    .toBuffer();

  const wordFile = path.join(outputDir, 'logo-wordmark-transparent.png');
  await sharp(wordCrop).png().toFile(wordFile);
  console.log('Saved:', wordFile);

  // Step 5: Compose High-Resolution Horizontal Lockup (Transparent)
  const monoMeta = await sharp(monoCrop).metadata();
  const wordMeta = await sharp(wordCrop).metadata();

  const targetMonoH = 140;
  const targetMonoW = Math.round(monoMeta.width * (targetMonoH / monoMeta.height));
  const resizedMono = await sharp(monoCrop).resize(targetMonoW, targetMonoH).toBuffer();

  const targetWordH = 95;
  const targetWordW = Math.round(wordMeta.width * (targetWordH / wordMeta.height));
  const resizedWord = await sharp(wordCrop).resize(targetWordW, targetWordH).toBuffer();

  const gap = 25;
  const totalW = targetMonoW + gap + targetWordW + 20;
  const totalH = Math.max(targetMonoH, targetWordH) + 10;

  const horizontalFile = path.join(outputDir, 'logo-horizontal-transparent.png');
  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: resizedMono, left: 10, top: Math.floor((totalH - targetMonoH) / 2) },
    { input: resizedWord, left: 10 + targetMonoW + gap, top: Math.floor((totalH - targetWordH) / 2) + 4 }
  ])
  .trim()
  .png()
  .toFile(horizontalFile);
  console.log('Saved:', horizontalFile);

  // Step 6: Trimmed Full Logo (Stacked)
  const fullTrimmed = path.join(outputDir, 'logo-full-transparent.png');
  await sharp(masterFile).trim().png().toFile(fullTrimmed);
  console.log('Saved:', fullTrimmed);

  // Step 7: Update Favicon and Apple Touch Icon with clean transparent monogram
  await sharp(monoCrop)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));

  await sharp(monoCrop)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  console.log('Studio matte extraction complete!');
}

createStudioMatte().catch(console.error);
