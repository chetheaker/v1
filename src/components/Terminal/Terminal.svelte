<script lang="ts">
  import TerminalContainer from './TerminalContainer.svelte';
  import TerminalInput from './TerminalInput.svelte';
  import TopBar from './TopBar.svelte';
  import { onMount } from 'svelte';
  let mounted = false;

  let keys = {};
  let input;

  onMount(() => (mounted = true));

  const handleKeyDown = (e: KeyboardEvent) => {
    keys[e.key] = true;
    if (keys.Control && keys['`']) {
      window.location.hash = 'terminal';
      input.focus();
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    delete keys[e.key];
  };

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);
</script>

{#key mounted}
  <section id="terminal">
    <TopBar />
    <div class="terminal">
      <TerminalContainer />
      <TerminalInput bind:input />
    </div>
  </section>
{/key}

<style>
  section {
    width: 80%;
    height: 80%;
    background-color: #161b22;
    margin: 10% auto;
    border: solid 1px #404040;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(95, 19, 18, 0.5);
    -moz-box-shadow: 0px 0px 5px 2px rgba(95, 19, 18, 0.5);
    box-shadow: 0px 0px 5px 2px rgba(95, 19, 18, 0.5);
    border-radius: 10px;
    font-family: 'SF Mono', monospace;
    overflow-y: scroll;
    scroll-snap-align: center;
  }

  .terminal {
    padding: 1rem;
  }
</style>
