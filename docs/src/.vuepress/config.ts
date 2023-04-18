import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchProPlugin } from "vuepress-plugin-search-pro";

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
  plugins: [
    searchProPlugin({
      // index all contents
      indexContent: true,
    }),
  ],

  // Enable it with pwa
  shouldPrefetch: false,
  theme
});
