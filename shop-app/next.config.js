const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    //config.experiments = { topLevelAwait: true, layers: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop',
        remotes: {
          main: `main@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes:{
          './catalog': "./components/Catalog.js"
        },
        extraOptions: {
          exposePages: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
