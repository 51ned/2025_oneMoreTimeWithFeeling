<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface HeadingProps {
    children: Snippet,
    lvl: 1 | 2 | 3
  }

  let { children, lvl = 1 }: HeadingProps = $props()

  const headingClass = cn('h', {
    'h-lvl-1': lvl === 1,
    'h-lvl-2': lvl === 2,
    'h-lvl-3': lvl === 3
  })
</script>


<svelte:element
  class={headingClass}
  this={`h${lvl}`}
>
	{@render children()}
</svelte:element>


<style>
  .h {
    font-weight: var(--heading-fw);
    line-height: var(--heading-lh);
    margin: 0 0 var(--indent-16-20) 0;
  }

  .h-lvl-1 { font-size: var(--h1-fs); }
  .h-lvl-2 { font-size: var(--h2-fs); }
  .h-lvl-3 { font-size: var(--h3-fs); }
</style>
