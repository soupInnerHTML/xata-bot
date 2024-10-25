module.exports = {
    presets: [
        ["@babel/preset-env", { "modules": "commonjs" }],
        "@babel/preset-typescript"
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-transform-classes",
        "@babel/plugin-transform-runtime",
        "lodash"
    ]
};
