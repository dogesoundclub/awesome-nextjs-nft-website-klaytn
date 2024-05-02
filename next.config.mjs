import withPlugins from 'next-compose-plugins';
import withPWA from 'next-pwa';
import withTM from 'next-transpile-modules';

// const withPWA = require('next-pwa');
// const withTM = require("next-transpile-modules")(["hashconnect"]);

const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

export default withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
    withTM,
  ],
  nextConfig
);

// module.exports = {
//   module: {
//     rules: [
//       // ...Other rules,
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           'style-loader',
//           // Translates CSS into CommonJS
//           'css-loader',
//           // Compiles Sass to CSS
//           'sass-loader',
//         ],
//       },
//     ],
//   },
// };