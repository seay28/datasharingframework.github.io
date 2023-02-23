import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Guide",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Learn More",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
