<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  export let project;
  export let end: false | 'start' | 'finish' = false;

  const dispatch = createEventDispatcher();

  const dispatchScroll = (direction: string) => {
    dispatch('scroll', {
      direction
    });
  };
</script>

<div class="container">
  <h1>{project.name}</h1>
  <h3 class="heading">{project.heading}</h3>
  <div class="middle">
    {#if end !== 'start'}
      <button class="btn-left" on:click={() => dispatchScroll('left')}
        ><i class="fa-solid fa-angles-left" /></button
      >
    {/if}
    <div class="project" id="tourify">
      <div class="left">
        <div class="content">
          {#each project.content as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
        <div class="skills">
          {#each project.skills as skill, i}
            {#if i !== 0}
              <i class="fa-solid fa-circle" />
            {/if}
            <p>{skill}</p>
          {/each}
        </div>
      </div>
      <div class="image">
        <img src={project.src} alt={project.alt} />
      </div>
    </div>
    {#if end !== 'finish'}
      <button class="btn-left" on:click={() => dispatchScroll('right')}
        ><i class="fa-solid fa-angles-right" /></button
      >
    {/if}
  </div>
  <div class="buttons">
    <a href={project.github} target="_blank" rel="noreferrer">
      <i class="fa-brands fa-github" />
    </a>
    <a href={project.website} target="_blank" rel="noreferrer">
      <i class="fa-solid fa-link" />
    </a>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 100%;
    gap: 3rem;
    scroll-snap-align: center;
  }

  h1 {
    color: #ccd6f6;
  }

  .middle {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .btn-left {
    color: white;
    background-color: transparent;
  }

  .btn-left i {
    font-size: 2.5rem;
  }

  .project {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aspect-ratio: 1.6;
  }

  .content {
    padding: 1rem;
    background-color: #161b22;
    border-radius: 1rem;
    width: 90%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 90%;
  }

  .skills i {
    font-size: 0.5rem;
  }

  .image {
    width: 50%;
    aspect-ratio: 1.6;
    border-radius: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0 10%;
  }

  .buttons a {
    color: white;
  }

  .buttons a:hover {
    color: #ccd6f6;
  }

  .buttons i {
    font-size: 1.5rem;
  }
</style>
