import InputSelect from '../lib/InputSelect.svelte';

export default {
  title: 'Inputs/InputSelect',
  component: InputSelect,
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    options: { control: 'array' },
  }
};

const Template = (args) => ({
  Component: InputSelect,
  props: args
});

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'What is your shirt size?',
  name: 'name',
  placeholder: 'Name',
  options: ["Option 1", "Option 2", "Option 3"]
};

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  label: 'What is your shirt size?',
  name: 'name',
  placeholder: 'Name',
  options: ["Option 1", "Option 2", "Option 3"]
};
