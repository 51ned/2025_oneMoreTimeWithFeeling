import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-node'


/** @type {import('@sveltejs/kit').Config} */


const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'routes/*': 'src/routes/*',
			'static/*': 'static/*',
      'stores/*': 'src/stores/*',
      'styles/*': 'src/styles/*',
      'views/*': 'src/views/*',
      'utils/*': 'src/utils/*'
		}
	},
	preprocess: vitePreprocess()
}


export default config
