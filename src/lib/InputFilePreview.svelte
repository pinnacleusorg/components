<script lang="ts">
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

	$: isImage = accept === 'image/*';

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
	<button class="uploader" type="button" class:hasItem class:isImage on:click={openFileDialog}>
		{#if val.length > 1}
			<span>{fname} <b aria-label="replace with other file">✕</b></span>
			{#if isImage}
				<div class="image-border" />
				<iframe class="isImage" src={val} title={placeholder} />
			{:else}
				<iframe src={val} title={placeholder} />
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
			border: dashed 3px $gold;
			color: $gold;
			height: 100px;
			padding: 1rem;
			flex: 1 1;

			position: relative;

			&.hasItem {
				transition-duration: 1s;
				height: 350px;

				iframe {
					filter: blur(2px);
				}

				span {
					box-shadow: 0 0 1rem $bg;
				}

				&.isImage {
					height: 300px;
				}
			}

			span {
				background-color: $bg;
				border-radius: 0.25rem;
				display: flex;
				align-items: center;
				font-size: 0.9rem;
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
				pointer-events: none;

				&.isImage {
					-webkit-clip-path: circle(50% at 50% 50%);
					clip-path: circle(50% at 50% 50%);
					width: 250px;
					height: 250px;
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
				border-radius: 50%;
				width: 260px;
				height: 260px;
				margin: auto;
			}
		}
	}
</style>
