import { getBlog, getBlogs } from '$lib/utils';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const blogs = await getBlogs();
	console.log(blogs);
	return { blogs };
}) satisfies PageLoad;
