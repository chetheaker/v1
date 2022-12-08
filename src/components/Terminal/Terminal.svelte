<script lang="ts">
  import App from '../../App.svelte';
  import TerminalContainer from './TerminalContainer.svelte';
  import TerminalInput from './TerminalInput.svelte';
  import TopBar from './TopBar.svelte';
</script>

<section>
  <TopBar />
  <div class="terminal">
    <TerminalContainer />
    <TerminalInput />
  </div>
</section>

<style>
  section {
    margin-top: 3rem !important;
    width: 80%;
    height: 80%;
    background-color: #161b22;
    margin: auto;
    border: solid 1px #404040;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(95, 19, 18, 0.5);
    -moz-box-shadow: 0px 0px 5px 2px rgba(95, 19, 18, 0.5);
    box-shadow: 0px 0px 5px 2px rgba(95, 19, 18, 0.5);
    border-radius: 10px;
    font-family: 'SF Mono', monospace;
    overflow-y: scroll;
  }

  .terminal {
    padding: 1rem;
  }
</style>
