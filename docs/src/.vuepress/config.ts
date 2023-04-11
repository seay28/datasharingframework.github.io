import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/",

  /*locales: {
    "/": {
      lang: "en-US",
      title: "",
      description: "A performant, secure and innovative framework that enables healthcare data exchange across organizational boundaries.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description: "A performant, secure and innovative framework that enables healthcare data exchange across organizational boundaries.",
    },
  },*/

  // Enable it with pwa
  shouldPrefetch: false,
  theme
});
