import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Guide", icon: "discover", link: "/demo/" },
  {
    text: "Learn More",
    icon: "creative",
    prefix: "/guide/",  //update text and prefix later to "learnmore"
    children: [
      {
        text: "Architecture",
        icon: "creative",
        prefix: "architecture/",
        children: ["Overview", "Team"],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },
]);
