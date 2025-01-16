<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface ScrollsnapSlider {
    children: Snippet,
    dir: 'rtl' | 'ltr'
  }

  let { children, dir = 'rtl' }: ScrollsnapSlider = $props()
</script>

<section class={cn('ss-slider', { 'ltr': dir === 'ltr' })}>
  {@render children()}
</section>

<style>
  .ss-slider {
    display: flex;
    gap: var(--indent-16-24);
    overflow-x: auto;
    padding: var(--indent-16-24);
    scroll-snap-type: x mandatory;
  }

  :global(.ss-slider > *) {
    min-width: calc(100% - 36px);
    scroll-snap-align: start;
  }

  :global(.ltr, .ltr > *) {
    transform: rotateY(180deg);
  }

  /* .ss-slider::-webkit-scrollbar {
    display: none;
  } */
</style>
