import type { PageServerLoad } from './$types';

export const load = (async () => {
	const projects = [{ title: 'Etdate Svelte', url: 'g' }];

	return { projects };
}) satisfies PageServerLoad;
