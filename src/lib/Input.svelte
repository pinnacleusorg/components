<script lang="ts">
	// Input name used in FormData object
	export let name: string;
	// Displayed placeholder text & aria-label
	export let placeholder: string;
	// Input type
	export let type = 'text';
	// Input value (two-way binding)
	export let value: any = '';

	// https://stackoverflow.com/a/57393751/
	// manually implement two-way binding
	const bindInput = ({ target }: Event) => {
		if (!target) return;
		const v = (target as HTMLInputElement).value;
		value = type.match(/^(number|range)$/) ? +v : v;
	};
</script>

<div class="input">
	<input
		id={name}
		{type}
		{name}
		{placeholder}
		{value}
		on:input={bindInput}
		aria-label={placeholder}
		required
	/>
</div>

<style lang="scss">
	.input {
		@include input;
	}
</style>
