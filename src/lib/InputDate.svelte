<script lang="ts">
	import { scroll } from './scroll';

	export let label: string;
	export let name: string;
	export let placeholder: string;

	export let active = false;
	let el: HTMLElement;
	$: _active = active || $scroll > (el ? el.getBoundingClientRect().top : 0);
</script>

<div class="input" bind:this={el}>
	<label class="covered-label" for={name}>
		<span class="cover" class:activate={_active} />
		<span class="content">{label}</span>
	</label>
	<input id={name} type="date" {name} {placeholder} required />
</div>

<style lang="scss">
	@import './scss/coverable.scss';

	.input {
		input {
			background: none;
			border: none;
			border-bottom: 2px solid $gold;
			color: $gold;

			flex: 1 1;
			outline: none;

			margin: 0;
			padding: 0 8px;

			&::placeholder {
				color: transparentize($gold, 0.4);
			}
		}
	}
</style>
