import OptionText from '../lib/OptionText.svelte';

export default {
  title: 'QUISP/OptionText',
  component: OptionText,
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' }
  }
};

const Template = (args) => ({
  Component: OptionText,
  props: args
});

export const Default = Template.bind({});
Default.args = {
  id: "option-1",
  label: "Option 1",
  name: "option",
  placeholder: "Placeholder"
};