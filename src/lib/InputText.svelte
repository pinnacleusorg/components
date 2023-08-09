<script lang="ts">
	import Label from './Label.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Displayed placeholder text
	export let placeholder: string;
	// Input type
	export let type = 'text';
	// Is required
	export let required = true;
	// Initial set value (1-way binding)
	export let value: string = '';

	export let active = false;
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<input {id} {type} {name} {placeholder} {value} {required} />
</div>

<style lang="scss">
	.input {
		@include input;
	}
</style>
