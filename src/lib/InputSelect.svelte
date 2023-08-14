<script lang="ts">
	import Label from './Label.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Two-way binding for selected value
	export let value: string = '';

	export let active = false;
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	{#if value}
		<select {id} {name} bind:value required>
			<slot />
		</select>
	{:else}
		<select {id} {name} required>
			<slot />
		</select>
	{/if}
</div>

<style lang="scss">
	.input {
		@include input(select);

		select {
			appearance: none;
		}
	}
</style>
