const sharp = require("sharp");
const fs = require('fs');
let iconsData = JSON.parse(fs.readFileSync('node_modules/uiowa-brand-icons/icons.json', 'utf-8'));

fs.rmSync('public/brand-icons', {
    recursive: true,
    force: true
});
fs.mkdirSync('public/brand-icons');

// only loop through the first item for now, remove .slice to run on entire set
// iconsData.icons.forEach((item) => {
//     createVariant(item.name, "one-color");
//     createVariant(item.name, "two-color");
// });

// @todo clean this up... a lot.
async function createVariant(icon, variant) {

    var originalImage;
    var destImage;
    try {

        switch (variant) {
            case "one-color": originalImage = "node_modules/uiowa-brand-icons/icons/" + icon + ".svg"
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


                // Aspect ratios (@todo separate function(s) for these?)

                // white-square (dependent on -one-color-white.png)
                await sharp({
                    create: {
                        width: 1000,
                        height: 1000,
                        channels: 4,
                        background: 'black'
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-one-color-white.png",
                        blend: "over"
                    },]).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-white-square.png");

                // white-wide (dependent on -one-color-white.png)
                await sharp({
                    create: {
                        width: 1920,
                        height: 1080,
                        channels: 4,
                        background: 'black'
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-one-color-white.png",
                        blend: "over"
                    },]).toFile("public/brand-icons/" + icon + "-" + variant + "-white-wide.png");


                // gold-square (dependent on gold.png)
                await sharp({
                    create: {
                        width: 1000,
                        height: 1000,
                        channels: 4,
                        background: {
                            r: 0,
                            g: 0,
                            b: 0,
                            alpha: 0
                        }
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-one-color-gold.png",
                        blend: "over"
                    },]).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-gold-square.png");

                // gold-wide (dependent on gold.png)
                await sharp({
                    create: {
                        width: 1920,
                        height: 1080,
                        channels: 4,
                        background: {
                            r: 0,
                            g: 0,
                            b: 0,
                            alpha: 0
                        }
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-one-color-gold.png",
                        blend: "over"
                    },]).toFile("public/brand-icons/" + icon + "-" + variant + "-gold-wide.png");

                // one-color-black-square (dependent on one-color-black.png)
                await sharp({
                    create: {
                        width: 1000,
                        height: 1000,
                        channels: 4,
                        background: {
                            r: 0,
                            g: 0,
                            b: 0,
                            alpha: 0
                        }
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-one-color-black.png",
                        blend: "over"
                    },]).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-black-square.png");

                // one-color-black-wide (dependent on one-color-black.png)
                await sharp({
                    create: {
                        width: 1920,
                        height: 1080,
                        channels: 4,
                        background: {
                            r: 0,
                            g: 0,
                            b: 0,
                            alpha: 0
                        }
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-one-color-black.png",
                        blend: "over"
                    },]).toFile("public/brand-icons/" + icon + "-" + variant + "-black-wide.png");


                break;
            case "two-color": originalImage = "node_modules/uiowa-brand-icons/icons/" + icon + "-two-color.svg";
                // two-color.svg (no manipulation, just copies)
                fs.copyFile(originalImage, "public/brand-icons/" + icon + "-" + variant + ".svg", (err) => {
                    if (err) {
                        console.log("Error Found:", err);
                    }
                })

                // two-color.png (possibly discontinued)
                await sharp(originalImage).resize({width: 751, height: 751}).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + ".png");

                // two-color-wide (dependent on two-color.png)
                await sharp({
                    create: {
                        width: 1920,
                        height: 1080,
                        channels: 4,
                        background: {
                            r: 0,
                            g: 0,
                            b: 0,
                            alpha: 0
                        }
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-two-color.png",
                        blend: "over"
                    },]).toFile("public/brand-icons/" + icon + "-" + variant + "-wide.png");

                // two-color-square (dependent on two-color.png)
                await sharp({
                    create: {
                        width: 1000,
                        height: 1000,
                        channels: 4,
                        background: {
                            r: 0,
                            g: 0,
                            b: 0,
                            alpha: 0
                        }
                    }
                }).composite([{
                        input: "public/brand-icons/" + icon + "-two-color.png",
                        blend: "over"
                    },]).png({colors: 16}).toFile("public/brand-icons/" + icon + "-" + variant + "-square.png");
                break;
            default:

        }
    } catch (error) {
        console.log(error);
    }


}
