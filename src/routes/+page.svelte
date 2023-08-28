<script lang="ts">
  import { onMount } from "svelte";

  import { login } from "../auth";

  let jsonData: string | null = null;

  onMount(() => {
    const keyPrefix = "oidc.user:https://auth.immutable.com";
    if (typeof sessionStorage !== "undefined") {
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith(keyPrefix)) {
          const sessionData = sessionStorage.getItem(key);
          if (sessionData) {
            try {
              jsonData = JSON.stringify(JSON.parse(sessionData), null, 2);
            } catch (error) {
              console.error("Error parsing session data:", error);
            }
          }
          break; // No need to continue once the desired key is found
        }
      }
    }
  });
</script>

<div class="container dark-theme">
  <h1 class="title">Base Template with Vite + SvelteKit + Immutable SDK + polyfills</h1>
  {#if jsonData}
    <pre>{@html jsonData}</pre>
  {/if}
  <button on:click={login}>
    Sign In with
    <img
      src="https://assets-global.website-files.com/62535c6262b90afd768b9b26/62536a8f8dc259548c11d1a9_immutable-logo.svg"
      class="logo"
      alt="IMX logo"
    />
  </button>
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
