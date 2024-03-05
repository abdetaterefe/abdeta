import { getBlog, getBlogs } from '$lib/utils';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const blogs = await getBlogs();
	return { blogs };
}) satisfies PageLoad;
