import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Docs", 
    icon: "info", 
    link: "/demo/",
    children: [
      {
        text: "Guide",
        icon: "info",
        prefix: "demo/",
        children: ["guide/introduction.md", "guide/tutorial.md", "guide/code.md", "guide/build_and_test.md", "guide/releases_and_deployment.md", "guide/publications.md"],
      }
    ],},
  {
    text: "About",
    icon: "creative",
    prefix: "/about/",  
    children: [
      {
        text: "Learn More",
        icon: "creative",
        prefix: "learnmore/", 
        children: ["FAQ", "Team", "Releases", "Community"],
      },
    ],
  },
]);
