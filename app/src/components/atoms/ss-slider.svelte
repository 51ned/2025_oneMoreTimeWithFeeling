<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface ScrollsnapSlider {
    children: Snippet,
    dir: 'rtl' | 'ltr'
  }

  let { children, dir }: ScrollsnapSlider = $props()
</script>


<section class={cn('ss-slider', dir)}>
  {@render children()}
</section>


<style>
  .ss-slider {
    display: flex;
    gap: var(--indent-16-24);
    overflow-x: auto;
    scroll-snap-align: center;
    scroll-snap-type: x mandatory;
  } 

  :global(.ss-slider > *) {
    min-width: calc(100% - var(--indent-16-24));
    scroll-snap-align: center;
  }

  .ss-slider::-webkit-scrollbar {
    display: none;
  }

  .ltr {
    direction: ltr;
    padding: 0 var(--indent-16-24) 0 var(--indent-32-48);
  }

  .rtl {
    direction: rtl;
    padding: 0 var(--indent-32-48) 0 var(--indent-16-24);
  }

  :global(.ss-slider.rtl > *) {
    text-align: left;
  }
</style>
