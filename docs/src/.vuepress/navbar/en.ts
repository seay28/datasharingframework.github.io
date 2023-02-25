import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
    {
      text: "Docs",
      icon: "info",
      prefix: "/doc/",
      children: [
        {
          text: "Guideline",
          icon: "info",
          prefix: "guideline/",
          children: ["Introduction", "Tutorial", "Code", "Build", "Releases", "Publications"],
        }
      ]
    },
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
  }
]);
