const versions = require('./versions.json');

const currentVersion = '1.8.3';

module.exports = {
  title: 'LiveData Migrator',
  tagline: 'WANdisco LiveData Migrator Documentation',
  url: 'https://wandisco.github.io/wandisco-documentation-ldm/',
  //url: 'http://localhost/',
  baseUrl: '/wandisco-documentation-ldm/',
  //baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'wandisco', // Usually your GitHub org/user name.
  projectName: 'wandisco-documentation-ldm', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      title: 'WANdisco LiveData Migrator',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          //dropdownItemsAfter: [
          //{
          //  to: '/versions',
          //  label: 'All versions',
          //},
          //],
        },
      ],
    },
    algolia: {
      apiKey: '113b7a18a22b690636954bfeced8c1ad',
      indexName: 'wandisco-live-data-migrator',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      //searchParameters: {},
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} WANdisco Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          /**
           * Path to data on filesystem relative to site dir.
           */
          path: 'docs',
          /**
           * Path to sidebar configuration for showing a list of markdown pages.
           * Warning: will change
           */
          sidebarPath: require.resolve('./sidebars.js'),
          /**
           * URL for editing a doc in the website repo.
           * Example: 'https://github.com/facebook/docusaurus/edit/master/website/'
           */
          //editUrl: 'https://github.com/WANdisco/wandisco-documentation-ldm/tree/master/docs',
          /**
           * Whether to display the author who last updated the doc.
           */
          showLastUpdateAuthor: false,
          /**
           * Whether to display the last date the doc was updated.
           */
          showLastUpdateTime: false,
          /**
           * Remark and Rehype plugins passed to MDX
           */
          remarkPlugins: [
            /* require('remark-math') */
          ],
          /**
           * By default, versioning is enabled on versioned sites.
           * This is a way to explicitly disable the versioning feature.
           */
          disableVersioning: false,
          /**
           * The last version is the one we navigate to in priority on versioned sites
           * It is the one displayed by default in docs navbar items
           * By default, the last version is the first one to appear in versions.json
           * By default, the last version is at the "root" (docs have path=/docs/myDoc)
           * Note: it is possible to configure the path and label of the last version
           * Tip: using lastVersion: 'current' make sense in many cases
           */
          lastVersion: 'current',
          onlyIncludeVersions: ['current', ...versions.slice(0, 4)],
          /**
           * The docusaurus versioning defaults don't make sense for all projects
           * This gives the ability customize the label and path of each version
           * You may not like that default version
           */
          versions: {
            current: {
              label: `${currentVersion} (latest)`,
            },
          },
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'about',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        /**
         * URL route for the docs section of your site.
         * *DO NOT* include a trailing slash.
         */
        //routeBasePath: 'docs',
        include: ['**/*.md', '**/*.mdx'], // Extensions to include.
        /**
         * Theme components used by the docs pages
         */
        docLayoutComponent: '@theme/DocPage',
        docItemComponent: '@theme/DocItem',
        rehypePlugins: [],
        /**
         * Custom Remark and Rehype plugins passed to MDX before
         * the default Docusaurus Remark and Rehype plugins.
         */
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
        /**
         * Sometimes you only want to include a subset of all available versions.
         * Tip: limit to 2 or 3 versions to improve startup and build time in dev and deploy previews
         */
        onlyIncludeVersions: undefined, // ex: ["current", "1.0.0", "2.0.0"]
      },
    ],
  ],
};
