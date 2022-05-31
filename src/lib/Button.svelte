<script>
	import './css/global.css';
	export let type = 'submit';
	export let fallback = 'null';
</script>

<button {type} class="button" on:click>
	<slot>{fallback}</slot>
</button>

<style>
	.button {
		background-color: transparent;
		border: 3px solid var(--gold);
		border-radius: 5px;
		color: var(--gold);
		font-family: inherit;
		margin: -5px 0;
		padding: 8px 50px;

		transition-duration: 0.2s;
	}
	.button:hover {
		background-color: var(--gold);
		color: var(--bg-light);
	}
</style>
