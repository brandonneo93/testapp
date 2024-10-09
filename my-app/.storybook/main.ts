import type { StorybookConfig } from "@storybook/svelte-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],

  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },

  viteFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      $lib: resolve(__dirname, '../src/lib'),
    };
    return config;
  },

  docs: {}
};

export default config;
