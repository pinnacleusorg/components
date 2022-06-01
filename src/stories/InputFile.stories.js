import InputFile from '../lib/InputFile.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'QUISP/InputFile',
  component: InputFile,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' }
  }
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: InputFile,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  active: true,
  label: 'Resume',
  name: 'Upload Resume',
};

export const Secondary = Template.bind({});
Secondary.args = {
  active: false,
  label: 'Resume',
  name: 'Upload Resume',
};
