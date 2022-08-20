<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let name: string;
	export let placeholder: string;

	export let active = false;
</script>

<div class="input">
	<Label forId={name} {active}>{label}</Label>
	<select id={name} type="date" {name} {placeholder} required>
		<slot />
	</select>
</div>

<style lang="scss">
	.input {
		@include input(select);

		select {
			appearance: none;
		}
	}
</style>
