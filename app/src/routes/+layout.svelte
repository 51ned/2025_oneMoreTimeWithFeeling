<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { GTM } from 'utils/.'

  const gtmId = import.meta.env.VITE_GTM_ID

  interface LayoutProps {
    children: Snippet
  }

  let { children }: LayoutProps = $props()
</script>


<GTM />

{@render children() }