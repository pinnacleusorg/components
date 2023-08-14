import InputFilePreview from '../lib/InputFilePreview.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Inputs/InputFilePreview',
	component: InputFilePreview,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' },
		name: { control: 'text' },
		placeholder: { control: 'text' },
		accept: { control: 'text' }
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: InputFilePreview,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Active = {
	render: Template,

	args: {
		active: true,
		label: 'Resume',
		name: 'resume',
		placeholder: 'Upload Resume'
	}
};

export const Inactive = {
	render: Template,

	args: {
		active: false,
		label: 'Resume',
		name: 'resume',
		placeholder: 'Upload Resume'
	}
};
