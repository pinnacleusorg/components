import PinnacleIcon from '../lib/PinnacleIcon.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Elements/PinnacleIcon',
	component: PinnacleIcon,
	argTypes: {
		color: { control: 'select', options: ['white', 'gold', 'bg'] },
		size: { control: { type: 'range', min: 2, max: 10, step: 0.25 } }
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: PinnacleIcon,
	props: args
});

export const Small = {
	render: Template,

	args: {
		color: 'gold',
		size: 3
	}
};

export const Medium = {
	render: Template,

	args: {
		color: 'gold',
		size: 6
	}
};

export const Large = {
	render: Template,

	args: {
		color: 'gold',
		size: 9
	}
};
