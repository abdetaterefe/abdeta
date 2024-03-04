import { getBlog } from '$lib/utils';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { component, metadata } = await getBlog(params.slug);
	return {
		component,
		metadata
	};
}) satisfies PageLoad;
