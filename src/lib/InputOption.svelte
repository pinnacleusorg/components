<script lang="ts">
	import Label from './Label.svelte';
	import OptionCheckbox from './OptionCheckbox.svelte';
	import OptionRadio from './OptionRadio.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Type of options to show
	export let type: 'checkbox' | 'radio' = 'checkbox';
	// Values to show for options
	export let options: string[] = [];
	// Initial set value (1-way binding) as CSV
	export let value: string = '';

	export let active = false;

	// backing datastore for the input
	let lines = options.map((o) => value.split(',').includes(o));
	let group = value;
	$: data = (type === 'checkbox' ? options.filter((_, i) => lines[i]) : [group]) || [];
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<div>
		{#each options as label, i}
			{#if type === 'checkbox'}
				<OptionCheckbox id="{id}-{i}" {label} {name} bind:checked={lines[i]} />
			{:else if type === 'radio'}
				<OptionRadio id="{id}-{i}" {label} {name} value={label} bind:group />
			{/if}
		{/each}
	</div>
	<input type="hidden" {id} {name} value={data.join(', ')} />
</div>

<style lang="scss">
	.input {
		@include input;

		> div {
			display: flex;
			flex-direction: column;
			flex: 1 1;
			row-gap: 5px;
		}

		input {
			min-height: 1.65rem;
		}

		> div :global(label:first-child) {
			padding-top: 8px;
		}
	}
</style>
