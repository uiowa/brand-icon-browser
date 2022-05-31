const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin-next");
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    // if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSPAPlugin({
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, "dist"),
          // Required - Routes to render.
          routes: ["/", "/category/home-personal/"],
        }),
      ],
    };
  },
});
