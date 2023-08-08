<script lang="ts">
	export let disabled: boolean = false;
	export let option: string;
	export let selected: boolean = false;
	export let value: string;
</script>

<option {disabled} {selected} {value}>{option}</option>
