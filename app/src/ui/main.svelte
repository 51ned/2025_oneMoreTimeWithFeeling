<script lang='ts'>
  import { Container, Wrap } from 'components/atoms'
  import type { Snippet } from 'svelte'

  interface MainProps {
    children: Snippet
  }

  let { children }: MainProps = $props()
</script>


<Wrap tag='main'>
  <Container tag='div'>
    {@render children()}
  </Container>
</Wrap>


<style>
  :global(main) {
    grid-row: main;
  }
</style>
