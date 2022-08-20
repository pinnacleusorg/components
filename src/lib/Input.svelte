<script lang="ts">
	// Sets aria-label attribute
	export let label: string;
	// Input name used in FormData object
	export let name: string;
	// Displayed placeholder text
	export let placeholder: string;
	// Input type
	export let type = 'text';
</script>

<div class="input">
	<input id={name} {type} {name} {placeholder} aria-label={label} required />
</div>

<style lang="scss">
	.input {
		@include input;
	}
</style>
