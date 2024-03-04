import { error, redirect } from '@sveltejs/kit';

export function slugFromPath(path: string) {
	return path.replace('/content/blogs/', '').replace('.md', '');
}

export async function getBlogs() {
	const modules = import.meta.glob(`/content/blogs/**/*.md`);
	const blogs: { path: string; metadata: { title: string; description: string; date: string } }[] =
		[];

	let match: { path?: string; resolver?: any } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		match = { path, resolver: resolver as unknown as any };
		const blog = await match?.resolver?.();

		blogs.push({
			path: slugFromPath(path),
			metadata: blog.metadata
		});
	}

	return blogs;
}

export async function getBlog(slug: string): Promise<any> {
	const modules = import.meta.glob(`/content/blogs/**/*.md`);

	let match: { path?: string; resolver?: any } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === slug) {
			match = { path, resolver: resolver as unknown as any };
			break;
		}
	}

	const blog = await match?.resolver?.();

	if (!blog || !blog.metadata) {
		error(404);
	}

	return {
		component: blog.default,
		metadata: blog.metadata
	};
}
