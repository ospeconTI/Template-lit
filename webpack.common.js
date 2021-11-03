/** @format */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
            }),
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Titulo",
            template: "./src/index.html",
            filename: "index.html",
            favicon: "./assets/icons/favicon.ico",
        }),
        new WebpackPwaManifest({
            name: "diabetes",
            short_name: "diabetes",
            description: "",
            start_url: "./index.html",
            background_color: "#ffffff",
            display: "standalone",
            scope: "./",
            theme_color: "#ffffff",
            orientation: "portrait",
            fingerprints: false,
            icons: [
                {
                    src: path.resolve("assets/icons/ic_launcher.png"),
                    sizes: "192x192",
                },
                {
                    src: path.resolve("assets/icons/playstore-icon.png"),
                    size: "512x512",
                },
            ],
        }),

        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(process.env.npm_package_version),
            __DESCRIPTION__: JSON.stringify(process.env.npm_package_description),
            __ORGANIZACION__: JSON.stringify("la organización"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(woff|ttf|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 50000,
                    },
                },
            },
        ],
    },
};
