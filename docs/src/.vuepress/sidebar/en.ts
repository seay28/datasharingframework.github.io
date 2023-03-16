import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "info",
      prefix: "/doc/",
      link: "doc/",
      children:["guideline/Introduction.md", "guideline/code.md", "guideline/build.md", "guideline/libraries.md", "guideline/releases.md", "guideline/publications.md", "guideline/Tutorial.md"],
    },
    {
      text: "About",
      icon: "creative",
      prefix: "about/",
      link: "about/",
      children: ["learnmore/FAQ.md", "learnmore/Contributors.md", "learnmore/Partners.md", "learnmore/Public.md", "learnmore/Projects.md", "learnmore/Releases.md", "learnmore/Community.md"], 
    },
    "slides",
  ],
});
