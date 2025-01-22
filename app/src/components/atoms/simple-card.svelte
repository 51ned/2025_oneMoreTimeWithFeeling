<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface SimpleCardProps {
    children: Snippet,
    customClass?: string,
    tag: keyof HTMLElementTagNameMap
  }

  let { children, customClass, tag }: SimpleCardProps = $props()
</script>


<svelte:element
  class={cn('card', customClass)}
  this={tag}
>
	{@render children()}
</svelte:element>


<style>
  .card {
    padding: var(--indent-16-24);
  }
</style>
