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
	// Allow preview expansion for non-images
	export let expandable: boolean = false;

	$: id = `${name}-${Math.round(Math.random() * 1e6)}`;
	$: hasItem = val.length > 1;

	export let active = false;

	let isExpanded = false;
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
				alert('File too large (maximum 7MB)');
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

	function expandView(e: Event) {
		e.stopPropagation();
		isExpanded = !isExpanded;
	}
</script>

<div class="input">
	<Label forId={id} {active}>{label}</Label>
	<input {id} type="file" {accept} on:change={translateFile} required={!hasItem} />
	<input type="hidden" {name} bind:value={val} />
	<button
		class="uploader"
		type="button"
		class:hasItem
		class:isExpanded
		class:isImage
		on:click={openFileDialog}
	>
		{#if val.length > 1}
			<span class:isExpanded>
				{fname}
				<span class="spacer" />
				{#if !isImage && expandable}
					<button aria-label="open larger preview" on:click={expandView}>
						{#if isExpanded}↗{:else}↘{/if}
					</button>
				{/if}
				<b aria-label="replace with other file">✕</b>
			</span>
			{#if isImage}
				<div class="image-border" />
				<img class="isImage" src={val} alt={placeholder} />
			{:else}
				<iframe class:expandable src={val} title={placeholder} />
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
			cursor: pointer;
			color: $gold;
			height: 100px;
			padding: 1rem;
			flex: 1 1;

			position: relative;

			&.hasItem {
				transition-duration: 1s;
				height: 400px;
				overflow: hidden;

				iframe {
					border-radius: 0.25rem;
					filter: contrast(0.8);

					&.expandable {
						height: 500px;
					}
				}

				img {
					margin-bottom: 2.5rem;
				}

				> span {
					box-shadow: 0 0.1rem 0.5rem $bg;
				}

				&.isImage {
					height: 360px;

					> span {
						bottom: 10px;
					}
				}
			}

			&.hasItem.isExpanded {
				height: 500px;
			}

			> span {
				background-color: $bg;
				border-radius: 0.25rem;
				display: flex;
				align-items: center;
				column-gap: 1rem;
				font-size: 0.9rem;
				padding: 0.5rem 0.8rem;
				margin: 0 auto;
				position: absolute;
				bottom: 20px;
				left: 20px;
				right: 20px;
				z-index: 10;
				transition-duration: 0.3s;

				.spacer {
					flex: 1 1;
				}

				b,
				button {
					box-sizing: border-box;
					background-color: transparent;
					border: 2px solid $gold;
					border-radius: 30%;
					color: $white;
					display: grid;
					place-items: center;
					font-weight: bold;
					font-size: 0.6rem;
					padding: 5px;
					min-height: 30px;
					min-width: 30px;
				}
				b:hover,
				button:hover {
					background-color: $gold;
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
			}

			.isImage {
				border: 3px solid $gold;
				border-radius: 50%;
				width: 250px;
				height: 250px;
				margin: auto;
			}

			.image-border {
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
