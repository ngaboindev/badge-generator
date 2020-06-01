module.exports = {
    pages: {
        index: {
            entry: "src/main.js",
            title: "Badge Generator"
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/'
}