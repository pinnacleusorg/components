<script lang="ts">
	import Label from './Label.svelte';
	import OptionCheckbox from './OptionCheckbox.svelte';
	import OptionRadio from './OptionRadio.svelte';
	import OptionText from './OptionText.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Type of options to show
	export let type: 'checkbox' | 'radio' = 'checkbox';
	// Show a customizable other option
	export let other: boolean = false;
	// Values to show for options
	export let options: string[] = [];
	// Initial set value (1-way binding) as CSV
	export let value: string = '';

	export let active = false;

	// backing datastore for checkbox type options
	let otherVal = value
		.split(',')
		.filter((o) => !options.includes(o))
		.join(',');
	$: otherValIndex = options.length;
	$: otherValExists = !!otherVal;
	let lines = options.map((o) => value.split(',').includes(o)).concat([!!otherVal]);

	// backing datastore for radio type options
	let group = otherVal.length > 0 ? otherVal : value;

	// reactively builds the data. this gets submitted
	$: data = buildData(lines, otherVal, group);
	function buildData(lines: boolean[], otherVal: string, group: string): string[] {
		if (type === 'radio') return [group];

		const checkedOptions = options.filter((_, i) => lines[i]);
		if (otherVal && lines[lines.length - 1]) checkedOptions.push(otherVal);
		return checkedOptions;
	}
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<div>
		{#each options as label, i}
			{#if type === 'checkbox'}
				<OptionCheckbox id="{id}-{i}" {label} name="{name}-{i}" bind:checked={lines[i]} />
			{:else if type === 'radio'}
				<OptionRadio id="{id}-{i}" {label} name="{name}-radio" value={label} bind:group />
			{/if}
		{/each}
		{#if other}
			{#if type === 'checkbox'}
				<OptionText
					id="{id}-other"
					name="{name}-other"
					{type}
					label="Other"
					placeholder="Type an option here"
					bind:checked={lines[otherValIndex]}
					bind:value={otherVal}
				/>
			{:else if type === 'radio'}
				<OptionText
					id="{id}-other"
					name="{name}-radio"
					{type}
					label="Other"
					placeholder="Type an option here"
					bind:checked={otherValExists}
					bind:value={group}
				/>
			{/if}
		{/if}
	</div>
	<input type="hidden" {id} {name} value={data.join(',')} />
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
