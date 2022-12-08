<script lang="ts">
  import { commandList } from '../../stores/commandList';
</script>

<div class="terminal-command-list">
  {#each $commandList as command}
    <div class="command">
      {#if command.isInput}
        <i class="fa-solid fa-chevron-right" />
      {:else if !command.isValid}
        <p><span class="error">Terminal:</span> Command not found:</p>
      {/if}
      <p>{command.content}</p>
      {#if command.link}
        <a href={command.link} target="_blank" rel="noreferrer"
          >{command.link}</a
        >
      {/if}
    </div>
  {/each}
</div>

<style>
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

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
