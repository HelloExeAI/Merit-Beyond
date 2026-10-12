const sharp = require('sharp');
const path = require('path');

async function fixIcon() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public/images');

  // Exact crop for MB monogram with NO bottom text:
  // Top: 120, Left: 430, Width: 830, Height: 485
  const mono = await sharp(inputPath)
    .extract({
      left: 430,
      top: 120,
      width: 830,
      height: 485
    })
    .resize(300, 300, { fit: 'contain', background: { r: 212, g: 191, b: 165 } })
    .toBuffer();

  const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="300" height="300" rx="54" ry="54"/></svg>`
  );

  await sharp(mono)
    .composite([{
      input: roundedCorners,
      blend: 'dest-in'
    }])
    .png()
    .toFile(path.join(outputDir, 'logo-icon.png'));

  // Also full monogram square without rounded mask
  await sharp(mono)
    .png()
    .toFile(path.join(outputDir, 'logo-monogram-full.png'));

  console.log('Icon refined.');
}

fixIcon().catch(console.error);
