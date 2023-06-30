<script lang="ts">
	import Label from './Label.svelte';
	// Displayed title of the group
	export let title: string;

	export let active = false;
</script>

<div class="group">
	<h3><Label forId="" inline={false} {active}>{title}</Label></h3>
	<div class="desc">
		<slot name="description" />
	</div>
	<div class="indent"><slot /></div>
</div>

<style lang="scss">
	.group {
		margin: 3rem 0;
	}

	h3 {
		color: $gold;
		font-weight: 400;
	}

	:global .covered-label {
		width: 100%;
		position: relative;
	}

	.desc {
		color: $gold;
		font-size: 0.75em;
		margin-top: 10px;
		min-height: 10px;
		opacity: 0.8;
	}

	.indent {
		display: flex;
		flex-direction: column;
		row-gap: 5px;
		margin-left: 30px;

		@media (min-width: 512px) {
			margin-left: 50px;
		}
	}
</style>
