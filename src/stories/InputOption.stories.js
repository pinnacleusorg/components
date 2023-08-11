import InputOption from '../lib/InputOption.svelte';

export default {
	title: 'Inputs/InputOption',
	component: InputOption,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' },
		name: { control: 'text' },
		type: { control: 'select', options: ['checkbox', 'radio'] },
		other: { control: 'boolean' },
		options: { control: 'array' },
		value: { control: 'text' }
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
		type: 'checkbox',
		other: true,
		options: ['abc', 'def', 'ghi'],
		value: 'abc,def,ghi'
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
