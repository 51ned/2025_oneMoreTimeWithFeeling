<script lang='ts'>
  import type { Snippet } from 'svelte'

  interface LinkProps {
    anchor?: boolean,
    children: Snippet,
    customClass?: string,
    external?: boolean,
    title: string,
    url: string
  }

  let {
    anchor,
    children,
    customClass,
    external,
    title,
    url
  }: LinkProps = $props()

  let otherAttrs: {[key: string]: boolean | string | undefined} = {}

  if (anchor) {
    otherAttrs.name = url
  } else {
    otherAttrs.href = url
  }

  if (customClass) {
    otherAttrs.class = customClass;
  }

  if (external) {
    otherAttrs.rel = 'nofollow'
    otherAttrs.target = '_blank'
  }
</script>


<a title={title} {...otherAttrs}>
  {@render children()}
</a>


<style>
  a {
    border-bottom: 1px solid;
    color: inherit;
    text-decoration: none;
  }
</style>
