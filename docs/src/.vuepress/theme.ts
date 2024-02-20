import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  author: {
    name: "DSF-Team",
    url: "/about/learnmore/team.html", 
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
      text: "Docs",
      icon: "info",
      prefix: "",
      children: [
        {
          text: "Introduction",
          icon: "info",
          children: ["/intro", "/intro/use-cases/", "/intro/publications", "/intro/tutorials/"],
        },
        {
          text: "Security",
          icon: "safe",
          link: "/security",
        }
      ]
  },
  {
      text: "Get Started",
      icon: "launch",
      prefix: "/stable/",
      children: [
        {
          text: "Guideline v1.5.0 (stable)",
          icon: "info",
          children: ["index", "maintain/install", "maintain/upgrade-from-0", "maintain/allowList-mgm", "maintain/install-plugins", "develop/create", "contribute"],
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
    children: [{ text: "v1.5.0 (stable)", link: "/stable/" }, { text: "v1.4.0", link: "/v1.4.0/" }, { text: "v1.3.2", link: "/v1.3.2/" }, { text: "v1.3.1", link: "/v1.3.1/" }, { text: "v1.3.0", link: "/v1.3.0/" }, { text: "v1.2.0", link: "/v1.2.0/" }, { text: "v1.1.0", link: "/v1.1.0/" }, { text: "v1.0.0", link: "/v1.0.0/" }, { text: "v0.9.3 (oldstable)", link: "/oldstable/"}],
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
      text: "Security",
      icon: "safe",
      link: "/security",
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
  "/hackathon": [],
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
      icon: "info",
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
        icon: "info"
      }
    ]
    },
  ],
  "/v1.5.0/": [
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
  "/v1.4.0/": [
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
  "/v1.3.2/": [
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
  "/v1.3.1/": [
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
  "/v1.3.0/": [
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
  "/v1.2.0/": [
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
  "/v1.1.0/": [
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
      children: ["introduction", "generalinformation/", "code/", "build/", "releases/", "tutorial/"], 
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
