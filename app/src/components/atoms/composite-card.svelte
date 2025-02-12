<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface CompositeCardProps {
    children: Snippet,
    id: string,
    isHidden: boolean,
    tag: keyof HTMLElementTagNameMap,
    variant: 'acc-card' | 'dialog' | 'tab-panel'
  }

  let {
    children,
    id,
    isHidden,
    tag,
    variant
  }: CompositeCardProps = $props()

  let otherAttrs: {[key: string]: boolean | string | undefined} = {}

  switch (variant) {
    case 'acc-card':
      otherAttrs['hidden'] = !isHidden
      break
    case 'tab-panel':
      otherAttrs['hidden'] = !isHidden
      otherAttrs['role'] = 'tabpanel'
      break
    case 'dialog':
      otherAttrs['open'] = isHidden
      break
  }
</script>


<svelte:element
  class={variant}
  id={id}
  this={tag}
  {...otherAttrs}
>
	{@render children()}
</svelte:element>
