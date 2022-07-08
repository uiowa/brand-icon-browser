const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const fs = require("fs");
const PrerenderSPAPlugin = require("prerender-spa-plugin-next");
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer;
const catData = JSON.parse(
  fs.readFileSync("node_modules/uiowa-brand-icons/categories.json", "utf-8")
);
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    //Prerender the homepage route and all category routes:
    const categories = catData.categories;
    let preRenderRoutes = ["/"];

    categories.forEach((item) =>
      preRenderRoutes.push("/category/" + item.slug)
    );

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: preRenderRoutes,
        }),
      ],
    };
  },
});
