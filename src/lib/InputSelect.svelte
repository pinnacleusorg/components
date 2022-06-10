<script lang="ts">
	import { ScrollHandler } from './internal/scrollHandler';

	export let label: string;
	export let name: string;
	export let placeholder: string;

	export let options: string[];

	export let active = false;
	$: sh = new ScrollHandler(active);
</script>

<div class="input" bind:this={sh.el}>
	<label class="covered-label" for={name}>
		<span class="cover" class:activate={sh._active} />
		<span class="content">{label}</span>
	</label>
	<select id={name} type="date" {name} {placeholder} required>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	@import './scss/global.scss';
	@import './scss/coverable.scss';

	.input {
		display: flex;
		column-gap: 6%;
		width: 100%;

		select {
			background: none;
			border: none;
			border-bottom: 3px solid $gold;
			border-radius: 0;
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
