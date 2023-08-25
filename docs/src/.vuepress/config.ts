import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  host: "127.0.0.1",
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
    sitemapPlugin({
      // your options
      hostname: 'dsf.dev'
    }),
  ],

  // Enable it with pwa
  shouldPrefetch: false,
  theme
});
