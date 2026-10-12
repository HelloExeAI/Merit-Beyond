const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processLogo() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public/images');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const metadata = await sharp(inputPath).metadata();
  console.log('Source image dimensions:', metadata.width, 'x', metadata.height);

  // 1. Get raw pixel buffer to create a high quality transparent version
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 (RGBA)

  // Sample background color from the four corners
  const samplePixels = [
    [10, 10],
    [width - 10, 10],
    [10, height - 10],
    [width - 10, height - 10],
    [Math.floor(width / 2), 10],
    [10, Math.floor(height / 2)],
    [width - 10, Math.floor(height / 2)],
  ];

  let totalR = 0, totalG = 0, totalB = 0;
  for (const [x, y] of samplePixels) {
    const idx = (y * width + x) * channels;
    totalR += data[idx];
    totalG += data[idx + 1];
    totalB += data[idx + 2];
  }
  const bgR = totalR / samplePixels.length;
  const bgG = totalG / samplePixels.length;
  const bgB = totalB / samplePixels.length;
  console.log(`Sampled Background Color: RGB(${bgR.toFixed(1)}, ${bgG.toFixed(1)}, ${bgB.toFixed(1)})`);

  // Create transparent buffer by calculating color distance from background
  const transparentBuffer = Buffer.from(data);

  // Background threshold tuning:
  // The background has subtle texture/gradient.
  // We calculate Euclidean color distance from (bgR, bgG, bgB).
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const dist = Math.sqrt(
        Math.pow(r - bgR, 2) +
        Math.pow(g - bgG, 2) +
        Math.pow(b - bgB, 2)
      );

      // Smooth falloff for soft edges and shadows
      if (dist < 18) {
        // Complete background
        transparentBuffer[idx + 3] = 0;
      } else if (dist < 38) {
        // Anti-aliased transition edge
        const alphaRatio = (dist - 18) / (38 - 18);
        transparentBuffer[idx + 3] = Math.round(alphaRatio * 255);
      }
    }
  }

  // Save transparent full logo
  await sharp(transparentBuffer, {
    raw: { width, height, channels: 4 }
  })
  .png({ compressionLevel: 9 })
  .toFile(path.join(outputDir, 'logo-transparent.png'));
  console.log('Saved: logo-transparent.png');

  // Also save a trimmed version of logo-transparent
  await sharp(path.join(outputDir, 'logo-transparent.png'))
    .trim()
    .toFile(path.join(outputDir, 'logo-trimmed.png'));
  console.log('Saved: logo-trimmed.png');

  // Also get dimensions of trimmed logo
  const trimmedMeta = await sharp(path.join(outputDir, 'logo-trimmed.png')).metadata();
  console.log('Trimmed dimensions:', trimmedMeta.width, 'x', trimmedMeta.height);

  // 2. Extract Monogram (top MB emblem)
  // In the original 1672x941 image, the MB monogram is located roughly between Y: 130 and Y: 620, X: 450 and X: 1250
  const monogramCrop = {
    left: Math.floor(width * 0.25),
    top: Math.floor(height * 0.12),
    width: Math.floor(width * 0.50),
    height: Math.floor(height * 0.53)
  };

  await sharp(path.join(outputDir, 'logo-transparent.png'))
    .extract(monogramCrop)
    .trim()
    .toFile(path.join(outputDir, 'logo-monogram.png'));
  console.log('Saved: logo-monogram.png');

  // 3. Extract Wordmark ("Merit & Beyond" text)
  // In the original 1672x941 image, the text is located between Y: 600 and Y: 850
  const wordmarkCrop = {
    left: Math.floor(width * 0.05),
    top: Math.floor(height * 0.62),
    width: Math.floor(width * 0.90),
    height: Math.floor(height * 0.26)
  };

  await sharp(path.join(outputDir, 'logo-transparent.png'))
    .extract(wordmarkCrop)
    .trim()
    .toFile(path.join(outputDir, 'logo-wordmark.png'));
  console.log('Saved: logo-wordmark.png');

  // 4. Generate app icon / favicon
  await sharp(path.join(outputDir, 'logo-monogram.png'))
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(__dirname, '../public/favicon.png'));

  await sharp(path.join(outputDir, 'logo-monogram.png'))
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  console.log('Saved favicons and app icons!');
}

processLogo().catch(console.error);
