<script lang="ts">
	// Button display style
	export let color: 'gold-outline' | 'black' | 'black-outline' = 'gold-outline';
	// Button display text, can be omitted for slot content
	export let title = '';
	// Button type for forms
	export let type = 'submit';
	// Use compact styling
	export let small = false;
	// When present, this element becomes an anchor tag
	export let href = '';
</script>

{#if href}
	<a {href} class="button {color}" class:small on:click>
		<span class="expander" />
		<span class="text"><slot>{title}</slot></span>
	</a>
{:else}
	<button {type} class="button {color}" class:small on:click>
		<span class="expander" />
		<span class="text"><slot>{title}</slot></span>
	</button>
{/if}

<style lang="scss">
	.button {
		background-color: transparent;
		border: 2px solid $gold;
		border-radius: 0;
		box-sizing: border-box;
		color: $gold;

		display: grid;
		place-items: center;
		line-height: 1;

		margin: 0;
		padding: 0.6rem 2rem;
		min-width: 10rem;
		width: max-content;

		text-align: center;
		text-decoration: none;

		position: relative;
		transition-duration: 0.2s;

		&.small {
			padding: 0.4rem 2rem;

			.text {
				font-size: 0.85rem;
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
