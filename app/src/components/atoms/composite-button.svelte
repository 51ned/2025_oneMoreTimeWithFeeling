<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface SimpleButtonProps {
    children: Snippet,
    handleClick: () => void,
    id: string,
    variant: string,
    wrapTag?: keyof HTMLElementTagNameMap
  }

  let {
    children,
    handleClick,
    id,
    variant,
    wrapTag
  }: SimpleButtonProps = $props()
</script>


<svelte:element this={wrapTag}>
  <button
    class={cn(variant)}
    id={id}
    onclick={handleClick}
    type='button'
  >
    {@render children()}
  </button>
</svelte:element>
