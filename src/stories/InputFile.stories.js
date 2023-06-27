import InputFile from '../lib/InputFile.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Inputs/InputFile',
	component: InputFile,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' },
		name: { control: 'text' },
		placeholder: { control: 'text' }
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: InputFile,
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
