import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sequence([
		vitePreprocess(),
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig),
		preprocessMeltUI()
	]),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			'$lib/*': 'src/lib/*',
			'@/*': 'src/*',
			$icons: 'src/components/icons',
			'$icons/*': 'src/components/icons/*'
		}
	}
};
export default config;
