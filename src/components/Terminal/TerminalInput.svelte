<script lang="ts">
  import { onMount } from 'svelte';
  import { commandList } from '../../stores/commandList';
  import { inputCommands } from '../../stores/inputCommands';
  import { verifyCommand, verifyTab } from '../../utils/terminal';

  export let input: HTMLInputElement;
  let suggestedInputs = [];
  let activeSuggestion: number;
  let activeInputIndex = $inputCommands.length;
  let tempValue = '';

  onMount(() => input.focus());

  const handleCommand = () => {
    if (!input.value) return;
    inputCommands.update((prev) => [...prev, input.value]);
    activeInputIndex++;
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
      } else if (response) {
        commandList.update((prev) => [...prev, newCommand, response]);
      } else {
        commandList.update((prev) => [...prev, newCommand]);
      }
      console.log($commandList);
    }
    input.value = '';
  };

  const handleTab = () => {
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

  const handleUp = () => {
    if (activeInputIndex === $inputCommands.length) {
      tempValue = input.value;
    }
    if (activeInputIndex !== 0) {
      activeInputIndex--;
    }
    input.value = $inputCommands[activeInputIndex];
  };

  const handleDown = () => {
    if (activeInputIndex < $inputCommands.length - 1) {
      activeInputIndex++;
      input.value = $inputCommands[activeInputIndex];
    } else {
      if ($inputCommands.length - 1 === activeInputIndex) activeInputIndex++;
      input.value = tempValue;
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') {
      activeSuggestion = 0;
      suggestedInputs = [];
      if (!$inputCommands.length) return;
      if (e.key === 'ArrowUp') {
        handleUp();
      } else if (e.key === 'ArrowDown') {
        handleDown();
      }
    } else {
      e.preventDefault();
      handleTab();
    }
  };
</script>

<form on:submit|preventDefault={handleCommand}>
  <i class="fa-solid fa-chevron-right" />
  <input
    type="text"
    bind:this={input}
    spellcheck="false"
    autocomplete="false"
    on:keydown={handleKeyDown}
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
