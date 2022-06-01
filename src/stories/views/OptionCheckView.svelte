<script lang="ts">
	import Option from '../../lib/Option.svelte';
	import OptionCheckbox from '../../lib/OptionCheckbox.svelte';

	// Option parameters
	export let active: boolean;
	export let title: string;
</script>

<Option {active} {title}>
	<OptionCheckbox id="2" name="1" label="Check 1" />
	<OptionCheckbox id="3" name="1" label="Check 2" />
	<OptionCheckbox id="4" name="1" label="Check 3" />
</Option>
