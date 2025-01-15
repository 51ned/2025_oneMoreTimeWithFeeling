<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { GTM } from 'utils/.'
  import 'styles/index.css'

  const gtmId = import.meta.env.VITE_GTM_ID

  interface LayoutProps {
    children: Snippet
  }

  let { children }: LayoutProps = $props()
</script>


{#if process.env.NODE_ENV === 'production'}
  <GTM />
{/if}

{@render children()}