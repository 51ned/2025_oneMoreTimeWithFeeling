<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface SimpleButtonProps {
    children: Snippet,
    handleClick: () => void,
    id: string,
    style: 'regular' | 'stripped',
    type: 'button' | 'reset' | 'submit'
  }

  let {
    children,
    handleClick,
    id,
    style,
    type
  }: SimpleButtonProps = $props()
</script>


<button
  class={cn(style)}
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
