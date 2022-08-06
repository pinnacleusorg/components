<script lang="ts">
	export let color = 'gold';
	export let type = 'submit';
	export let title = '';
</script>

<button {type} class="button {color}" on:click>
	<slot>{title}</slot>
</button>

<style lang="scss">
	@import './scss/global.scss';

	.button {
		background-color: transparent;
		border: 2px solid $gold;
		border-radius: 0;
		color: $gold;
		margin: -5px 0;
		padding: 12px 55px;

		transition-duration: 0.2s;

		&:hover {
			background-color: $gold;
			color: $grey;
		}

		&.black {
			background-color: $black;
			border-color: $black;
			color: $grey;

			&:hover {
				background-color: lighten($black, 20);
				border-color: lighten($black, 20);
			}
		}

		&.black-outline {
			background-color: transparent;
			border-color: $black;
			color: $black;

			&:hover {
				background-color: lighten($black, 20);
			}
		}

		&:active {
			background-color: $gold !important;
			color: $grey !important;
		}
	}
</style>
