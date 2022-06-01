import InputTextLines from '../lib/InputTextLines.svelte';

export default {
  title: 'QUISP/InputTextLines',
  component: InputTextLines,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
  }
};

const Template = (args) => ({
  Component: InputTextLines,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'Links',
  name: 'links',
  placeholder: 'LinkedIn, GitHub, Website, etc.',
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  label: 'Links',
  name: 'links',
  placeholder: 'LinkedIn, GitHub, Website, etc.',
};
