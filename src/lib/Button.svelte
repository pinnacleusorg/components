<script lang="ts">
	export let type = 'submit';
	export let title = '';
</script>

<button {type} class="button" on:click>
	<slot>{title}</slot>
</button>

<style lang="scss">
	@import './scss/global.scss';

	.button {
		background-color: transparent;
		border: 3px solid $gold;
		border-radius: 5px;
		color: $gold;
		margin: -5px 0;
		padding: 8px 50px;

		transition-duration: 0.2s;

		&:hover {
			background-color: $gold;
			color: $bg-light;
		}
	}
</style>
