import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  host: "127.0.0.1",
  base: "/",

  /*locales: {
    "/": {
      lang: "en-US",
      title: "",
      description: "",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description: "",
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
