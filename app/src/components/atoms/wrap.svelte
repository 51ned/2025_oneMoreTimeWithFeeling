<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface WrapProps {
    children: Snippet,
    customStyle?: string,
    tag: 'div' | 'footer' | 'header' | 'main'
  }

  let { children, customStyle, tag }: WrapProps = $props()
</script>


<svelte:element
  class={cn('wrap', customStyle)}
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
