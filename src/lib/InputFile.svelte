<script lang="ts">
	import Button from './Button.svelte';
	export let label: string;
	export let name: string;
	export let active: boolean;

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
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
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
	<label class="covered-label" for={name}>
		<span class="cover" class:activate={active} />
		<span class="content">{label}</span>
	</label>
	<input id={name} type="file" accept="application/pdf" on:change={translateFile} required />
	<input type="hidden" {name} bind:value={val} />
	<Button type="button" on:click={openFileDialog}>
		{#if val.length > 1}
			{fname}
		{:else}
			Upload Resume
		{/if}
	</Button>
</div>

<style lang="scss">
	@import './scss/global.scss';
	@import './scss/coverable.scss';

	.input {
		display: flex;
		align-items: center;
		column-gap: 6%;
		width: 100%;

		input {
			display: none;
		}
	}
</style>
