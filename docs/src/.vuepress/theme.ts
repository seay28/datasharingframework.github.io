import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  author: {
    name: "DSF-Team",
    url: "/about/learnmore/team.html", // ToDo
  },

  iconAssets: "iconfont",

  logo: "/photos/home/logo.png",
  darkmode: "toggle",
  
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
      prefix: "/doc/",
      children: [
        {
          text: "Guideline v 0.9.0",
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
    text: "Versions",
    icon: "note",
    // children:["/v1/"],
    children: [{ text: "V 0.9.0", link: "/doc/" }, { text: "V 1.0.0", link: "/v1/" }],
  },
  {
    text: "",
    icon: "github",
    link: "https://github.com/highmed/highmed-dsf",
  },
 ],


 sidebar: {
  "/doc/": [
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
      children:["Introduction.md", "generalInformation/", "code/", "build/", "releases/", "publications.md", "tutorial/"],
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
      children:["Introduction.md", "generalInformation/", "code/", "build/", "releases/", "publications.md", "tutorial/"], 
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
      children: ["learnmore/FAQ.md", "learnmore/Contributors.md", "learnmore/Partners.md", "learnmore/Public.md", "learnmore/Projects.md", "learnmore/Community.md"], 
    },
  ]
 },

 footer: "Default footer",
 

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
       apple: {
         icon: "/assets/icon/apple-icon-152.png",
         statusBarColor: "black",
       },
       msTile: {
         image: "/assets/icon/ms-icon-144.png",
         color: "#ffffff",
       },
       manifest: {
         icons: [
           {
             src: "/assets/icon/chrome-mask-512.png",
             sizes: "512x512",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-mask-192.png",
             sizes: "192x192",
             purpose: "maskable",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-512.png",
             sizes: "512x512",
             type: "image/png",
           },
           {
             src: "/assets/icon/chrome-192.png",
             sizes: "192x192",
             type: "image/png",
           },
         ],
         shortcuts: [
           {
             name: "Demo",
             short_name: "Demo",
             url: "/demo/",
             icons: [
               {
                 src: "/assets/icon/guide-maskable.png",
                 sizes: "192x192",
                 purpose: "maskable",
                 type: "image/png",
               },
             ],
           },
         ],
       },
     },
  },
});
