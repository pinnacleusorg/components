<script lang="ts">
	import Label from './Label.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Displayed placeholder text
	export let placeholder: string;
	// Maximum text length
	export let maxlength = 1000;

	let input: HTMLTextAreaElement;
	$: characters = input ? input.value.length : 0;
	const change = () => (characters = input.value.length);

	export let active = false;
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<textarea
		{id}
		{name}
		{placeholder}
		rows="10"
		required
		{maxlength}
		bind:this={input}
		on:keydown={change}
	/>
	<p class="limiter">{characters}/{maxlength}</p>
</div>

<style lang="scss">
	.input {
		@include input(textarea);
		flex-direction: column;
		row-gap: 30px;

		.limiter {
			color: $gold;
			position: absolute;
			top: calc(100% + 5px);
			right: 0;
			opacity: 0.5;
		}

		:global .covered-label {
			width: 100%;
			position: relative;
		}

		textarea {
			border: 2px solid $gold;
			font-family: inherit;
			padding: 20px;
			resize: vertical;
		}
	}
</style>
