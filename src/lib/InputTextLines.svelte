<script lang="ts">
	import { fade } from 'svelte/transition';
	import { scroll } from './scroll';
	export let label: string;
	export let name: string;
	export let placeholder: string;

	export let active = false;
	let el: HTMLElement;
	$: _active = active || $scroll > (el ? el.getBoundingClientRect().top : 0);

	let lines: string[] = [];

	function filterizer(v: string, i: number) {
		if (v) return true;
		else return false;
	}
</script>

<div class="input" bind:this={el}>
	<label class="covered-label" for={name}>
		<span class="cover" class:activate={_active} />
		<span class="content">{label}</span>
	</label>
	<div>
		<input type="text" {placeholder} bind:value={lines[0]} required />
		{#each lines.filter(filterizer) as _, i}
			<input type="text" {placeholder} bind:value={lines[i + 1]} transition:fade />
		{/each}
	</div>
	<input type="hidden" id={name} {name} value={lines.join(',')} />
</div>

<style lang="scss">
	@import './scss/global.scss';
	@import './scss/coverable.scss';

	.input {
		display: flex;
		column-gap: 6%;
		width: 100%;

		> div {
			display: flex;
			flex-direction: column;
			flex: 1 1;
			row-gap: 30px;
		}

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
