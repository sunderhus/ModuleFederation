const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const FederatedTypesPlugin = require('@module-federation/typescript')
const deps = require("./package.json").dependencies;
const path = require('path')

const federationConfig = {
  name: "componentsFed",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    './Header':'./src/components/Header/index.tsx',
    './headerAdapter':'./src/components/Header/header-adapter.tsx'
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};

module.exports = {
  output: {
    publicPath: "http://localhost:8001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8001,
    historyApiFallback: {
      disableDotRule: true,
      verbose: true,
    },
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin(federationConfig),
    new FederatedTypesPlugin.FederatedTypesPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
  infrastructureLogging: {
    level: 'log'
  }
};
