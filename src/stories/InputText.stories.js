import InputText from '../lib/InputText.svelte';

export default {
  title: 'QUISP/InputText',
  component: InputText,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
  }
};

const Template = (args) => ({
  Component: InputText,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'What is your name?',
  name: 'name',
  placeholder: 'Name',
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  label: 'What is your name?',
  name: 'name',
  placeholder: 'Name',
};
