<script lang="ts">
import Button from './Button.svelte';

// import { createEventDispatcher } from 'svelte';
//
// import { state, send } from '../services/webserialService.ts'

//TODO: Use webserialService.States here instead?
export let port: { name: string } | null = null;
export let requestPort: () => void | null = null;
export let openPort: () => void | null = null;
export let releasePort: () => void | null = null;

</script>

<header>
  <nav class="flex items-center justify-between py-3.5 px-5 font-sans">
    <div>
      <svg class="inline-block align-top" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
            fill="#FFF"
          />
          <path
            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
            fill="#555AB9"
          />
          <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
        </g>
      </svg>
      <h1 class="inline-block align-top leading-none my-1.5 ml-0 mr-2.5 text-lg font-medium">SvelteKit WebSerial</h1>
    </div>
    <div>
      {#if port}
        <Button primary size="small" on:click={openPort} label="Open {port}" />
        <Button size="small" on:click={releasePort} label="Release port" />
      {:else}
        <Button primary size="small" on:click={requestPort} label="Request port" />
      {/if}
    </div>
  </nav>
</header>
