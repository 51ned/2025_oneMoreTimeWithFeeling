<script lang='ts'>
  import type { Snippet } from 'svelte'

  import { Cardlist, H } from 'components/atoms'
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

<H lvl={1}>Heading lvl # 1</H>
<H lvl={2}>Heading lvl # 2</H>
<H lvl={3}>Heading lvl # 3</H>

<Cardlist>
  <div style='background-color: #ebe0ff'>"Card" # 1</div>
  <div style='background-color: #dac7ff'>"Card" # 2</div>
  <div style='background-color: #c7adff'>"Card" # 3</div>
</Cardlist>

{@render children()}