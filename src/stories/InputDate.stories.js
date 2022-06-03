import InputDate from '../lib/InputDate.svelte';

export default {
  title: 'Inputs/InputDate',
  component: InputDate,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
  }
};

const Template = (args) => ({
  Component: InputDate,
  props: args,
  on: {
    click: args.onClick,
  },
});

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'When is your birthdate?',
  name: 'name',
  placeholder: 'Name',
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  label: 'When is your birthdate?',
  name: 'name',
  placeholder: 'Name',
};
