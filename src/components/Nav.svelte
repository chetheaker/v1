<script lang="ts">
  const handleTerminal = () => {
    console.log('terminal');
  };
</script>

<nav>
  <div class="left">
    <div class="logo" />
  </div>
  <div class="right">
    <button class="terminal" on:click={handleTerminal}>
      <i class="fa-solid fa-circle-chevron-left" />
      <span class="terminal-text">Terminal</span>
    </button>
  </div>
</nav>

<style>
  nav {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12.5px);
    -webkit-backdrop-filter: blur(12.5px);
    position: sticky;
    top: 0;
  }

  .right {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .terminal {
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 1rem 0 0 1rem;
    font-size: 1.25rem;
    font-family: 'Mona Sans';
    display: flex;
    align-items: center;
    width: 50px;
    gap: 1rem;
    transition: width 500ms, gap 500ms;
  }

  .terminal-text {
    opacity: 0;
    transition: opacity 500ms ease;
  }

  .terminal:hover {
    width: 150px;
  }

  .terminal:hover > .terminal-text {
    opacity: 1;
  }
</style>
