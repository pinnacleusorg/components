<script lang="ts">
	export let color = 'gold';
	export let type = 'submit';
	export let title = '';
	export let small = false;
</script>

<button {type} class="button {color}" class:small on:click>
	<span class="expander" />
	<span class="text"><slot>{title}</slot></span>
</button>

<style lang="scss">
	@import './scss/global.scss';

	.button {
		background-color: transparent;
		border: 2px solid $gold;
		border-radius: 0;
		color: $gold;
		margin: 0;
		min-width: 10rem;
		padding: 0.6rem 2rem;

		position: relative;
		transition-duration: 0.2s;

		&.small {
			padding: 0.4rem 2rem;

			.text {
				font-size: 0.9rem;
			}
		}

		.expander {
			background-color: $gold;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;

			width: 0%;
			transition: 0.3s;
		}

		.text {
			position: relative;
			z-index: 1;
		}

		&:hover {
			color: $grey;

			.expander {
				width: 100%;
			}
		}

		&.black {
			background-color: $black;
			border-color: $black;
			color: $grey;

			.expander {
				background-color: lighten($black, $adjust-major);
			}
			&:hover {
				border-color: lighten($black, $adjust-major);
			}
		}

		&.black-outline {
			background-color: transparent;
			border-color: $black;
			color: $black;

			.expander {
				background-color: darken($white, $adjust-major);
			}
		}

		&:active {
			border-color: $gold !important;
			color: $grey !important;
			transition-duration: 0.1s;

			.expander {
				background-color: $gold !important;
				transition-duration: 0.1s;
			}
		}
	}
</style>
