<script>
  let visible = false;

  export let element;
  export let delay = 0;
  export let link = '';
  export let isIndent;

  setTimeout(() => (visible = true), delay + 200);

  function typewriter(node, { speed = 10 }) {
    const text = node.textContent;
    const duration = text.length / (speed * 0.01);
    console.log(element, duration);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

{#if visible}
  {#if element === 'p'}
    <p in:typewriter class={`${isIndent && 'indent'}`}><slot /></p>
  {:else if element === 'a'}
    <a href={link} target="_blank" rel="noreferrer" in:typewriter class="link"
      ><slot /></a
    >
  {/if}
{/if}

<style>
  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }

  .indent {
    padding-left: 2rem;
  }
</style>
