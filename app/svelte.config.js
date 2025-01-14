import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-vercel'


/** @type {import('@sveltejs/kit').Config} */


const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'components/*': 'src/components/*',
			'routes/*': 'src/routes/*',
			'static/*': 'static/*',
      'stores/*': 'src/stores/*',
      'styles/*': 'src/styles/*',
			'ui/*': 'src/ui/*',
      'utils/*': 'src/utils/*'
		}
	},
	preprocess: vitePreprocess()
}


export default config
