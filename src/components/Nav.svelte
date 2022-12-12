<script lang="ts">
  let hamburger;
  let links;

  const handleHamburger = () => {
    hamburger.classList.toggle('is-active');
    links.classList.toggle('show-mobile-nav');
  };

  const closeBurgerMenu = () => {
    hamburger.classList.remove('is-active');
    links.classList.remove('show-mobile-nav');
  };
</script>

<nav>
  <div class="links" bind:this={links}>
    <a href="#about" on:click={closeBurgerMenu}><span>ABOUT</span></a>
    <a href="#experience" on:click={closeBurgerMenu}><span>EXPERIENCE</span></a>
    <a href="#contact" on:click={closeBurgerMenu}><span>CONTACT</span></a>
  </div>
  <button
    class="hamburger hamburger--slider"
    type="button"
    bind:this={hamburger}
    on:click={handleHamburger}
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </button>
  <a href="#terminal" class="terminal-link">
    <button class="terminal">
      <i class="fa-solid fa-circle-chevron-left" />
      <span class="terminal-text">Terminal</span>
    </button>
  </a>
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
    z-index: 999;
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
    width: 40%;
    margin-left: 10%;
    gap: 1rem;
  }

  .links a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  .links a:hover {
    color: #ccd6f6;
  }

  .links a::after {
    content: '';
    width: 0;
    height: 3px;
    position: absolute;
    transition: all 0.2s linear;
    background: #ccd6f6;
  }

  .links a:hover::after {
    width: 100%;
  }

  .links a::after {
    left: 0;
    bottom: 0;
    transition-delay: 0s;
  }

  .links a:hover::after {
    transition-delay: 0s;
  }
  .links a:hover span::after {
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

  .terminal-link {
    text-decoration: none;
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

  .hamburger {
    padding: 15px 15px;
    display: none;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -4px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }

  @media only screen and (max-width: 600px) {
    .links {
      flex-direction: column;
      position: absolute;
      background-color: white;
      height: 500px;
      width: 90%;
      margin: 0 5%;
      transform: translateY(10%) scale(0);
      transition: transform 300ms ease;
      border-radius: 2rem;
      gap: 0;
      justify-content: space-evenly;
    }

    .links a {
      color: black;
    }

    .hamburger {
      display: inline-block;
    }

    .terminal {
      border-radius: 1rem;
      width: 150px;
    }
    .terminal-link {
      margin-right: 3.5%;
    }
    .terminal-text {
      opacity: 1;
    }
  }
</style>
