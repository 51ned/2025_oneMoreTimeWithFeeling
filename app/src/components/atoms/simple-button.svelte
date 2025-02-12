<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface SimpleButtonProps {
    children: Snippet,
    handleClick: () => void,
    id: string,
    type: 'button' | 'reset' | 'submit',
    variant: 'regular' | 'stripped'
  }

  let {
    children,
    handleClick,
    id,
    type,
    variant
  }: SimpleButtonProps = $props()
</script>


<button
  class={cn(variant)}
  id={id}
  onclick={handleClick}
  type={type}
>
  {@render children()}
</button>


<style>
  .regular, .stripped {
    border: none;
    font-family: inherit;
    padding: 20px; /* !!! */
  }

  .regular {
    background-color: black; /* !!! */
    color: white; /* !!! */
  }

  .stripped {
    background-color: transparent;
  }
</style>
