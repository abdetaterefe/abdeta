import type { PageLoad } from '../$types';

export const load = (async ({ params }) => {
	const post = await import(`../../../../markdown/posts/${params.slug}.md`);
	const { title, description, date, categories } = post.metadata;
	const content = post.default.render().html;
	return { title, description, date, categories, content };
}) satisfies PageLoad;
