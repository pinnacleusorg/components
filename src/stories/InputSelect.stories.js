import InputSelectView from './views/InputSelectView.svelte';

export default {
	title: 'Inputs/InputSelect',
	component: InputSelectView,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' },
		name: { control: 'text' },
		placeholder: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: InputSelectView,
	props: args
});

export const Active = {
	render: Template,

	args: {
		active: true,
		label: 'What is your shirt size?',
		name: 'name',
		placeholder: 'Name'
	}
};

export const Inactive = {
	render: Template,

	args: {
		active: false,
		label: 'What is your shirt size?',
		name: 'name',
		placeholder: 'Name'
	}
};
