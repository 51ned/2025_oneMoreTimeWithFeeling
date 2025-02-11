<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface ListProps {
    children: Snippet,
    customStyle?: string,
    dir: 'horizontal'| 'verical',
    type: 'ordered' | 'unmarked' | 'unordered'
  }

  let {
    children,
    customStyle,
    dir,
    type
  }: ListProps = $props()
</script>


<svelte:element
  class={cn(customStyle, dir, 'list', type)}
  this={type === 'ordered' ? 'ol' : 'ul'}
>
  {@render children()}
</svelte:element>


<!-- svelte-ignore css_unused_selector -->
<style>
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .horizontal, .verical {
    display: flex;
  }

  .horizontal {
    flex-direction: row;
    gap: var(--indent-16-24);
  }

  .verical {
    flex-direction: column;
    gap: var(--indent-16-24);
  }

  .ordered {
    counter-reset: num;
  }

  .ordered > li {
    padding-left: var(--indent-24-32);
    position: relative;
  }

  .ordered > li::after {
    content: counter(num) '.'; 
    counter-increment: num;
    left: 0;
    position: absolute;
    top: 0;
  }

  .unordered > li {
    padding-left: var(--indent-32-24);
    position: relative;
  }

  .unordered > li::after {
    background-color: var(--bg-black);
    border-radius: 50%;
    height: var(--base);
    content: '';
    left: 0;
    position: absolute;
    top: 50%;
    width: var(--base);
  }
</style>
