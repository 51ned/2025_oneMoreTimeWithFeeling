<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  import {CompositeButton, CompositeCard} from 'components/atoms'

  interface AccordionProps {
    accContainerTag?: keyof HTMLElementTagNameMap,
    data: string[],
    accWrapTag?: keyof HTMLElementTagNameMap,
    buttonWrapTag?: keyof HTMLElementTagNameMap,
    cardWrapTag?: keyof HTMLElementTagNameMap
  }

  let {
    accContainerTag,
    data,
    accWrapTag,
    buttonWrapTag,
    cardWrapTag
  }: AccordionProps = $props()

  let accContainerOpts: {[key: string]: string} = {}
  let accWrapOpts: {[key: string]: string} = {}
  
  accContainerTag && (accContainerOpts['className'] = 'container')
  accWrapTag && (accWrapOpts['className'] = 'wrap')

  let activeIndex: number | null = $state(null);

  function handleClick(index: number) {
    activeIndex = index === activeIndex ? null : index;
  }
</script>


{#snippet AccordionData(data)}
  {#each data as item, index}
    <svelte:element this={accWrapTag} {...accWrapOpts}>
      <CompositeButton
        handleClick={() => handleClick(index)}
        id={item.buttonID}
        variant='accordion-button'
        wrapTag={item.buttonWrapTag}
      >
        { item.buttonText }
        { item.buttonIcon}
      </CompositeButton>
      
      <CompositeCard
        id={item.cardID}
        isHidden={index === activeIndex}
        tag={item.cardWrapTag}
        variant='acc-card'
      >
        { item.cardText }
      </CompositeCard>
    </svelte:element>
  {/each}
{/snippet}


<svelte:element
  this={accWrapTag}
  {...accWrapOpts}
>
  {@render AccordionData(data)}  
</svelte:element>


<style>
  /* ... */
</style>
