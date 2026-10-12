const sharp = require('sharp');
const path = require('path');

async function createLogoSuite() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public/images');

  // 1. Monogram clean crop (130 to 600)
  const monogram = await sharp(inputPath)
    .extract({
      left: 450,
      top: 130,
      width: 800,
      height: 472
    })
    .toBuffer();

  await sharp(monogram)
    .toFile(path.join(outputDir, 'logo-monogram-clean.png'));
  console.log('Saved: logo-monogram-clean.png');

  // 2. Wordmark clean crop (625 to 870)
  const wordmark = await sharp(inputPath)
    .extract({
      left: 170,
      top: 620,
      width: 1350,
      height: 250
    })
    .toBuffer();

  await sharp(wordmark)
    .toFile(path.join(outputDir, 'logo-wordmark-clean.png'));
  console.log('Saved: logo-wordmark-clean.png');

  // 3. Create Horizontal Lockup:
  // Monogram on left (height 120, width ~203)
  // Wordmark on right (height 80, width ~432)
  // Total canvas height 140, total width 700
  // Background color matching parchment: #D4BFA5 (RGB 212, 191, 165)
  const scaledMono = await sharp(monogram)
    .resize({ height: 110 })
    .toBuffer();
  const monoMeta = await sharp(scaledMono).metadata();

  const scaledWord = await sharp(wordmark)
    .resize({ height: 70 })
    .toBuffer();
  const wordMeta = await sharp(scaledWord).metadata();

  const canvasWidth = monoMeta.width + wordMeta.width + 50;
  const canvasHeight = 130;

  // Background matching parchment
  const horizontalLockup = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 212, g: 191, b: 165, alpha: 1 }
    }
  })
  .composite([
    {
      input: scaledMono,
      left: 15,
      top: Math.floor((canvasHeight - monoMeta.height) / 2)
    },
    {
      input: scaledWord,
      left: monoMeta.width + 30,
      top: Math.floor((canvasHeight - wordMeta.height) / 2) + 2
    }
  ])
  .png()
  .toFile(path.join(outputDir, 'logo-horizontal.png'));

  console.log('Saved: logo-horizontal.png');

  // 4. Update Favicon & App Icons
  await sharp(monogram)
    .resize(192, 192, { fit: 'contain', background: { r: 212, g: 191, b: 165, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));

  await sharp(monogram)
    .resize(180, 180, { fit: 'contain', background: { r: 212, g: 191, b: 165, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  console.log('Saved updated icons and suite.');
}

createLogoSuite().catch(console.error);
