<script lang='ts'>
  import { Container, Wrap } from 'components/atoms'
</script>


<Wrap customStyle='navbar' tag='div'>
  <Container tag='div'>
    <p>Navbar</p>
  </Container>
</Wrap>


<style>
  :global(.navbar) {
    grid-row: navbar;
  }
</style>