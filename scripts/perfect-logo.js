const sharp = require('sharp');
const path = require('path');

async function perfectSuite() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public/images');

  // Input is 1672 x 941
  // Full monogram bounding box:
  // X: 370 to 1290 (width ~ 920)
  // Y: 20 to 615 (height ~ 595)
  // Let's create a perfect square crop for the monogram emblem:
  // Center is X: 830, Y: 310
  // Size 680x680
  const monoSquare = await sharp(inputPath)
    .extract({
      left: 370,
      top: 15,
      width: 920,
      height: 600
    })
    .resize(500, 500, { fit: 'contain', background: { r: 215, g: 191, b: 165 } })
    .toBuffer();

  await sharp(monoSquare)
    .toFile(path.join(outputDir, 'logo-monogram-full.png'));

  // Rounded icon with gold border for header
  const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="200" height="200" rx="36" ry="36"/></svg>`
  );

  await sharp(monoSquare)
    .resize(200, 200)
    .composite([{
      input: roundedCorners,
      blend: 'dest-in'
    }])
    .png()
    .toFile(path.join(outputDir, 'logo-icon.png'));

  // Favicon
  await sharp(monoSquare)
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));

  await sharp(monoSquare)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // Wordmark:
  // X: 110 to 1570 (width: 1460)
  // Y: 610 to 880 (height: 270)
  await sharp(inputPath)
    .extract({
      left: 110,
      top: 610,
      width: 1460,
      height: 270
    })
    .toFile(path.join(outputDir, 'logo-wordmark.png'));

  // Full badge:
  await sharp(inputPath)
    .extract({
      left: 100,
      top: 15,
      width: 1480,
      height: 875
    })
    .toFile(path.join(outputDir, 'logo-full-badge.png'));

  console.log('Perfect logo suite generated.');
}

perfectSuite().catch(console.error);
