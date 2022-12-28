import type { Posts } from '$lib/interfaces';
import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
    const response = await fetch(`/api/posts`)
    const posts = await response.json()
    const allCategories = Array.from(new Set(posts.flatMap((p: Posts) => p.meta.categories)))
    return { allCategories }
}) satisfies LayoutLoad;