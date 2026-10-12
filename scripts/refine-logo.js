const sharp = require('sharp');
const path = require('path');

async function refineLogoSuite() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public/images');

  // 1. Monogram clean crop (top 120, height 490)
  const monogram = await sharp(inputPath)
    .extract({
      left: 440,
      top: 120,
      width: 820,
      height: 485
    })
    .toBuffer();

  await sharp(monogram)
    .toFile(path.join(outputDir, 'logo-monogram-clean.png'));

  // 2. Wordmark clean crop: start from left: 100 to ensure full "M" droplet
  const wordmark = await sharp(inputPath)
    .extract({
      left: 110,
      top: 615,
      width: 1460,
      height: 265
    })
    .toBuffer();

  await sharp(wordmark)
    .toFile(path.join(outputDir, 'logo-wordmark-clean.png'));

  // Sample exact background color from the extracted wordmark corner
  const wordRaw = await sharp(wordmark).raw().toBuffer({ resolveWithObject: true });
  const bgR = wordRaw.data[0];
  const bgG = wordRaw.data[1];
  const bgB = wordRaw.data[2];
  console.log(`Wordmark Background Sample: RGB(${bgR}, ${bgG}, ${bgB})`);

  // 3. Create refined Horizontal Lockup
  const scaledMono = await sharp(monogram)
    .resize({ height: 120 })
    .toBuffer();
  const monoMeta = await sharp(scaledMono).metadata();

  const scaledWord = await sharp(wordmark)
    .resize({ height: 80 })
    .toBuffer();
  const wordMeta = await sharp(scaledWord).metadata();

  const canvasWidth = monoMeta.width + wordMeta.width + 40;
  const canvasHeight = 136;

  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 3,
      background: { r: bgR, g: bgG, b: bgB }
    }
  })
  .composite([
    {
      input: scaledMono,
      left: 10,
      top: Math.floor((canvasHeight - monoMeta.height) / 2)
    },
    {
      input: scaledWord,
      left: monoMeta.width + 20,
      top: Math.floor((canvasHeight - wordMeta.height) / 2)
    }
  ])
  .png()
  .toFile(path.join(outputDir, 'logo-horizontal.png'));

  // 4. Also create rounded-corner badge versions for clean embedding
  // A circular / rounded rectangle icon of the MB monogram
  const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="300" height="300" rx="40" ry="40"/></svg>`
  );

  await sharp(monogram)
    .resize(300, 300, { fit: 'cover' })
    .composite([{
      input: roundedCorners,
      blend: 'dest-in'
    }])
    .png()
    .toFile(path.join(outputDir, 'logo-monogram-rounded.png'));

  // 5. Update Favicon & App Icons
  await sharp(monogram)
    .resize(192, 192, { fit: 'cover' })
    .png()
    .toFile(path.join(__dirname, '../public/favicon.png'));

  await sharp(monogram)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  console.log('Refined logo suite created successfully.');
}

refineLogoSuite().catch(console.error);
