import OptionRadio from '../lib/OptionRadio.svelte';

export default {
  title: 'QUISP/OptionRadio',
  component: OptionRadio,
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' }
  }
};

const Template = (args) => ({
  Component: OptionRadio,
  props: args
});

export const Default = Template.bind({});
Default.args = {
  id: "option-1",
  label: "Option 1",
  name: "option",
};