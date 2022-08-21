const preprocess = require('svelte-preprocess');
const { mergeConfig } = require('vite');

module.exports = {
  core: { builder: "@storybook/builder-vite" },
  svelteOptions: {
    preprocess: preprocess({
      typescript: true,
      scss: {
        prependData: "@import './scss/global.scss';@import './scss/mixins.scss';"
      }
    }),
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      base: "https://pinnacleusorg.github.io/quisp/"
    });
  },
  stories: [
    // "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  addons: [
    { name: "@storybook/addon-essentials"},
    "@storybook/addon-docs"
  ]
}