import OptionCheckView from './views/OptionCheckView.svelte';
import OptionRadioView from './views/OptionRadioView.svelte';

export default {
	title: 'Options/Option',
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

export const RadioGroup = {
	render: RadioTemplate,

	args: {
		active: true,
		title: 'How did you hear about us?'
	}
};

export const CheckGroup = {
	render: CheckTemplate,

	args: {
		active: true,
		title: 'How did you hear about us?'
	}
};
