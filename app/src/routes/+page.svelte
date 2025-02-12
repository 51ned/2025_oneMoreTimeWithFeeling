<script lang='ts'>
  import { SimpleButton } from 'components/atoms'
  import { CardLayout } from 'components/mols'
</script>


<CardLayout dir='ltr'>
  <div style='background-color: #ff0000'>Card # 1</div>
  <div style='background-color: #ff0000'>Card # 2</div>
  <div style='background-color: #2476ff'>Card # 3</div>
  <div style='background-color: #4cb2ff'>Card # 4</div>
</CardLayout>

<CardLayout dir='rtl'>
  <div style='background-color: #dd3730'>Card # 5</div>
  <div style='background-color: #f14c4c'>Card # 6</div>
  <div style='background-color: #ff8100'>Card # 7</div>
  <div style='background-color: #ffcd00'>Card # 8</div>
</CardLayout>

<SimpleButton
  handleClick={() => {}}
  id='button1'
  type='button'
  variant='regular'
>
  Regular button
</SimpleButton>

<SimpleButton
  handleClick={() => {}}
  id='button2'
  type='button'
  variant='stripped'
>
  Stripped button
</SimpleButton>

