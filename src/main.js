import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";
createApp(App)
  .use(router)
  .use(
    VueGtag,
    {
      config: { id: "G-JPCWR6L7FQ" },
    },
    router
  )
  .mount("#app");
