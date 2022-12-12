<script lang="ts">
  import Project from './Project.svelte';
  import { tourify, adopet, findle } from '../utils/projects';

  let container: HTMLElement;

  const scroll = (e) => {
    if (e.detail.direction === 'left') {
      container.scrollLeft -= container.offsetWidth;
    } else {
      container.scrollLeft += container.offsetWidth;
    }
  };
</script>

<section id="experience" bind:this={container}>
  <Project project={tourify} on:scroll={scroll} end="start" />
  <Project project={adopet} on:scroll={scroll} />
  <Project project={findle} on:scroll={scroll} end="finish" />
</section>

<style>
  section {
    width: 100%;
    height: 90vh;
    margin: auto;
    border-bottom: solid 1px #404040;
    scroll-snap-align: center;
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
</style>
