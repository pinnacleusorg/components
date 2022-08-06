import FormHeader from '../lib/FormHeader.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'QUISP/FormHeader',
  component: FormHeader,
  argTypes: {
    active: { control: 'boolean' },
  }
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: FormHeader,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  active: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  active: false,
};
