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
	.input {
		@include input;
	}
</style>
