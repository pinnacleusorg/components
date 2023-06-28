import FormSection from '../lib/FormSection.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Elements/FormSection',
	component: FormSection,
	argTypes: {
		active: { control: 'boolean' },
		label: { control: 'text' }
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: FormSection,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Primary = {
	render: Template,

	args: {
		active: true,
		label: 'Team Information'
	}
};

export const Secondary = {
	render: Template,

	args: {
		active: false,
		label: 'Team Information'
	}
};
