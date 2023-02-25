import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "info",
      prefix: "/doc/",
      link: "doc/",
      children:["guideline/Introduction.md", "guideline/Tutorial.md", "guideline/code.md", "guideline/build.md", "guideline/releases.md", "guideline/publications.md"],
    },
    {
      text: "About",
      icon: "creative",
      prefix: "about/",
      link: "about/",
      children: ["learnmore/FAQ.md", "learnmore/Team.md", "learnmore/Releases.md", "learnmore/Community.md"], 
    },
    "slides",
  ],
});
