<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import Label from './Label.svelte';

	// Accepted file types
	export let accept = 'application/pdf';
	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	// Displayed placeholder text, pre-upload
	export let placeholder: string;
	// Initial set value as data URL (1-way binding)
	export let value: string = '';

	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	$: hasItem = val.length > 1;

	export let active = false;

	$: fname = value ? 'Already Uploaded' : '';
	$: val = value;
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
		const inp = document.querySelector('#' + id) as HTMLInputElement;
		getBase64(inp.files![0]);
	}

	function openFileDialog(e: Event) {
		e.stopPropagation();
		(document.querySelector('#' + id) as HTMLElement).click();
		return false;
	}
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<input {id} type="file" {accept} on:change={translateFile} required={!hasItem} />
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
