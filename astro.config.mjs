// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightSidebarSwipe from 'starlight-sidebar-swipe';

// https://astro.build/config for more information
export default defineConfig({
  // basic site config

  // For site location config
  site: 'https://wiki.spherico.one/',

  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'Spherico Wiki',
      logo: {
        light: './src/assets/logo-black.svg',
        dark: './src/assets/logo-white.svg',
        replacesTitle: true,
      },
      favicon: '/favicon.ico',
      lastUpdated: false,
      plugins: [
        lucode({
          navLinks: [{ label: 'Rules', link: '/rules' }],
        }),
        starlightScrollToTop(),
        starlightSidebarSwipe(),
      ],
      tableOfContents: true,
      social: [
        {
          icon: 'github',
          label: 'Source',
          href: 'https://github.com/itsaerosphere/wiki',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/dSjmeM5yAy',
        },
      ],
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Rules',
          link: '/rules',
        },
        {
          label: 'Minecraft',
          items: [{ autogenerate: { directory: 'minecraft' } }],
        },
      ],
    }),
  ],
});
