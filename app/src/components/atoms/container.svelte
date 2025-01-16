<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface ContainerProps {
    children: Snippet,
    customStyle?: string,
    tag: string
  }

  let { children, customStyle, tag }: ContainerProps = $props()
</script>


<svelte:element
  class={cn('container', customStyle)}
  this={tag}
>
	{@render children()}
</svelte:element>


<style>
  .container {
    display: grid;
    grid-column: content;
    grid-template-columns: subgrid;
  }
</style>
