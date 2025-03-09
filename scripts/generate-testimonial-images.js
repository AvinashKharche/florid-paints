const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateImages() {
  const svgPath = path.join(__dirname, '../src/assets/images/logos/default-avatar.svg');
  const publicDir = path.join(__dirname, '../public/images/testimonials');

  try {
    const svgBuffer = await fs.readFile(svgPath);

    // Generate default avatar
    await sharp(svgBuffer)
      .resize(512, 512)
      .toFormat('png')
      .toFile(path.join(publicDir, 'default-avatar.png'));

    // Generate placeholder testimonial images
    for (let i = 1; i <= 4; i++) {
      await sharp(svgBuffer)
        .resize(512, 512)
        .toFormat('png')
        .toFile(path.join(publicDir, `testimonial-${i}.png`));
    }

    console.log('✅ Testimonial images generated successfully!');
  } catch (error) {
    console.error('❌ Error generating images:', error);
  }
}

generateImages(); 