import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "",
      // description: "A docs demo for DSF",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "",
     // description: "docs for DSF",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
