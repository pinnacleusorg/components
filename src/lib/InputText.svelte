<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let name: string;
	export let placeholder: string;
	export let type = 'text';

	export let active = false;
</script>

<div class="input">
	<Label forId={name} {active}>{label}</Label>
	<input id={name} {type} {name} {placeholder} required />
</div>

<style lang="scss">
	.input {
		@include input;
	}
</style>
