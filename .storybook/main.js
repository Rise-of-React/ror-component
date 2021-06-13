module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
};
