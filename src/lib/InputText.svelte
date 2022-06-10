<script lang="ts">
	import { ScrollHandler } from './internal/scrollHandler';

	export let label: string;
	export let name: string;
	export let placeholder: string;
	export let type = 'text';

	export let active = false;
	$: sh = new ScrollHandler(active);
</script>

<div class="input" bind:this={sh.el}>
	<label class="covered-label" for={name}>
		<span class="cover" class:activate={sh._active} />
		<span class="content">{label}</span>
	</label>
	<input id={name} {type} {name} {placeholder} required />
</div>

<style lang="scss">
	@import './scss/global.scss';
	@import './scss/coverable.scss';

	.input {
		display: flex;
		column-gap: 6%;
		width: 100%;

		input {
			background: none;
			border: none;
			border-bottom: 3px solid $gold;
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
