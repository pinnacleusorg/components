<script>
	export let title;
</script>

<h3>{title}</h3>
<div class="subgroup">
	<slot />
</div>

<style lang="scss">
	h3 {
		color: $gold;
		font-weight: 400;
	}

	.subgroup {
		margin-left: 25px;
		margin-bottom: 5px;

		> :global(*) {
			margin: 0 !important;
			padding: 10px 0 !important;
		}

		> :global(*:first-child) {
			padding-top: 0 !important;
		}

		@media (min-width: 512px) {
			margin-left: 45px;

			:global(span) {
				transform-origin: left;
				transform: scale(0.8);
			}
		}
	}
</style>
