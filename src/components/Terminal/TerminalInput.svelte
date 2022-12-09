<script lang="ts">
  import { onMount } from 'svelte';
  import { commandList } from '../../stores/commandList';
  import { verifyCommand, verifyTab } from '../../utils/terminal';

  let input: HTMLInputElement;
  let suggestedInputs = [];
  let activeSuggestion: number;

  onMount(() => input.focus());

  const handleCommand = () => {
    if (!input.value) return;
    if (input.value === 'clear') {
      commandList.set([]);
    } else {
      const response = verifyCommand(input.value);
      const newCommand = {
        content: input.value,
        isInput: true
      };
      if (Array.isArray(response)) {
        commandList.update((prev) => [...prev, newCommand, ...response]);
      } else {
        commandList.update((prev) => [...prev, newCommand, response]);
      }
    }
    input.value = '';
  };

  const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') {
      activeSuggestion = 0;
      suggestedInputs = [];
      return;
    }
    e.preventDefault();
    if (suggestedInputs.length) {
      if (suggestedInputs.length - 1 === activeSuggestion) activeSuggestion = 0;
      else activeSuggestion += 1;
      input.value = suggestedInputs[activeSuggestion];
      return;
    }
    const res = verifyTab(input.value);
    if (res.length === 0) return;
    else if (res.length === 1) input.value = res[0];
    else {
      suggestedInputs = res;
      input.value = res[0];
      activeSuggestion = 0;
    }
  };
</script>

<form on:submit|preventDefault={handleCommand}>
  <i class="fa-solid fa-chevron-right" />
  <input
    bind:this={input}
    on:blur={() => input.focus()}
    spellcheck="false"
    autocomplete="false"
    on:keydown={handleTab}
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
