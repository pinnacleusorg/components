import PinnacleLogo from '../lib/PinnacleLogo.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Elements/PinnacleLogo',
	component: PinnacleLogo,
	argTypes: {
		byline: { control: 'text' },
		bylineColor: { control: 'select', options: ['white', 'gold'] },
		showByline: { control: 'boolean' },
		showIcon: { control: 'boolean' }
	}
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: PinnacleLogo,
	props: args,
	on: {
		click: args.onClick
	}
});

export const Default = {
	render: Template,

	args: {
		byline: 'The Olympics of Hackathons',
		bylineColor: 'gold',
		showByline: true,
		showIcon: false
	}
};

export const WordMark = {
	render: Template,

	args: {
		byline: '',
		bylineColor: 'gold',
		showByline: false,
		showIcon: false
	}
};

export const TeamApp = {
	render: Template,

	args: {
		byline: 'Team Application',
		bylineColor: 'gold',
		showByline: true,
		showIcon: true
	}
};
