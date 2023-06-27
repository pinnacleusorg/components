import Button from '../lib/Button.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Elements/Button',
	component: Button,
	argTypes: {
		color: { control: 'select', options: ['gold-outline', 'black', 'black-outline'] },
		type: { control: 'select', options: ['submit', 'reset'] },
		title: { control: 'text' },
		href: { control: 'text' }
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Button,
	props: args,
	on: {
		click: args.onClick
	}
});

export const GoldOutline = {
	render: Template,

	args: {
		color: 'gold-outline',
		type: 'submit',
		title: 'Submit'
	}
};

export const BlackOutline = {
	render: Template,

	args: {
		color: 'black-outline',
		type: 'reset',
		title: 'Cancel'
	}
};

export const Black = {
	render: Template,

	args: {
		color: 'black',
		type: 'reset',
		title: 'Cancel'
	}
};
