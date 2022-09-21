import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Leah Gardner',
    description: 'A Gatsby storefront for a shopify store',
    url: 'https://leah-gardner.vercel.app',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        downloadImages: true,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        password: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
        shopifyConnections: ['collections'],
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: './src/gatsby-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Leah Gardner',
        short_name: 'Leah Gardner',
        start_url: '/',
        background_color: '#FFA500',
        theme_color: '#FFA500',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
  ],
  jsxRuntime: 'automatic',
};

export default config;
