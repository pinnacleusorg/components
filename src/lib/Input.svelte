<script lang="ts">
	// Input name used in FormData object
	export let name: string;
	// Displayed placeholder text & aria-label
	export let placeholder: string;
	// Input type
	export let type = 'text';
</script>

<div class="input">
	<input id={name} {type} {name} {placeholder} aria-label={placeholder} required />
</div>

<style lang="scss">
	.input {
		@include input;
	}
</style>
