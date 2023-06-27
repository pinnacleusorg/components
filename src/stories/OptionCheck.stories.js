import OptionCheck from '../lib/OptionCheckbox.svelte';

export default {
	title: 'Options/OptionCheck',
	component: OptionCheck,
	argTypes: {
		id: { control: 'text' },
		label: { control: 'text' },
		name: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: OptionCheck,
	props: args
});

export const Default = {
	render: Template,

	args: {
		id: 'option-1',
		label: 'Option 1',
		name: 'option'
	}
};
