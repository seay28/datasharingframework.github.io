import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "info",
      prefix: "/doc/",
      link: "doc/",
      children:["guideline/Introduction.md", "guideline/generalInformation/", "guideline/code/", "guideline/build/", "guideline/releases/", "guideline/publications.md", "guideline/tutorial/"],
    },
    {
      text: "About",
      icon: "creative",
      prefix: "about/",
      link: "about/",
      children: ["learnmore/FAQ.md", "learnmore/Contributors.md", "learnmore/Partners.md", "learnmore/Public.md", "learnmore/Projects.md", "learnmore/Community.md"], 
    },
    // "slides",
  ],
});
