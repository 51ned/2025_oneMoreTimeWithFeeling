<script lang='ts'>
  import cn from 'classnames'
  import type { Snippet } from 'svelte'

  interface ButtonProps {
    children: Snippet,
    customClass?: string
  }

  let {
    children,
    customClass
  }: ButtonProps = $props()
</script>


<button>
  {@render children()}
</button>


<style>
  /* ... */
</style>