import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  author: {
    name: "DSF-Team",
    url: "/about/team.html", 
  },

  iconAssets: "/assets/font/font.css",
  iconPrefix: "iconfont icon-",


  logo: "/photos/home/logo-small.svg",
  darkmode: "toggle",
  contributors: false,
  
  navbar: [
    {
      text: "Home",
      icon: "home",
      link: "/",
    }, 
    {
      text: "Introduction",
      icon: undefined,
      link: "/introduction/",
    },
    {
      text: "Use-Cases",
      icon: undefined,
      link: "/use-cases/",
    },
    {
      text: "Release",
      icon: undefined,
      link: "/release/",
    },
    {
      text: "Reference",
      icon: undefined,
      link: "/reference/",
    },
    {
      text: "Research",
      icon: undefined,
      link: "/research/",
    },
    {
      text: "About us",
      icon: undefined,
      link: "/about/",
    },
    {
      text: "Community",
      icon: undefined,
      link: "/community/",
    },
    {
      text: "Security",
      icon: undefined,
      link: "/security/",
    }, 
    
    {
      text: "",
      icon: "github",
      link: "https://github.com/datasharingframework/dsf",
    },
  ],
 
 
  sidebar: {
    "/": [],
    "/hackathon": [],
  },

  footer: "<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a> • <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a>",
  copyright: false,
  displayFooter: true,


  plugins: {
    linksCheck: {
      dev: true,
      build: "error"
    },
    searchPro: {
      indexContent: true,
    },
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
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      imgMark: true,
      include: true,
      katex: false,
      mark: true,
      mathjax: false,
      mermaid: false,
      playground: {
        presets: [],
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
      tabs: false,
      tasklist: false,
      vPre: false,
      vuePlayground: false
    }
  },
});
