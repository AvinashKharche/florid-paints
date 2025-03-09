const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateIcons() {
  const svgPath = path.join(__dirname, '../src/assets/images/logos/paintpro-icon.svg');
  const publicDir = path.join(__dirname, '../public');

  try {
    const svgBuffer = await fs.readFile(svgPath);

    // Generate favicon.png (32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(publicDir, 'favicon.png'));

    // Generate logo192.png
    await sharp(svgBuffer)
      .resize(192, 192)
      .toFormat('png')
      .toFile(path.join(publicDir, 'logo192.png'));

    // Generate logo512.png
    await sharp(svgBuffer)
      .resize(512, 512)
      .toFormat('png')
      .toFile(path.join(publicDir, 'logo512.png'));

    console.log('✅ Icons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating icons:', error);
  }
}

generateIcons(); 