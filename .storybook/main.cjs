module.exports = {
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find( (r) => r.loader && r.loader.includes('svelte-loader'))
    svelteLoader.options.preprocess = require('svelte-preprocess')({
      scss: {
        prependData: "@import './scss/global.scss';@import './scss/mixins.scss';"
      }
    })
    return config
  },
  "stories": [
    // "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    { name: "@storybook/addon-essentials", options: { docs: false } }
  ]
}