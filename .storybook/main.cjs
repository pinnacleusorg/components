const preprocess = require('svelte-preprocess');

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
  stories: [
    // "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    { name: "@storybook/addon-essentials", options: { docs: false } }
  ]
}