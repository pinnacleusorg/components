import Input from '../lib/Input.svelte';

export default {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: 'text' },
  }
};

const Template = (args) => ({
  Component: Input,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Text = Template.bind({});
Text.args = {
  active: true,
  label: 'What is your name?',
  name: 'name',
  placeholder: 'Name',
};

export const Email = Template.bind({});
Email.args = {
  active: true,
  label: 'What is your email?',
  name: 'email',
  placeholder: 'Email',
  type: 'email',
};

export const Number = Template.bind({});
Number.args = {
  active: true,
  label: 'What is your age?',
  name: 'age',
  placeholder: 'Number',
  type: 'number',
};

export const Phone = Template.bind({});
Phone.args = {
  active: true,
  label: 'What is your phone?',
  name: 'phone',
  placeholder: 'Phone',
  type: 'phone',
};