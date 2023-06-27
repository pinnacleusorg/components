const preprocess = require('svelte-preprocess');
const {
  mergeConfig
} = require('vite');

// Base path gets inserted here with CI/CD
const basePath = "";
module.exports = {
  async viteFinal(config, {
    configType
  }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      base: basePath
    });
  },
  stories: [
  // "../src/**/*.stories.mdx",
  "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [{
    name: "@storybook/addon-essentials"
  }, "@storybook/addon-docs", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/sveltekit",
    options: {}
  },
  docs: {
    autodocs: true
  }
};