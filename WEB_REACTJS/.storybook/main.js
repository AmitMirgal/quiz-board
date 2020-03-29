module.exports = {
    stories: ['../src/**/*.stories.([tj]s|mdx)'],
    addons: [
        '@storybook/addon-knobs/register', '@storybook/addon-actions/register',
        '@storybook/addon-docs', '@storybook/addon-a11y/register'
    ]
};
