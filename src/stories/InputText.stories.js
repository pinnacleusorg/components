import InputText from '../lib/InputText.svelte';

export default {
	title: 'Inputs/InputText',
	component: InputText,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' },
		name: { control: 'text' },
		placeholder: { control: 'text' },
		type: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: InputText,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Text = {
	render: Template,

	args: {
		active: true,
		label: 'What is your name?',
		name: 'name',
		placeholder: 'Name'
	}
};

export const Email = {
	render: Template,

	args: {
		active: true,
		label: 'What is your email?',
		name: 'email',
		placeholder: 'Email',
		type: 'email'
	}
};

export const Number = {
	render: Template,

	args: {
		active: true,
		label: 'What is your age?',
		name: 'age',
		placeholder: 'Number',
		type: 'number'
	}
};

export const Phone = {
	render: Template,

	args: {
		active: true,
		label: 'What is your phone?',
		name: 'phone',
		placeholder: 'Phone',
		type: 'phone'
	}
};
