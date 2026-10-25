const sharp = require('sharp');
const path = require('path');

async function analyze() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Let's sample border pixels from all 4 borders (which are 100% background)
  let sumR = 0, sumG = 0, sumB = 0, count = 0;
  let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;

  for (let x = 0; x < width; x += 5) {
    // Top border
    for (let y = 0; y < 30; y += 5) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      sumR += r; sumG += g; sumB += b; count++;
      minR = Math.min(minR, r); maxR = Math.max(maxR, r);
      minG = Math.min(minG, g); maxG = Math.max(maxG, g);
      minB = Math.min(minB, b); maxB = Math.max(maxB, b);
    }
    // Bottom border
    for (let y = height - 30; y < height; y += 5) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      sumR += r; sumG += g; sumB += b; count++;
      minR = Math.min(minR, r); maxR = Math.max(maxR, r);
      minG = Math.min(minG, g); maxG = Math.max(maxG, g);
      minB = Math.min(minB, b); maxB = Math.max(maxB, b);
    }
  }

  const avgR = sumR / count;
  const avgG = sumG / count;
  const avgB = sumB / count;

  console.log(`Background average: RGB(${avgR.toFixed(1)}, ${avgG.toFixed(1)}, ${avgB.toFixed(1)})`);
  console.log(`R range: [${minR}, ${maxR}], G range: [${minG}, ${maxG}], B range: [${minB}, ${maxB}]`);
  console.log(`Color ratios: G/R = ${(avgG/avgR).toFixed(3)}, B/R = ${(avgB/avgR).toFixed(3)}`);
}

analyze().catch(console.error);
