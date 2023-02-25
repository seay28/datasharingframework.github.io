import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
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
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
