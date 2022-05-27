const sharp = require("sharp");
const fs = require('fs');
let iconsData = JSON.parse(fs.readFileSync('node_modules/uiowa-brand-icons/icons.json', 'utf-8'));

fs.rmSync('public/brand-icons', {
    recursive: true,
    force: true
});
fs.mkdirSync('public/brand-icons');

console.log('Building images based on the icons listed in node_modules/uiowa-brand-icons/icons.json. This may take a while.');

async function main() { // only loop through the first item for now, remove/add .slice(0,1) to run on entire set or a limited set:
    iconsData.icons.slice(0, 1).forEach((item) => {
        createVariant(item.name, "one-color");
        createVariant(item.name, "two-color");
    });
};

main();

// @todo clean this up... a lot.
async function createVariant(icon, variant) {

    var originalImage;
    var destImage;
    try {

        switch (variant) {
            case "one-color": originalImage = "node_modules/uiowa-brand-icons/icons/" + icon + ".svg";
                // one-color-black.png
                await sharp(originalImage).resize({width: 751, height: 751}).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-black.png");
                // one-color-white.png
                await sharp(originalImage).modulate({lightness: 100}).resize({width: 751, height: 751}).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-white.png");
                // one-color-gold.png (dependent on one-color-black.png)
                await sharp({
                    create: {
                        width: 751,
                        height: 751,
                        channels: 4,
                        background: '#FFCD00'
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-one-color-black.png",
                        blend: "dest-in"
                    },]).resize({width: 751, height: 751}).png({colors: 16}).toFile("public/brand-icons/" + icon + "-one-color-gold.png");

                // Aspect ratios
                // white-square (dependent on -one-color-white.png)
                await createOneColorPaddedVariant(icon, variant, 'white', 1000, 1000, 'square', 'black')
                // white-wide (dependent on -one-color-white.png)
                await createOneColorPaddedVariant(icon, variant, 'white', 1920, 1080, 'wide', 'black')
                // gold-square (dependent on gold.png)
                await createOneColorPaddedVariant(icon, variant, 'gold', 1000, 1000, 'square', {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                })
                // gold-wide (dependent on gold.png)
                await createOneColorPaddedVariant(icon, variant, 'gold', 1920, 1080, 'wide', {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                })
                // one-color-black-square (dependent on one-color-black.png)
                await createOneColorPaddedVariant(icon, variant, 'black', 1000, 1000, 'square', {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                })

                // one-color-black-wide (dependent on one-color-black.png)
                await createOneColorPaddedVariant(icon, variant, 'black', 1920, 1080, 'wide', {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                });
                break;

            case "two-color": originalImage = "node_modules/uiowa-brand-icons/icons/" + icon + "-two-color.svg";
                // two-color.svg (no manipulation, just copies svg from node_modules)
                fs.copyFile(originalImage, "public/brand-icons/" + icon + "-" + variant + ".svg", (err) => {
                    if (err) {
                        console.log("Error Found:", err);
                    }
                })

                // two-color.png (possibly discontinued for public consumption, but needed for generating following icons)
                await sharp(originalImage).resize({width: 751, height: 751}).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + ".png");

                // two-color-wide (dependent on two-color.png)
                await createTwoColorPaddedVariant(icon, variant, 1920, 1080, 'wide', {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                });
                // two-color-square (dependent on two-color.png)
                await createTwoColorPaddedVariant(icon, variant, 1000, 1000, 'square', {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                });
                break;
            default:

        }
    } catch (error) {
        console.log(error);
    }

    async function createOneColorPaddedVariant(icon, variant, color, width, height, ratio, background) {
        await sharp({
            create: {
                width: width,
                height: height,
                channels: 4,
                background: background
            }
        }).composite([{
                input: "public/brand-icons/" + icon + "-" + variant + "-" + color + ".png",
                blend: "over"
            },]).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-" + color + "-" + ratio + ".png");


    }

    async function createTwoColorPaddedVariant(icon, variant, width, height, ratio, background) {
        await sharp({
            create: {
                width: width,
                height: height,
                channels: 4,
                background: background
            }
        }).composite([{
                input: "public/brand-icons/" + icon + "-two-color.png",
                blend: "over"
            },]).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-" + ratio + ".png");
    }
}
