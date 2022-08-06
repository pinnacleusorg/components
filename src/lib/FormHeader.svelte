<script lang="ts">
	import { scroll } from './scroll';

	export let active = false;
	let el: HTMLElement;
	$: _active = active || $scroll > (el ? el.getBoundingClientRect().top : 0);
</script>

<h2 id="form-header" bind:this={el}>Tell us about yourself.</h2>
<div class="vertibar-wrapper">
	<span class="vertibar" class:activate={_active} />
</div>

<style lang="scss">
	@import './scss/global.scss';

	h2 {
		color: $gold;
		font-family: KeplerStd, serif;
		font-weight: normal;
		font-size: 2rem;
		letter-spacing: 0.5px;
		text-align: center;
		margin: 0;
	}

	.vertibar-wrapper {
		display: block;
		min-height: 60px;
		margin: 80px auto;
	}

	.vertibar {
		background-color: $gold;
		display: block;
		height: 0px;
		width: 3px;
		margin: 80px auto;
		margin-top: 50px;

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
