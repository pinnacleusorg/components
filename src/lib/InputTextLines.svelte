<script lang="ts">
	import { fade } from 'svelte/transition';
	import Label from './Label.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Displayed placeholder text
	export let placeholder: string;

	export let active = false;

	let lines: string[] = [];

	function filterizer(v: string, i: number) {
		if (v) return true;
		else return false;
	}
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<div>
		<input type="text" aria-labelledby={id} {placeholder} bind:value={lines[0]} required />
		{#each lines.filter(filterizer) as _, i}
			<input
				type="text"
				aria-labelledby={id}
				{placeholder}
				bind:value={lines[i + 1]}
				transition:fade
			/>
		{/each}
	</div>
	<input type="hidden" {id} {name} value={lines.join(', ')} />
</div>

<style lang="scss">
	.input {
		@include input;

		> div {
			display: flex;
			flex-direction: column;
			flex: 1 1;
			row-gap: 30px;
		}

		input {
			min-height: 1.65rem;
		}
	}
</style>
