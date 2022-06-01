<script lang="ts">
	import Option from '../../lib/Option.svelte';
	import OptionGroup from '../../lib/OptionGroup.svelte';
	import OptionCheckbox from '../../lib/OptionCheckbox.svelte';

	export let title: string;
</script>

<Option title="Which team(s) would you like to join?" active={true}>
	<OptionGroup {title}>
		<OptionCheckbox id="2" name="1" label="Check 1" />
		<OptionCheckbox id="3" name="1" label="Check 2" />
		<OptionCheckbox id="4" name="1" label="Check 3" />
	</OptionGroup>
	<OptionGroup {title}>
		<OptionCheckbox id="2" name="1" label="Check 1" />
		<OptionCheckbox id="3" name="1" label="Check 2" />
		<OptionCheckbox id="4" name="1" label="Check 3" />
	</OptionGroup>
</Option>
