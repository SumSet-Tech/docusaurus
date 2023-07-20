const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Mintr',
  tagline: 'Documentation',
  url: 'https://sumset.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon/favicon.ico',
  organizationName: 'sumsettech', // Usually your GitHub org/user name.
  projectName: 'sumsettech', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mintr Docs',
        logo: {
          alt: 'Mintr Logo',
          src: 'img/nftr-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Overview',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://mintr.nftr.pro',
            label: 'Mintr',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Mintr',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.gg/m3rYpu7xwe',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/NFTr_pro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'SumSet Tech',
                href: 'https://sumset.tech',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NFTr/mintr-beta',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SumSet Tech.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
