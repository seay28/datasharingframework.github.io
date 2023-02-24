import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Docs",
      prefix: "demo/",
      link: "demo/",
      children: ["guide/Introduction.md", "guide/Tutorial.md", "guide/Code.md", "guide/Publications.md"], // "structure",// ["Introduction", "Tutorial", "Code", "Publications"],
    },
    {
      text: "About",
      icon: "note",
      prefix: "about/",
      children: ["learnmore/FAQ.md", "learnmore/Team.md", "learnmore/Releases.md", "learnmore/Community.md"], // "structure",// ["FAQ", "Team", "Releases", "Community Guide"],
    },
    "slides",
  ],
});
