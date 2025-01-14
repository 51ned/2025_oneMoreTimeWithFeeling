import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'


export default () => {
  return defineConfig({
    build: {
      cssMinify: 'lightningcss',
      outDir: 'public'
    },

    css: {
      lightningcss: {
        drafts: {
          customMedia: true
        },
        targets: browserslistToTargets(browserslist('last 2 versions, > 0.25%, not dead'))
      }
    },

    plugins: [
      sveltekit()
    ]

    // server: {
    //   headers: {
    //     'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width'
    //   }
    // }
  })
}
