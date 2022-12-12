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
    {:else}
      <div class="placeholder" />
    {/if}
    <div class="project" id="tourify">
      <div class="left">
        <div class="content">
          {#each project.content as paragraph}
            <p>{paragraph}</p>
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
    {:else}
      <div class="placeholder" />
    {/if}
  </div>
  <div class="bottom">
    <div class="skills">
      {#each project.skills as skill, i}
        {#if i !== 0}
          <i class="fa-solid fa-circle" />
        {/if}
        <p>{skill}</p>
      {/each}
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

  .heading {
    width: 80%;
    text-align: center;
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
    width: 50px;
  }

  .btn-left i {
    font-size: 2.5rem;
  }

  .placeholder {
    width: 50px;
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
    justify-content: center;
    aspect-ratio: 1.6;
  }

  .content {
    padding: 1rem;
    background-color: #161b22;
    border-radius: 1rem;
    width: 90%;
    height: 100%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 0.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
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

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    gap: 2rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
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

  @media only screen and (max-width: 1100px) {
    .content {
      width: 95%;
      font-size: 0.9rem;
    }
    .bottom {
      flex-direction: column;
    }
    .skills {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 900px) {
    .image {
      display: none;
    }
    .left {
      width: 100%;
      aspect-ratio: unset;
      align-items: center;
    }
    .skills {
      gap: 0.2rem;
      margin-top: 0.5rem;
    }
  }

  @media only screen and (max-height: 850px) {
    .container {
      gap: 1.5rem;
    }
    .bottom {
      gap: 2rem;
    }
    h1 {
      font-size: 2rem;
    }

    .heading {
      font-size: 1rem;
    }

    .skills {
      font-size: 0.8rem;
    }
    .skills i {
      font-size: 0.3rem;
    }
  }

  @media only screen and (max-height: 700px) {
    .container {
      gap: 0.3rem;
    }
    .bottom {
      gap: 0.5rem;
    }
  }
</style>
