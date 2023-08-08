<script lang="ts">
	import Label from './Label.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;

	export let active = false;
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<select {id} {name} required>
		<slot />
	</select>
</div>

<style lang="scss">
	.input {
		@include input(select);

		select {
			appearance: none;
		}
	}
</style>
