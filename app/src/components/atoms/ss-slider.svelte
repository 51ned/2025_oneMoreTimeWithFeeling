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
    /* padding: 0 var(--indent-16-24); */
    scroll-padding: var(--indent-16-24);
    scroll-snap-type: x proximity;
  } 

  .ss-slider::-webkit-scrollbar {
    display: none;
  }

  .ltr {
    direction: ltr;
  }

  .rtl {
    direction: rtl;
    
  }

  :global(.ss-slider > *) {
    min-width: calc(100% - 36px);
    scroll-snap-align: center;
  }

  :global(.ss-slider.rtl > *) {
    direction: ltr;
  }
</style>
