import DataPill from '../lib/DataPill.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Data/DataPill',
	component: DataPill,
	argTypes: {
		label: { control: 'text' }
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: DataPill,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Black = {
	render: Template,

	args: {
		label: 'She/Her'
	}
};
