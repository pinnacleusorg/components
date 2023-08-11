import InputOption from '../lib/InputOption.svelte';

export default {
	title: 'Inputs/InputOption',
	component: InputOption,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' },
		name: { control: 'text' },
		type: { control: 'text' },
		options: { control: 'array' }
	}
};

const Template = (args) => ({
	Component: InputOption,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Active = {
	render: Template,

	args: {
		active: true,
		label: 'Links',
		name: 'links',
		type: 'radio',
		options: ['1', '2', '3']
	}
};

export const Inactive = {
	render: Template,

	args: {
		active: false,
		label: 'Links',
		name: 'links',
		options: ['1', '2', '3']
	}
};
