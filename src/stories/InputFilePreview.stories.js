import InputFilePreview from '../lib/InputFilePreview.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Inputs/InputFilePreview',
  component: InputFilePreview,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
  }
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: InputFilePreview,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'Resume',
  name: 'resume',
  placeholder: 'Upload Resume',
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  label: 'Resume',
  name: 'resume',
  placeholder: 'Upload Resume',
};
