<script lang="ts">
	import Label from './Label.svelte';

	// Accepted file types
	export let accept = "application/pdf";
	// Displayed label text
	export let label: string;
	// Name in form data
	export let name: string;
	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	// Displayed placeholder text, pre-upload
	export let placeholder: string;

	export let active = false;

	$: isImage = accept === "image/*";

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
	<input {id} type="file" {accept} on:change={translateFile} required />
	<input type="hidden" {name} bind:value={val} />
	<button class="uploader" type="button" on:click={openFileDialog}>
		{#if val.length > 1}
			<span>{fname} <b aria-label="replace with other file">✕</b></span>
			{#if isImage}
				<div class="image-border"></div>
				<iframe class="isImage" src="{val}" title="{placeholder}" />
			{:else}
				<iframe src="{val}" title="{placeholder}"></iframe>
			{/if}
		{:else}
			{placeholder}
		{/if}
	</button>
</div>

<style lang="scss">
	.input {
		@include input;

		input {
			display: none;
		}

		.uploader {
			background: none;
			border: dashed 2px $gold;
			color: $gold;
			min-height: 300px;
			padding: 3rem;
			flex: 1 1;

			position: relative;

			span {
				background-color: $bg;
				border-radius: 0.25rem;
				display: flex;
				align-items: center;
				padding: 0.5rem 1rem;
				margin: 0 auto;
				width: max-content;
				position: absolute;
				left: 0;
				right: 0;
				z-index: 10;

				b {
					background-color: $gold;
					border-radius: 50%;
					color: $white;
					display: grid;
					place-items: center;
					font-size: 0.7rem;
					margin-left: 15px;
					padding: 5px;
					height: 16px;
					width: 16px;
				}
			}

			iframe {
				border: none;
				box-sizing: border-box;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: 0.5rem;
				height: calc(100% - 1rem);
				width: calc(100% - 1rem);

				&.isImage {
					-webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
					clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
					width: 294px;
					height: 294px;
					margin: auto;
				}
			}

			.image-border {
				background-color: $gold;
				box-sizing: border-box;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				-webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
				clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
				width: 300px;
				height: 300px;
				margin: auto;
			}
		}
	}
</style>