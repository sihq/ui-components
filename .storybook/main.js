const path = require('path');
module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

    // Extra addons
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-designs',
        '@storybook/addon-storysource',
        'storybook-addon-pseudo-states',
        '@washingtonpost/storybook-addon-web-vitals',
        '@storybook/addon-a11y',
        // Nuevo storybook addon para loader css
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    core: {
        builder: 'webpack5',
    },

    // Rutas absolutas para storybook.
    // El jsconfig no funciona en storybook porque no es parte de la configuracion.
    webpackFinal: async (config) => {
        config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];

        return config;
    },
};
