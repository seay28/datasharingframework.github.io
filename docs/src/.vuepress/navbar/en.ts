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
          children: ["Introduction", "generalInformation", "Code", "Build", "Releases", "Publications", "Tutorial"],
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
        children: ["FAQ", "Contributors", "Partners", "Public", "Projects", "Community"],
      },
    ],
  },
  {
    text: "v 0.9.0",
    icon: "note",
    // children:["/v1/"],
    children: ["/v1/", { text: "v 1.0", link: "https://www.google.com/" }],
  },
  {
    text: "V 1.0 ",
    icon: "note",
    link: "https://www.google.com/",
  },
  {
    text: "",
    icon: "github",
    link: "https://github.com/highmed/highmed-dsf",
  },
]);

