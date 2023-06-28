<script lang="ts">
	export let byline = 'The Olympics of Hackathons';
	export let bylineColor: 'white' | 'gold' = 'white';
	export let showByline = true;
	export let showIcon = true;
</script>

<div class="logo-container">
	{#if showIcon}
		<img src="https://static.pinnacle.us.org/2021/meta/icon.png" alt="Pinnacle Logo" class="logo" />
	{/if}
	<img src="https://static.pinnacle.us.org/2021/assets/textLogo.png" alt="Pinnacle" class="label" />
	{#if showByline}
		<p class="byline {bylineColor}"><slot>{byline}</slot></p>
	{/if}
</div>

<style lang="scss">
	.logo-container {
		color: $gold;
		font-family: KeplerStd;
		text-align: center;
	}

	img {
		display: block;
		margin: auto;
	}
	.logo {
		max-width: 100%;
		width: 4rem;
	}
	.label {
		margin-top: 2rem;
		max-width: 16rem;
	}

	.byline {
		font-family: KeplerStd;
		font-size: 1.25rem;
		font-weight: lighter;
		letter-spacing: 1.2px;
		max-width: 100%;
		margin-top: 1rem;

		&.white {
			color: $white;
		}
		&.gold {
			color: $gold;
		}
	}

	@media (min-width: 768px) {
		.logo {
			width: 6rem;
		}
		.label {
			margin-top: 2rem;
			max-width: 25rem;
		}
		.byline {
			font-size: 1.5rem;
			margin-top: 1.75rem;
		}
	}
</style>
