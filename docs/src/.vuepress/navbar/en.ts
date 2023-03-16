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
          children: ["Introduction", "Code", "Build", "Libraries", "Releases", "Publications", "Tutorial"],
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
        children: ["FAQ", "Contributors", "Partners", "Public", "Projects", "Releases", "Community"],
      },
    ],
  }
]);
