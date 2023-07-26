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
	// Maximum number of extra lines
	export let max: number = 20;

	export let active = false;

	// lines is the backing datastore for the input
	// showLines is what gets displayed to the user
	let lines: string[] = [];
	$: limit = Math.min(max, lines.filter(filterizer).length);
	$: showLines = lines.filter(filterizer).slice(0, limit);

	// removes all empty lines
	function filterizer(v: string, i: number) {
		if (v) return true;
		for (; i < lines.length; i++) {
			lines[i] = lines[i + 1];
			if (!lines[i]) delete lines[i];
		}
		return true;
	}
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<div>
		<input type="text" aria-labelledby={id} {placeholder} bind:value={lines[0]} required />
		{#each showLines as _, i}
			<input
				type="text"
				aria-labelledby={id}
				{placeholder}
				bind:value={lines[i + 1]}
				transition:fade
			/>
		{/each}
	</div>
	<input type="hidden" {id} {name} value={showLines.join(', ')} />
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
