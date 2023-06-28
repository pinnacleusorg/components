<script lang="ts">
	export let color: 'white' | 'gold' | 'bg' = 'gold';
	export let size = 3;
</script>

<img
	class="logo {color}"
	style="width: {size}rem;"
	src="https://static.pinnacle.us.org/2021/meta/icon.png"
	alt="Pinnacle Logo"
/>

<style lang="scss">
	.logo {
		display: block;
		max-width: 100%;
		margin: auto;
		margin-bottom: 2rem;
		font-size: 1rem;
		width: 4rem;
	}

	@media (min-width: 768px) {
		.logo {
			width: 6rem;
		}
	}
</style>
