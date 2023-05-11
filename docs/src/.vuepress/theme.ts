import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  author: {
    name: "DSF-Team",
    url: "/about/learnmore/team.html", // ToDo
  },

  iconAssets: "iconfont",

  logo: "/photos/home/logo-small.svg",
  darkmode: "toggle",
  contributors: false,
  
  // repo: "https://github.com/highmed/highmed-dsf/",
  // repoLabel: "GitHub",
  // repoDisplay: true,

 // docsDir: "demo/theme-docs/src",
 navbar: [
  {
    text: "Home",
    icon: "home",
    link: "/",
  },  
  {
      text: "Docs",
      icon: "info",
      prefix: "/stable/",
      children: [
        {
          text: "Guideline v0.9.1 (stable)",
          icon: "info",
          prefix: "guideline/",
          children: ["introduction", "generalinformation", "code", "build", "releases", "publications", "tutorial"],
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
        children: ["contact", "team", "partners", "public", "projects", "community"],
      },
    ],
  },
  {
    text: "Versions",
    icon: "note",
    // children:["/v1/"],
    children: [{ text: "V0.9.1 (stable)", link: "/stable/" }, { text: "V1.0.0-M1 (next)", link: "/v1.0.0/" }],
  },
  {
    text: "Tutorials",
    icon: 'guide',
    prefix: '/tutorials/',
    children: [ {text: "On-Site: MIE 2023", link: "MIE2023.md"}, {text: "Online: Recorded talks", link: "Talks.md"}, {text: "Online: GMDS 2022: Process development", link: "GMDS2022-dev.md"} ]
  },
  {
    text: "",
    icon: "github",
    link: "https://github.com/highmed/highmed-dsf",
  },
 ],


 sidebar: {
  "/stable/": [
    "",
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "",
      icon: "",
      prefix: "guideline/",
      link: "guideline/",
      children: ["introduction", "generalinformation", "code", "build", "releases", "publications", "tutorial"],
    },
   /* {
      text: "About",
      icon: "creative",
      prefix: "about/",
      link: "about/",
      children: ["learnmore/FAQ.md", "learnmore/Contributors.md", "learnmore/Partners.md", "learnmore/Public.md", "learnmore/Projects.md", "learnmore/Community.md"], 
    },*/
  ],
  "/v1/":  [
    "",
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "",
      icon: "",
      prefix: "guideline/",
      link: "guideline/",
      children:["introduction.md", "generalinformation/", "code/", "build/", "releases/", "publications.md", "tutorial/"], 
    },
   /* {
      text: "About",
      icon: "creative",
      prefix: "about/",
      link: "about/",
      children: ["learnmore/FAQ.md", "learnmore/Contributors.md", "learnmore/Partners.md", "learnmore/Public.md", "learnmore/Projects.md", "learnmore/Community.md"], 
    },*/
  ],
  "/": [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "About",
      icon: "creative",
      prefix: "about/",
      link: "about/",
      children: ["learnmore/contact.md", "learnmore/team.md", "learnmore/partners.md", "learnmore/public.md", "learnmore/projects.md", "learnmore/community.md"], 
    }
  ]
 },

 footer: "<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a> • <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a>",
 copyright: false,
 displayFooter: true,
 

  plugins: {

    photoSwipe: false,
    components: {
      // components you want
      components: [
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "StackBlitz",
        "VideoPlayer",
        "YouTube",
      ],
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      imgMark: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
   
     pwa: {
       favicon: "/assets/icon/favicon.ico",
       cacheHTML: true,
       cachePic: true,
       appendBase: true,
     },
  },
});
