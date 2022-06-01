<script lang="ts">
	import Option from '../../lib/Option.svelte';
	import OptionRadio from '../../lib/OptionRadio.svelte';
	import OptionText from '../../lib/OptionText.svelte';

	// Option parameters
	export let active: boolean;
	export let title: string;
</script>

<Option {active} {title}>
	<OptionRadio id="2" name="1" label="Radio 1" />
	<OptionRadio id="3" name="1" label="Radio 2" />
	<OptionRadio id="4" name="1" label="Radio 3" />
	<OptionText id="1" name="1" label="Other:" placeholder="text input" />
</Option>
