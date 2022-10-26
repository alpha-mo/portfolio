import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$styles: "src/styles",
			$ui: "src/lib/ui",
			$components: "src/lib/components",
			$stores: "src/stores",
			$data: "src/lib/data",
			$utils: "src/utils"
		}
	}
};

export default config;
