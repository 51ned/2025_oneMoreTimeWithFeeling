<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface ContainerProps {
    children: Snippet,
    customClass?: string,
    tag: keyof HTMLElementTagNameMap
  }

  let { children, customClass, tag }: ContainerProps = $props()
</script>


<svelte:element
  class={cn('container', customClass)}
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
