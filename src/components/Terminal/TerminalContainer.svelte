<script lang="ts">
  import { commandList } from '../../stores/commandList';
</script>

<div class="terminal-command-list">
  {#each $commandList as command}
    <div class="command">
      {#if command.isInput}
        <i class="fa-solid fa-chevron-right" />
      {/if}
      <p>{command.content}</p>
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
</style>
