import InputTextArea from '../lib/InputTextArea.svelte';

export default {
	title: 'Inputs/InputTextArea',
	component: InputTextArea,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' },
		name: { control: 'text' },
		placeholder: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: InputTextArea,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Active = {
	render: Template,

	args: {
		active: true,
		label: 'Explain how you are cool!',
		name: 'cool',
		placeholder: 'Coolness goes here!'
	}
};

export const Inactive = {
	render: Template,

	args: {
		active: false,
		label: 'Explain how you are cool!',
		name: 'cool',
		placeholder: 'Coolness goes here!'
	}
};
