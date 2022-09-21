# Leah Gardner Storefront

A Gatsby storefront for a Shopify store. Built as a learning project for [Shopify](https://shopify.com) and [Gatsby](https://www.gatsbyjs.org) integration.

This project is bootstrapped using [`gatsby-starter-ts`](https://github.com/jpedroschmitz/gatsby-starter-ts)

## Development

To start the project locally, run:

1. Set up a Shopify store and get the API keys. I wrote a guide on how to do this [here](https://dev.to/yinkakun/how-to-integrate-gatsby-with-shopify-using-shopify-custom-apps-36f7).
2. Rename the `.env.example` file to `.env.development` and add the API keys.
3. Run `yarn` to install dependencies.
4. Run `yarn develop` to start the application in development mode at `http://localhost:8000`.

### Requirements

- Node.js >= 14.17
- Yarn 1 (Classic)

### Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:8000`.
- `yarn build` — Compile your application and make it ready for deployment.
- `yarn serve` — Serve the production build of your site
- `yarn clean` — Wipe out the cache (`.cache` folder).
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

## Todo

- Check for Out of Stock Items and disable Add to Cart button with `useEffect`.
