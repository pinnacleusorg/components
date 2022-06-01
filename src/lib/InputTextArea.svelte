<script lang="ts">
	export let label: string;
	export let name: string;
	export let placeholder: string;

	export let active: string;
</script>

<div class="input">
	<label class="covered-label" for={name}>
		<span class="cover" class:activate={active} />
		<span class="content">{label}</span>
	</label>
	<textarea id={name} type="text" {name} {placeholder} rows="10" required class:activate={active} />
</div>

<style lang="scss">
	@import './scss/global.scss';
	@import './scss/coverable.scss';

	.input {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		width: 100%;

		.covered-label {
			width: 100%;
			position: relative;
		}

		textarea {
			background: none;
			border: 3px solid $gold;
			color: $gold;
			font-family: inherit;

			flex: 1 1;
			outline: none;

			margin: 0;
			padding: 20px;

			max-height: 0;
			opacity: 0;
			transition: all 2s 1s;
			resize: vertical;

			&::placeholder {
				color: transparentize($gold, 0.4);
			}

			&.activate {
				max-height: 500px;
				opacity: 1;
			}
		}
	}
</style>
