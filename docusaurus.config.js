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
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'about',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
