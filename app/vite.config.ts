import browserslist from 'browserslist'
import path from 'path'

import { defineConfig } from 'vite'
import type { ConfigEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { sveltekit } from '@sveltejs/kit/vite'

import { browserslistToTargets } from 'lightningcss'


export default ({ mode }: ConfigEnv) => {
  const isProd = mode === 'production'

  const genDevName = (name: string, filename: string, css: string) => {
    const file = path.basename(filename, path.extname(filename))
    const hash = Buffer.from(css).toString('base64').substring(0, 2)
    
    return `${file}__${name}__${hash}`.replace(/\.module/g, '')
  }

  return defineConfig({
    build: {
      cssMinify: 'lightningcss'
    },

    css: {
      lightningcss: {
        drafts: {
          customMedia: true
        },
        targets: browserslistToTargets(browserslist('last 2 versions, > 0.25%, not dead'))
      },
      modules: {
        generateScopedName: isProd
          ? '[hash:base64:2]'
          : genDevName
      }
    },

    plugins: [
      sveltekit(),
      tsconfigPaths()
    ]

    // server: {
    //   headers: {
    //     'accept-ch': 'sec-ch-prefers-color-scheme, sec-ch-viewport-width'
    //   }
    // }
  })
}
