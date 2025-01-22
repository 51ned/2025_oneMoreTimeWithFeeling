<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface CardListProps {
    children: Snippet
  }

  let { children }: CardListProps = $props()
</script>


<div class='cardlist'>
  {@render children()}
</div>


<style>
  .cardlist {
    display: grid;
    gap: var(--indent-16-24);
    grid-auto-rows: auto 1fr;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>
