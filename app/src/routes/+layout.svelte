<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { H } from 'components/atoms'
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

<H lvl={1}>Heading lvl # 1</H>
<H lvl={2}>Heading lvl # 2</H>
<H lvl={3}>Heading lvl # 3</H>

{@render children()}