const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateImages() {
  const svgPath = path.join(__dirname, '../src/assets/images/logos/default-avatar.svg');
  const assetsDir = path.join(__dirname, '../src/assets/images/testimonials');

  try {
    const svgBuffer = await fs.readFile(svgPath);

    // Generate default avatar
    await sharp(svgBuffer)
      .resize(128, 128)  // Smaller size since it's for UI
      .toFormat('png')
      .toFile(path.join(assetsDir, 'default-avatar.png'));

    // Generate placeholder testimonial images
    for (let i = 1; i <= 4; i++) {
      await sharp(svgBuffer)
        .resize(128, 128)  // Smaller size since it's for UI
        .toFormat('png')
        .toFile(path.join(assetsDir, `testimonial-${i}.png`));
    }

    console.log('✅ Testimonial images generated successfully!');
  } catch (error) {
    console.error('❌ Error generating images:', error);
  }
}

generateImages(); 