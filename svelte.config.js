
import preprocess from 'svelte-preprocess';

const config = {
	// https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess({
		scss: {
			prependData: "@import './scss/global.scss';@import './scss/mixins.scss';"
		}
	})
};

export default config;
