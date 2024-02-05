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
      icon: "read",
      prefix: "/introduction/",
      link: "/introduction/",
      children: [
        {
          icon: "read",
          children: ["docs/", "use-cases/", "publications", "security", "tutorials/"],
        },
      ]
  },
  {
      text: "Get Started",
      icon: "launch",
      prefix: "/stable/",
      link: "/stable",
      children: [
        {
          icon: "info",
          children: ["index", "maintain/install", "maintain/upgrade-from-0", "maintain/allowList-mgm", "maintain/install-plugins", "develop/create", "contribute"],
        },
      ]
  },
  {
    text: "Versions",
    icon: "software",
    children: [
      {
        icon: "software",
        children: ["stable/","versions/v1.3.2/","versions/v1.3.1/","versions/v1.3.0/","versions/v1.2.0/","versions/v1.1.0/", "oldstable/"],
      },
    ]
  },
  {
    text: "About",
    icon: "info",
    prefix: "/about/",
    link: "/about/",  
    children: [
      {
        icon: "info",
        children: ["contact", "team", "partners", "public", "faq"],
      },
    ],
  },
  {
    text: "",
    icon: "github",
    link: "https://github.com/datasharingframework/dsf",
  },
 ],


 sidebar: {
  "/introduction/": [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Dokumentation",
      icon: "note",
      prefix: "/introduction/docs/",
      link: "/introduction/docs/",
      children: ["introduction.md", "basics", "architecture", "securityDesign", "allowList", "process-plugins", "networkSetup"], 
    },
    {
      text: "Use-Cases",
      icon: "view",
      prefix: "/introduction/use-cases/",
      link: "/introduction/use-cases/",
      children: ["feasibility", "num"], 
    },
    {
      text: "Publications and Talks",
      icon: "blog",
      link: "/introduction/publications",
    },
    {
      text: "Security",
      icon: "safe",
      link: "/introduction/security",
    },
    {
      text: "Tutorials",
      icon: "edit",
      prefix: "/introduction/tutorials/",
      link: "/introduction/tutorials/",
      children: ["MIE2023", "ProcessPlugin"], 
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
      children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        prefix: "fhir-reverse-proxy/",
        link: "fhir-reverse-proxy/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }, {
        text: "FHIR Server",
        icon: "module",
        prefix: "fhir/",
        link: "fhir/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}, {
			icon: "config",
			text: "Access Control",
			link: "access-control"
		}, {
			icon: "config",
			text: "OpenID Connect",
			link: "oidc"
			}]
      }, {
        text: "BPE Server",
        icon: "module",
        prefix: "bpe/",
        link: "bpe/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      },
      {
        text: "Install Plugins",
        icon: "plugin",
        link: "install-plugins"
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
    {
      text: "Contribute",
      icon: "creative",
      link: "contribute",
      prefix: "contribute/",
      children: [
      {
        text: "Code",
        link: "code",
        icon: "code"
      },
      {
        text: "Documentation",
        link: "documentation",
        icon: "note"
      }
    ]
    },
  ],
  "/versions/v1.3.2/": [
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
      text: "DSF 1.3.2",
      icon: "software",
      link: "/versions/v1.3.2/",
    },
    {
      text: "Maintain a DSF instance",
      icon: "tool",
      prefix: "maintain/",
      link: "maintain/",
      children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        prefix: "fhir-reverse-proxy/",
        link: "fhir-reverse-proxy/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }, {
        text: "FHIR Server",
        icon: "module",
        prefix: "fhir/",
        link: "fhir/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}, {
			icon: "config",
			text: "Access Control",
			link: "access-control"
		}, {
			icon: "config",
			text: "OpenID Connect",
			link: "oidc"
			}]
      }, {
        text: "BPE Server",
        icon: "module",
        prefix: "bpe/",
        link: "bpe/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      },
      {
        text: "Install Plugins",
        icon: "plugin",
        link: "install-plugins"
    }],
    },
    {
      text: "Develop process plugins",
      icon: "plugin",
      prefix: "develop/",
      link: "develop/",
      children: ["create", "upgrade-from-0" ],
    },
  ],
  "/versions/v1.3.1/": [
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
      text: "DSF 1.3.1",
      icon: "software",
      link: "/versions/v1.3.1/",
    },
    {
      text: "Maintain a DSF instance",
      icon: "tool",
      prefix: "maintain/",
      link: "maintain/",
      children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        prefix: "fhir-reverse-proxy/",
        link: "fhir-reverse-proxy/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }, {
        text: "FHIR Server",
        icon: "module",
        prefix: "fhir/",
        link: "fhir/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}, {
			icon: "config",
			text: "Access Control",
			link: "access-control"
		}, {
			icon: "config",
			text: "OpenID Connect",
			link: "oidc"
			}]
      }, {
        text: "BPE Server",
        icon: "module",
        prefix: "bpe/",
        link: "bpe/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      },
      {
        text: "Install Plugins",
        icon: "plugin",
        link: "install-plugins"
    }],
    },
    {
      text: "Develop process plugins",
      icon: "plugin",
      prefix: "develop/",
      link: "develop/",
      children: ["create", "upgrade-from-0" ],
    },
  ],
  "/versions/v1.3.0/": [
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
      text: "DSF 1.3.0",
      icon: "software",
      link: "/versions/v1.3.0/",
    },
    {
      text: "Maintain a DSF instance",
      icon: "tool",
      prefix: "maintain/",
      link: "maintain/",
      children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        prefix: "fhir-reverse-proxy/",
        link: "fhir-reverse-proxy/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }, {
        text: "FHIR Server",
        icon: "module",
        prefix: "fhir/",
        link: "fhir/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}, {
			icon: "config",
			text: "Access Control",
			link: "access-control"
		}, {
			icon: "config",
			text: "OpenID Connect",
			link: "oidc"
			}]
      }, {
        text: "BPE Server",
        icon: "module",
        prefix: "bpe/",
        link: "bpe/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      },
      {
        text: "Install Plugins",
        icon: "plugin",
        link: "install-plugins"
    }],
    },
    {
      text: "Develop process plugins",
      icon: "plugin",
      prefix: "develop/",
      link: "develop/",
      children: ["create", "upgrade-from-0" ],
    },
  ],
  "/versions/v1.2.0/": [
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
      text: "DSF 1.2.0",
      icon: "software",
      link: "/versions/v1.2.0/",
    },
    {
      text: "Maintain a DSF instance",
      icon: "tool",
      prefix: "maintain/",
      link: "maintain/",
      children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        prefix: "fhir-reverse-proxy/",
        link: "fhir-reverse-proxy/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }, {
        text: "FHIR Server",
        icon: "module",
        prefix: "fhir/",
        link: "fhir/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}, {
			icon: "config",
			text: "Access Control",
			link: "access-control"
		}, {
			icon: "config",
			text: "OpenID Connect",
			link: "oidc"
			}]
      }, {
        text: "BPE Server",
        icon: "module",
        prefix: "bpe/",
        link: "bpe/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }],
    },
    {
      text: "Develop process plugins",
      icon: "plugin",
      prefix: "develop/",
      link: "develop/",
      children: ["create", "upgrade-from-0" ],
    },
  ],
  "/versions/v1.1.0/": [
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
      text: "DSF 1.1.0",
      icon: "software",
      link: "/versions/v1.1.0/",
    },
    {
      text: "Maintain a DSF instance",
      icon: "tool",
      prefix: "maintain/",
      link: "maintain/",
      children: ["install", "upgrade-from-1", "upgrade-from-0", "allowList-mgm", {
        text: "FHIR Reverse Proxy",
        icon: "module",
        prefix: "fhir-reverse-proxy/",
        link: "fhir-reverse-proxy/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }, {
        text: "FHIR Server",
        icon: "module",
        prefix: "fhir/",
        link: "fhir/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}, {
			icon: "config",
			text: "Access Control",
			link: "access-control"
		}, {
			icon: "config",
			text: "OpenID Connect",
			link: "oidc"
			}]
      }, {
        text: "BPE Server",
        icon: "module",
        prefix: "bpe/",
        link: "bpe/",
        children: [{
			icon: "config", 
			text: "Configuration",
			link: "configuration"
		}]
      }],
    },
    {
      text: "Develop process plugins",
      icon: "plugin",
      prefix: "develop/",
      link: "develop/",
      children: ["create", "upgrade-from-0" ],
    },
  ],
  "/versions/v1.0.0/": [
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
      text: "DSF 1.0.0",
      icon: "software",
      link: "/versions/v1.0.0/",
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
  "/oldstable/":  [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Version 0.9.x",
      icon: "software",
      children: ["introduction", "generalinformation/", "code/", "build/", "releases/", "tutorial/"], 
    },
  ],
  "/about/":  [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Contact & Community",
      icon: "call",
      link: "/about/contact",
    },
    {
      text: "Team",
      icon: "group",
      link: "/about/team",
    },
    {
      text: "Partners",
      icon: "proxy",
      link: "/about/partners",
    },
    {
      text: "Public Funding",
      icon: "free",
      link: "/about/public",
    },
    {
      text: "FAQ",
      icon: "question",
      link: "/about/faq",
    },
  ],
  "/hackathon": [],
 },

 footer: "<a href='https://www.hs-heilbronn.de/impressum'>Imprint</a>  |  <a href='https://www.hs-heilbronn.de/de/datenschutz'>Data Privacy</a>  |  <a href='/about/contact'>Contact</a>",
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
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: false,
      echarts: true,
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
      mermaid: true,
      playground: {
        presets: [],
      },
      presentation: false,
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
      vuePlayground: false,
      checkLinks: { status: "always"}
    },
  },
});