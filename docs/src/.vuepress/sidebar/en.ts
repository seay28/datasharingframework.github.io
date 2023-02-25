import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "info",
      text: "Docs",
      prefix: "demo/",
      link: "demo/",
      children: ["guide/introduction.md", "guide/tutorial.md", "guide/code.md", "guide/build_and_test.md", "guide/releases_and_deployment.md", "guide/publications.md"], 
    },
    {
      text: "About",
      icon: "note",
      prefix: "about/",
      link: "about/",
      children: ["learnmore/FAQ.md", "learnmore/Team.md", "learnmore/Releases.md", "learnmore/Community.md"], 
    },
    "slides",
  ],
});
