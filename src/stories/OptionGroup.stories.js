import OptionGroupView from './views/OptionGroupView.svelte';

export default {
	title: 'Options/OptionGroup',
	component: OptionGroupView,
	argTypes: {
		title: { control: 'text' }
	}
};

const Template = (args) => ({
	Component: OptionGroupView,
	props: args
});

export const Group = {
	render: Template,

	args: {
		title: 'Team Name'
	}
};
