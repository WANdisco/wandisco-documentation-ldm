export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      }
    },
    "navbar": {
      "title": "WANdisco LiveData Migrator",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2020 WANdisco Inc."
    }
  },
  "title": "LiveData Migrator",
  "tagline": "WANdisco LiveData Migrator Documentation",
  "url": "https://wandisco.github.io/wandisco-documentation-ldm/",
  "baseUrl": "/wandisco-documentation-ldm/",
  "favicon": "img/favicon.png",
  "organizationName": "wandisco",
  "projectName": "wandisco-documentation-ldm",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "about",
          "sidebarPath": "/Users/shonaisbister/repos/ldm/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/shonaisbister/repos/ldm/src/css/custom.css"
        }
      }
    ]
  ]
};