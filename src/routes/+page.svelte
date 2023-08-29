<script lang="ts">

</script>

<div class="container dark-theme">
	<h1 class="title">Base Template with Vite + SvelteKit + Immutable SDK + Web3 Polyfills</h1>
</div>

<style>
	/* Dark theme styles */
	:global(body) {
		background-color: #1c1c1c;
		color: #ffffff;
		font-family: 'Poppins', sans-serif;
	}
	.dark-theme {
		background-color: #2c2c2c;
		border: 1px solid #444444;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	}
	.title {
		font-size: 1.5rem;
		margin-bottom: 16px;
		text-align: center;
		font-family: 'Montserrat', sans-serif;
	}

	/* Existing styles */
	button {
		color: #0d0d0d;
		background-image: linear-gradient(137deg, #f191fa, #83e3f0);
		min-width: 140px;
		background-color: #0d0d0d;
		border: 0 #0d0d0d;
		border-radius: 48px;
		margin-top: 16px;
		padding: 12px 24px;
		font-weight: 500;
		text-decoration: none;
		display: flex;
		align-items: center;
		font-family: 'Montserrat', sans-serif;
		transition: background-color 0.3s, color 0.3s;
	}
	button:hover {
		background-color: #0d0d0d;
		color: #ffffff;
	}
	pre {
		color: white;
		margin-top: 16px;
		font-family: 'Roboto Mono', monospace;
	}
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		max-width: 80%;
		margin: auto;
	}
	.logo {
		max-height: 24pt;
		margin-left: 8px;
	}
</style>
