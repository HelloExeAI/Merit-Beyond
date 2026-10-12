const sharp = require('sharp');
const path = require('path');

async function createDarkWordmark() {
  const wordmarkPath = path.join(__dirname, '../public/images/logo-wordmark.png');
  const outputDir = path.join(__dirname, '../public/images');

  const { data, info } = await sharp(wordmarkPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Sample corner background color
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];

  // Create transparent wordmark
  const transparentData = Buffer.from(data);
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dist = Math.sqrt(
      Math.pow(r - bgR, 2) +
      Math.pow(g - bgG, 2) +
      Math.pow(b - bgB, 2)
    );

    if (dist < 15) {
      transparentData[i + 3] = 0;
    } else if (dist < 32) {
      transparentData[i + 3] = Math.round(((dist - 15) / 17) * 255);
    }
  }

  await sharp(transparentData, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(path.join(outputDir, 'logo-wordmark-transparent.png'));

  // Also create a version on dark mahogany background (#552A19 -> RGB 85, 42, 25)
  // We can composite the transparent wordmark with a subtle gold glow
  const darkCanvas = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 68, g: 32, b: 19, alpha: 1 } // #442013
    }
  })
  .composite([
    {
      input: path.join(outputDir, 'logo-wordmark-transparent.png'),
      blend: 'over'
    }
  ])
  .png()
  .toFile(path.join(outputDir, 'logo-wordmark-dark-bg.png'));

  console.log('Dark wordmark created successfully.');
}

createDarkWordmark().catch(console.error);
