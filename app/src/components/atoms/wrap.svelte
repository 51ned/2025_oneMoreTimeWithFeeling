<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface WrapProps {
    children: Snippet,
    customClass?: string,
    tag: keyof HTMLElementTagNameMap
  }

  let { children, customClass, tag }: WrapProps = $props()
</script>


<svelte:element
  class={cn('wrap', customClass)}
  this={tag}
>
	{@render children()}
</svelte:element>


<style>
  .wrap {
    display: grid;
    grid-column: fullbleed;
    grid-template-columns: subgrid;
  }
</style>
