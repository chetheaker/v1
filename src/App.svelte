<script lang="ts">
  import About from './components/About.svelte';
  import Contact from './components/Contact.svelte';
  import Experience from './components/Experience.svelte';
  import Footer from './components/Footer.svelte';
  import Nav from './components/Nav.svelte';
  import Terminal from './components/Terminal/Terminal.svelte';
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/2611249795.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<Nav />
<Terminal />
<About />
<Experience />
<div>
  <Contact />
  <Footer />
</div>

<style>
  div {
    scroll-snap-align: center;
  }
</style>
