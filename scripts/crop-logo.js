const sharp = require('sharp');
const path = require('path');

async function inspectCrops() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public/images');

  // Let's create high quality crops with original background intact:
  
  // 1. Monogram only:
  // In 1672x941:
  // M starts around X: 470, Y: 140
  // B ends around X: 1240, Y: 600
  // The bottom loop of B ends at Y: 605
  // The wordmark starts around Y: 630
  // Let's crop Monogram:
  await sharp(inputPath)
    .extract({
      left: 450,
      top: 130,
      width: 800,
      height: 485
    })
    .toFile(path.join(outputDir, 'monogram-original.png'));

  // 2. Wordmark only:
  // Starts around X: 170, Y: 620
  // Ends around X: 1530, Y: 870
  await sharp(inputPath)
    .extract({
      left: 170,
      top: 620,
      width: 1350,
      height: 250
    })
    .toFile(path.join(outputDir, 'wordmark-original.png'));

  // 3. Full centered logo:
  await sharp(inputPath)
    .extract({
      left: 160,
      top: 120,
      width: 1360,
      height: 760
    })
    .toFile(path.join(outputDir, 'logo-full-badge.png'));

  console.log('Crops generated successfully.');
}

inspectCrops().catch(console.error);
