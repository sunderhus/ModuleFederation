const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const FederatedTypesPlugin = require('@module-federation/typescript')
const path  = require('path')

const deps = require("./package.json").dependencies;

const federationConfig = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    componentsFed:"componentsFed@http://localhost:8001/remoteEntry.js"
  },
  exposes: {
    "./App":"./src/App.tsx" // just to generate folder with types.
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
    publicPath: "http://localhost:8008/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8008,
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
};


/** Exemplo com Unpkg
  
const { camelCase } = require("camel-case");

const federatedRemotes = {
  "components": "^1.0.0", // ^,will look for higher versions like 1.0.1 when possible
};
const deps = {
  ...federatedRemotes,
  ...require("./package.json").dependencies,
};

const unpkgRemote = (name) =>
  `${camelCase(name)}@https://unpkg.com/${name}@${
    deps[name]
  }/dist/browser/remote-entry.js`;

const remotes = Object.keys(federatedRemotes).reduce(
  (remotes, lib) => ({
    ...remotes,
    [lib]: unpkgRemote(lib),
  }),
  {}
);
*/