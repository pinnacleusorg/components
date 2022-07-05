<script lang="ts">
	import InputSelect from '../../lib/InputSelect.svelte';
	import InputSelectOption from '../../lib/InputSelectOption.svelte';

	export let label: string;
	export let name: string;
	export let placeholder: string;
	export let active: boolean;
</script>

<InputSelect {label} {name} {placeholder} {active}>
	<InputSelectOption value="x1" option="X Option 1" />
	<InputSelectOption value="x2" option="X Option 2" />
</InputSelect>
