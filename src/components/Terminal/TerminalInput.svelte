<script lang="ts">
  import { onMount } from 'svelte';
  import { commandList } from '../../stores/commandList';
  import { verifyCommand } from '../../utils/terminal';

  let input: HTMLInputElement;

  onMount(() => input.focus());

  const handleCommand = () => {
    if (!input.value) return;
    const response = verifyCommand(input.value);
    const newCommand = {
      content: input.value,
      isInput: true
    };

    commandList.update((prev) => [...prev, newCommand, response]);
    input.value = '';
  };
</script>

<form on:submit|preventDefault={handleCommand}>
  <i class="fa-solid fa-chevron-right" />
  <input
    bind:this={input}
    on:blur={() => input.focus()}
    spellcheck="false"
    autocomplete="false"
  />
</form>

<style>
  input {
    font-family: 'SF Mono', monospace;
    background-color: transparent;
    border: none;
    outline: none;
    color: #e1e1e2;
    padding: 0rem 0.5rem;
    width: 100%;
    font-size: 1rem;
    margin: 0.15rem 0;
  }

  i {
    font-size: 0.8rem;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>
