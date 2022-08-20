<script lang="ts">
	import Button from './Button.svelte';
	import Label from './Label.svelte';

	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Displayed placeholder text, pre-upload
	export let placeholder: string;

	export let active = false;

	let fname = '';
	let val = '';
	function getBase64(file: File) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			fname = file.name;
			val = reader.result as string;
			if (val.length > 7500000) {
				alert('Resume too large (maximum 7MB)');
				val = '';
			}
		};
		reader.onerror = (err) => console.error('Error: ', err);
	}

	function translateFile() {
		const inp = document.querySelector('#' + name) as HTMLInputElement;
		getBase64(inp.files![0]);
	}

	function openFileDialog(e: Event) {
		e.stopPropagation();
		(document.querySelector('#' + name) as HTMLElement).click();
		return false;
	}
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<input {id} type="file" accept="application/pdf" on:change={translateFile} required />
	<input type="hidden" {name} bind:value={val} />
	<span class="uploader">
		<Button type="button" on:click={openFileDialog} small>
			{#if val.length > 1}
				{fname}
			{:else}
				{placeholder}
			{/if}
		</Button>
	</span>
</div>

<style lang="scss">
	.input {
		@include input;
		align-items: center;

		input {
			display: none;
		}
	}
</style>
