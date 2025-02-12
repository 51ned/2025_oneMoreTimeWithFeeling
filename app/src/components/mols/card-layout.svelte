<!-- think about debounce -->


<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { CardList, ScrollsnapSlider } from 'components/atoms'
  import { BREAKPOINTS } from '$lib/breakpoints'

  interface CardLayoutProps {
    children: Snippet,
    dir: 'ltr' | 'rtl'
  }

  let windowInnerWidth = $state(0)
  let isMobile = $state()

  $effect(() => {
		isMobile = windowInnerWidth < BREAKPOINTS.M
	})
  
  let {
    children,
    dir = 'ltr'
  }: CardLayoutProps = $props()
</script>


<svelte:window bind:innerWidth={windowInnerWidth} />


{#if isMobile}
  <ScrollsnapSlider dir={dir}>
    {@render children()}
  </ScrollsnapSlider>
{:else}
  <CardList>
    {@render children()}
  </CardList>
{/if}
