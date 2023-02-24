import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/about/",
    children: [
      {
        text: "Architecture",
        icon: "creative",
        prefix: "about/",
        children: ["Overview", { text: "...", icon: "more", link: "" }, "Team", { text: "...", icon: "more", link: ""}],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
