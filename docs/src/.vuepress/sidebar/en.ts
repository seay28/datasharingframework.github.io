import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Docs",
      prefix: "demo/",
      link: "demo/",
      children: "structure",// ["Introduction", "Tutorial", "Code", "Publications"],
    },
    {
      text: "About",
      icon: "note",
      prefix: "about/",
      children: "structure",// ["FAQ", "Team", "Releases", "Community Guide"],
    },
    "slides",
  ],
});
