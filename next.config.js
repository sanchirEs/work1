const path = require("path");

const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    quietDeps: true,
  },

  webpack: (config) => {
    // Add rules for handling CSS and SCSS files
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/fonts",
            outputPath: "static/fonts",
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      }
    );

    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
        "sass-loader",
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
