<script lang="ts">
  const handleTerminal = () => {
    console.log('terminal');
  };
</script>

<nav>
  <div class="links">
    <a href="#about"><span>ABOUT</span></a>
    <a href="#skills"><span>SKILLS</span></a>
    <a href="#experience"><span>EXPERIENCE</span></a>
    <a href="#contact"><span>CONTACT</span></a>
  </div>
  <button class="terminal" on:click={handleTerminal}>
    <i class="fa-solid fa-circle-chevron-left" />
    <span class="terminal-text">Terminal</span>
  </button>
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

  button > span {
    color: #0e1117;
  }

  i {
    color: #0e1117;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 46.5%;
    margin-left: 3.5%;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  a:hover {
    color: #ccd6f6;
  }

  a::after {
    content: '';
    width: 0;
    height: 3px;
    position: absolute;
    transition: all 0.2s linear;
    background: #ccd6f6;
  }

  a:hover::after {
    width: 100%;
  }

  a::after {
    left: 0;
    bottom: 0;
    transition-delay: 0s;
  }

  a:hover::after {
    transition-delay: 0s;
  }
  a:hover span::after {
    transition-delay: 0.2s;
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
