<script lang="ts">
  import { commandList } from '../../stores/commandList';
  import Typing from '../Animations/Typing.svelte';
</script>

<div class="terminal-command-list">
  {#each $commandList as command}
    <div class="command">
      {#if command.isInput}
        <i class="fa-solid fa-chevron-right" />
      {:else if !command.isValid}
        <p><span class="error">Terminal:</span> Command not found:</p>
      {/if}
      {#if !command.isInput && command.isValid}
        <Typing element="p" delay={command.delay} isIndent={command.isIndent}>
          {command.content}
        </Typing>
      {:else}
        <p>{command.content}</p>
      {/if}
      {#if command.link}
        <Typing
          element="a"
          link={command.link}
          delay={800}
          isIndent={command.isIndent}
        >
          {command.link}
        </Typing>
      {/if}
    </div>
  {/each}
</div>

<style>
  .terminal-command-list {
    overflow-x: hidden;
  }
  .command {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
  }

  .error {
    color: rgb(246, 65, 65);
  }

  i {
    font-size: 0.8rem;
  }
</style>
