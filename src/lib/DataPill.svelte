<script lang="ts">
	export let label: string;
</script>

<span class="pill">{label}</span>

<style lang="scss">
	.pill {
		background-color: $grey-dark;
		border-radius: 1rem;
		color: $white;
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.25rem;
		padding: 0.25rem 0.75rem;
	}
</style>
