const chainWebpack = (webpackConfig) => {
    // comment out everything in here to get a vue3 only version
    // plain vue3 without compat mode

    webpackConfig.resolve.alias.set('vue', '@vue/compat');
    webpackConfig.module
        .rule('vue')
        .use('vue-loader')
        .tap((options) => ({
            ...options,
            compilerOptions: {
                compatConfig: {
                    MODE: 2, // this does not seem to change anything...
                },
            },
        }));
};

module.exports = {
    chainWebpack,
};
