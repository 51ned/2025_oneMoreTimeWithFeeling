<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface CardlistProps {
    children: Snippet
  }

  let { children }: CardlistProps = $props()
</script>


<section class='cardlist'>
  {@render children()}
</section>


<style>
  .cardlist {
    display: grid;
    gap: var(--indent-16-24);
    grid-auto-rows: auto 1fr;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>
