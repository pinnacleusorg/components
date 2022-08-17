<script lang="ts">
	import Checked from './icon/_checked.svelte';
	import Checknt from './icon/_checknt.svelte';

	export let id: string;
	export let label: string;
	export let name: string;
	export let placeholder: string;
	let value: string;
</script>

<label for={id}>
	<input {id} {name} type="radio" bind:value />
	<input type="text" bind:value {placeholder} />
	<span class="content">{label}</span>
	<span class="under" />
	<span class="checked"><Checked /></span>
	<span class="checknt"><Checknt /></span>
</label>

<style lang="scss">
	label {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: flex-end;
		column-gap: 20px;

		margin-bottom: 10px;
		padding: 15px 0;
		padding-bottom: 5px;
		user-select: none;

		position: relative;

		.checked,
		.checknt {
			display: grid;
			place-items: center;
			width: 20px;
		}
	}

	input[type='radio'] {
		position: absolute;
		left: -2000px;

		&:focus ~ .content {
			text-decoration: underline;
		}

		~ .content {
			color: $gold;
			opacity: 0.5;
			transition-duration: 0.2s;
		}
		~ .under {
			display: none;
		}

		~ .checked {
			display: none;
		}

		&:not(:checked) ~ input {
			visibility: hidden;
		}

		&:checked ~ .content {
			opacity: 1;
		}
		&:checked ~ .under {
			background-color: $gold;
			display: block;
			width: 100%;
			height: 2.5px;
			position: absolute;
			left: 0;
			right: 0;
			bottom: -3px;
		}
		&:checked ~ .checked {
			display: grid;
		}
		&:checked ~ .checknt {
			display: none;
		}
	}

	input[type='text'] {
		background-color: transparent;
		border: none;
		color: $gold;
		font-family: inherit;
		outline: none;
		flex: 1 1;
	}
</style>
