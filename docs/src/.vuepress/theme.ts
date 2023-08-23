import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  author: {
    name: "DSF-Team",
    url: "/about/learnmore/team.html", // ToDo
  },

  iconAssets: "/assets/font/font.css",
  //iconAssets: "iconfont",
  iconPrefix: "iconfont icon-",


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
      prefix: "/intro/",
      children: [
        {
          text: "Introduction",
          icon: "info",
          children: ["", "use-cases/", "publications", "tutorials/"],
        }
      ]
  },
  {
      text: "Get Started",
      icon: "launch",
      prefix: "/stable/",
      children: [
        {
          text: "Guideline v1.1.0 (stable)",
          icon: "info",
          children: ["index", "maintain/install", "maintain/upgrade-from-0", "maintain/allowList-mgm", "develop/create"],
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
        children: ["contact", "team", "partners", "public"],
      },
    ],
  },
  {
    text: "Versions",
    icon: "note",
    // children:["/v1/"],
    children: [{ text: "v1.1.0 (stable)", link: "/stable/" }, { text: "v1.0.0", link: "/v1.0.0/" }, { text: "v0.9.2 (oldstable)", link: "https://dsf.dev/oldstable/"}],
  },
  {
    text: "",
    icon: "github",
    link: "https://github.com/datasharingframework/dsf",
  },
 ],


 sidebar: {
  "/": [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Docs",
      icon: "info",
      prefix: "intro/",
      link: "intro/",
      children: ["info/introduction.md", "info/basics", "info/architecture", "info/security", "info/allowList", "info/process-plugins"], 
    },
    {
      text: "Use-Cases",
      icon: "any",
      prefix: "intro/use-cases/",
      link: "intro/use-cases/",
      children: ["feasibility", "NUM"], 
    },
    {
      text: "Publications",
      icon: "blog",
      link: "/intro/publications",
    },
    {
      text: "Tutorials",
      icon: "edit",
      link: "/intro/tutorials",
    }
  ],
  "/stable/": [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    "",
    {
      text: "Maintain a DSF instance",
      icon: "tool",
      prefix: "maintain/",
      link: "maintain/",
      children: ["install", "update-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "Configuration parameters",
        icon: "config",
        prefix: "configuration/",
        link: "configuration/",
        children: [{ text: "FHIR Reverse Proxy", link:"reverseproxy"}, { text: "FHIR Server", link: "fhir" }, { text: "BPE Server", link: "bpe" }]

      }
     ],
    },
    {
      text: "Develop process plugins",
      icon: "plugin",
      prefix: "develop/",
      link: "develop/",
      children: ["create", "upgrade-from-0" ],
    },
  ],
  "/v1.0.0/": [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Current version",
      icon: "update",
      link: "/stable",
    },
    {
      text: "Maintain a DSF instance",
      icon: "tool",
      prefix: "maintain/",
      link: "maintain/",
      children: ["install", "upgrade-from-0", "allowList-mgm", {
        text: "Configuration parameters",
        icon: "config",
        prefix: "configuration/",
        link: "configuration/",
        children: ["common", "fhir", "bpe", "reverseproxy"]

      }
     ],
    },
    {
      text: "Develop process plugins",
      icon: "plugin",
      prefix: "develop/",
      link: "develop/",
      children: ["create", "upgrade-from-0" ],
    },
  ],
  "/about/":  [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "About",
      icon: "creative",
      prefix: "learnmore/",
      link: "learnmore/",
      children: ["contact", "team", "partners", "public"], 
    },
  ],
  "/oldstable/":  [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Version 0.9.x",
      icon: "guide",
      prefix: "guideline/",
      link: "guideline/",
      children: ["generalinformation/", "code/", "build/", "releases/", "tutorial/"], 
    },
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
       /* "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "StackBlitz",
        "VideoPlayer",
        "YouTube",*/
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
   
     /*pwa: {
       favicon: "/assets/icon/favicon.ico",
       cacheHTML: false,
       cachePic: false,
       appendBase: true,
     },*/
  },
});
