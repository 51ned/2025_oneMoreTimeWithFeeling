<script lang='ts'>
  import { Container, Wrap } from 'components/atoms'
</script>


<Wrap tag='footer'>
  <Container tag='div'>
    <p>Footer</p>
  </Container>
</Wrap>


<style>
  :global(footer) {
    grid-row: footer;
  }
</style>