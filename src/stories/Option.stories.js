import OptionCheckView from './views/OptionCheckView.svelte';
import OptionRadioView from './views/OptionRadioView.svelte';

export default {
  title: 'QUISP/Option',
  component: OptionRadioView,
  argTypes: {
    active: { control: 'boolean' },
    title: { control: 'text' }
  }
};

const RadioTemplate = (args) => ({
  Component: OptionRadioView,
  props: args
});
const CheckTemplate = (args) => ({
  Component: OptionCheckView,
  props: args
});

export const RadioGroup = RadioTemplate.bind({});
RadioGroup.args = {
  active: true,
  title: "How did you hear about us?"
};

export const CheckGroup = CheckTemplate.bind({});
CheckGroup.args = {
  active: true,
  title: "How did you hear about us?"
};
