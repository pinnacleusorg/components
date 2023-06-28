<script lang="ts">
	import { scroll } from './scroll';

	export let active = false;
	export let label = 'Input your basic info';

	let el: HTMLElement;
	$: _active = active || $scroll > (el ? el.getBoundingClientRect().top : 0);
</script>

<div class="vertibar-wrapper">
	<span class="vertibar" class:activate={_active} />
</div>
<h2 id="form-header" bind:this={el}>{label}</h2>

<style lang="scss">
	h2 {
		color: $gold;
		font-family: KeplerStd, serif;
		font-weight: normal;
		font-size: 2rem;
		letter-spacing: 0.5px;
		text-align: center;
		margin: 0;
		margin-bottom: 80px;
	}

	.vertibar-wrapper {
		display: block;
		min-height: 60px;
		margin: 80px auto;
		margin-top: 0;
	}

	.vertibar {
		background-color: $gold;
		display: block;
		height: 0px;
		width: 3px;
		margin: 80px auto;
		margin-top: 0;

		&.activate {
			animation: slideDown 1.5s forwards;
		}
	}

	@keyframes slideDown {
		0% {
			height: 0px;
		}
		100% {
			height: 60px;
		}
	}
</style>
