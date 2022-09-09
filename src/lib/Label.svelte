<script lang="ts">
	import { scroll } from './scroll';
	export let forId: string;
	export let inline = true;
	export let active = false;
	let el: HTMLElement;
	$: _active = active || $scroll > (el ? el.getBoundingClientRect().top : 0);
</script>

<label class="covered-label" for={forId} bind:this={el}>
	{#if !inline}<span class="spacer" />{/if}
	<span class="cover" class:activate={_active} />
	<span class="content"><slot /></span>
</label>

<style lang="scss">
	.covered-label {
		background-color: $gold;
		border-bottom: 2px solid $gold;
		display: flex;
		justify-content: flex-end;
		height: max-content;
		min-width: 30%;
		width: max-content;

		.spacer {
			background-color: $gold;
			flex: 1 1;
			min-width: 30px;
		}

		.cover {
			@include cover;
		}

		.content {
			@include content;
		}
	}
</style>
