<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { Footer, Main, Navbar } from 'ui/.'
  import { GTM } from 'utils/.'
  import 'styles/index.css'

  interface LayoutProps {
    children: Snippet
  }

  let { children }: LayoutProps = $props()
</script>


{#if process.env.NODE_ENV === 'production'}
  <GTM />
{/if}

<Navbar />

<Main>
  {@render children()}
</Main>

<Footer />