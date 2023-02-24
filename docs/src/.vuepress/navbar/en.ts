import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Docs", 
    icon: "discover", 
    link: "/demo/",
    children: [
      {
        text: "Guide",
        icon: "creative",
        prefix: "guide/",
        children: ["Introduction", "Tutorial", "Code", "Publications"],
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
