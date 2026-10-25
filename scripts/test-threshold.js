const sharp = require('sharp');
const path = require('path');

async function testHist() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Plane coefficients from previous step:
  const planeR = [ -0.00434, -0.02055, 204.25 ];
  const planeG = [ -0.00483, -0.02270, 175.77 ];
  const planeB = [ -0.00519, -0.02314, 142.71 ];

  // Let's sample inside the empty background (top-left 200x200)
  let maxBgDist = 0;
  for (let y = 0; y < 200; y++) {
    for (let x = 0; x < 200; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const expR = planeR[0] * x + planeR[1] * y + planeR[2];
      const expG = planeG[0] * x + planeG[1] * y + planeG[2];
      const expB = planeB[0] * x + planeB[1] * y + planeB[2];
      const dist = Math.sqrt(Math.pow(r-expR,2) + Math.pow(g-expG,2) + Math.pow(b-expB,2));
      if (dist > maxBgDist) maxBgDist = dist;
    }
  }
  console.log('Max distance in pure background region (200x200):', maxBgDist.toFixed(1));

  // Let's check sample points on the letters:
  // Black letter M center: around (600, 300)
  const idxBlack = (300 * width + 600) * channels;
  const expR_b = planeR[0] * 600 + planeR[1] * 300 + planeR[2];
  const expG_b = planeG[0] * 600 + planeG[1] * 300 + planeG[2];
  const expB_b = planeB[0] * 600 + planeB[1] * 300 + planeB[2];
  const distBlack = Math.sqrt(Math.pow(data[idxBlack]-expR_b,2) + Math.pow(data[idxBlack+1]-expG_b,2) + Math.pow(data[idxBlack+2]-expB_b,2));
  console.log(`Black center pixel distance: ${distBlack.toFixed(1)} (RGB: ${data[idxBlack]}, ${data[idxBlack+1]}, ${data[idxBlack+2]})`);

  // Gold bevel: around (500, 200)
  const idxGold = (200 * width + 500) * channels;
  const expR_g = planeR[0] * 500 + planeR[1] * 200 + planeR[2];
  const expG_g = planeG[0] * 500 + planeG[1] * 200 + planeG[2];
  const expB_g = planeB[0] * 500 + planeB[1] * 200 + planeB[2];
  const distGold = Math.sqrt(Math.pow(data[idxGold]-expR_g,2) + Math.pow(data[idxGold+1]-expG_g,2) + Math.pow(data[idxGold+2]-expB_g,2));
  console.log(`Gold bevel pixel distance: ${distGold.toFixed(1)} (RGB: ${data[idxGold]}, ${data[idxGold+1]}, ${data[idxGold+2]})`);
}

testHist().catch(console.error);
