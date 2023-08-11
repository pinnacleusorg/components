<script lang="ts">
	import Checked from './icon/_checked.svelte';
	import Checknt from './icon/_checknt.svelte';

	export let id: string;
	export let label: string;
	export let name: string;
	export let value = id;
	export let group: string = '';
</script>

<label for={id}>
	<input {id} {name} type="radio" {value} bind:group required />
	<span>{label} {group}</span>
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

		padding: 15px 0;
		user-select: none;

		.checked,
		.checknt {
			display: grid;
			place-items: center;
			width: 20px;
		}
	}

	input {
		position: absolute;
		left: -2000px;

		&:focus + span {
			text-decoration: underline;
		}

		+ span {
			color: $gold;
			opacity: 0.5;
			transition-duration: 0.2s;
		}

		~ .checked {
			display: none;
		}

		&:checked + span {
			opacity: 1;
		}
		&:checked ~ .checked {
			display: grid;
		}
		&:checked ~ .checknt {
			display: none;
		}
	}
</style>
