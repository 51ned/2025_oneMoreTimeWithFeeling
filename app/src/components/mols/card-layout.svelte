<!-- think about debounce -->


<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { CardList, ScrollsnapSlider } from 'components/atoms'
  import { BREAKPOINTS } from '$lib/breakpoints'

  interface CardLayoutProps {
    children: Snippet,
    sliderDir?: 'ltr' | 'rtl'
  }

  let windowInnerWidth: number = $state(0)
  let isMobile = $state(false)

  $effect(() => {
		isMobile = BREAKPOINTS.M > windowInnerWidth
	})
  
  let {
    children,
    sliderDir = 'ltr'
  }: CardLayoutProps = $props()
</script>


<svelte:window bind:innerWidth={windowInnerWidth} />


{#if isMobile}
  <ScrollsnapSlider dir={sliderDir}>
    {@render children()}
  </ScrollsnapSlider>
{:else}
  <CardList>
    {@render children()}
  </CardList>
{/if}
