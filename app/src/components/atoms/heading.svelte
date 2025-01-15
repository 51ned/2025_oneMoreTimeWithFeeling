<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface HeadingProps {
    children: Snippet,
    lvl: 1 | 2 | 3
  }

  let { children, lvl = 1 }: HeadingProps = $props()

  const headingClass = cn('heading', {
    'heading-level-1': lvl === 1,
    'heading-level-2': lvl === 2,
    'heading-level-3': lvl === 3
  })
</script>


<svelte:element
  class={headingClass}
  this={`h${lvl}`}
>
	{@render children()}
</svelte:element>


<style>
  .heading {
    font-weight: var(--heading-fw);
    line-height: var(--heading-lh);
    margin: 0 0 var(--indent-16-20) 0;
  }

  .heading-level-1 { font-size: var(--h1-fs); }
  .heading-level-2 { font-size: var(--h2-fs); }
  .heading-level-3 { font-size: var(--h3-fs); }
</style>
