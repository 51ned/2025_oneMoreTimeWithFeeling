<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface InteractiveCardProps {
    children: Snippet,
    controlledID: string,
    controllingID: string,
    customClass: 'acc-card' | 'dialog' | 'tab-panel',
    isHidden: boolean,
    tag: keyof HTMLElementTagNameMap
  }

  let {
    children,
    controlledID,
    controllingID,
    customClass,
    isHidden,
    tag
  }: InteractiveCardProps = $props()

  let otherAttrs: {[key: string]: boolean | string | undefined} = {}

  switch (customClass) {
    case ('acc-card'):
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
  aria-labelledby={controllingID}
  class={customClass}
  id={controlledID}
  this={tag}
  {...otherAttrs}
>
	{@render children()}
</svelte:element>
