const path = require("path");
const HTMLplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/controllers/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	// HTML
	plugins: [
		new HTMLplugin({
			template: "./src/views/main.html",
		}),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
	],
	// MODULE
	module: {
		rules: [
			// -> css
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			// -> img
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "img/",
							publicPath: "img/",
						},
					},
				],
			},
		],
	},
	// Developement mode
	watch: true,
	watchOptions: {
		poll: 1000,
		aggregateTimeout: 200,
		ignored: /node_modules/,
	},
};
