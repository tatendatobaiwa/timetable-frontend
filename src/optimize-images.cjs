const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const fs = require('fs').promises;

async function convertToWebP() {
    try {
        const imageFiles = glob.sync('/home/user/timetable-frontend/src/assets/**/*.{jpg,jpeg,png,gif}');
        
        if (imageFiles.length === 0) {
            console.log('No images found in src/assets directory');
            return;
        }

        console.log(`Found ${imageFiles.length} images to convert`);

        for (const file of imageFiles) {
            const filename = path.parse(file).name;
            const directory = path.dirname(file);
            const outputPath = path.join(directory, `${filename}.webp`);

            try {
                // Read image metadata to preserve orientation
                const metadata = await sharp(file).metadata();

                await sharp(file)
                    .rotate() // Automatically rotate based on EXIF orientation
                    .webp({
                        quality: 80, // Adjust quality as needed (0-100)
                        effort: 4,   // Compression effort (0-6)
                    })
                    .toFile(outputPath);

                console.log(`✓ Converted: ${file} -> ${outputPath}`);
                
                // Optional: Remove original file
                // await fs.unlink(file);
            } catch (err) {
                console.error(`✗ Error converting ${file}:`, err.message);
            }
        }

        console.log('\nConversion complete!');
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Run the conversion
convertToWebP();