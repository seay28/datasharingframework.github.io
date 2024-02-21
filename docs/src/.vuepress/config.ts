import { webpackBundler } from '@vuepress/bundler-webpack';
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  host: "127.0.0.1",
  base: "/",
  
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),

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
  plugins: [],

  // Enable it with pwa
  shouldPrefetch: false,
  theme
});
