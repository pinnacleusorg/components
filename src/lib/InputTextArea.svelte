<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let name: string;
	export let placeholder: string;

	let input: HTMLTextAreaElement;
	$: characters = input ? input.value.length : 0;
	const change = () => (characters = input.value.length);

	export let active = false;
</script>

<div class="input">
	<Label forId={name} {active}>{label}</Label>
	<textarea
		id={name}
		type="text"
		{name}
		{placeholder}
		rows="10"
		required
		maxlength="1000"
		bind:this={input}
		on:keydown={change}
	/>
	<p class="limiter">{characters}/1000</p>
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
