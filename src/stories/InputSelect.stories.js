import InputSelectView from './views/InputSelectView.svelte';

export default {
  title: 'Inputs/InputSelect',
  component: InputSelectView,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' }
  }
};

const Template = (args) => ({
  Component: InputSelectView,
  props: args
});

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'What is your shirt size?',
  name: 'name',
  placeholder: 'Name'
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  label: 'What is your shirt size?',
  name: 'name',
  placeholder: 'Name'
};
