import Input from '../lib/Input.svelte';

export default {
	title: 'Inputs/Input',
	component: Input,
	argTypes: {
		name: { control: 'text' },
		placeholder: { control: 'text' },
		type: { control: 'text' },
		value: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: Input,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Text = {
	render: Template,

	args: {
		name: 'name',
		placeholder: 'Name'
	}
};

export const Email = {
	render: Template,

	args: {
		name: 'email',
		placeholder: 'Email',
		type: 'email'
	}
};

export const Number = {
	render: Template,

	args: {
		name: 'age',
		placeholder: 'Number',
		type: 'number'
	}
};

export const Phone = {
	render: Template,

	args: {
		name: 'phone',
		placeholder: 'Phone',
		type: 'phone'
	}
};
