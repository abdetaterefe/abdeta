import type { PageLoad } from "../$types"

export const load = (async ({ params }) => {
    const post = await import(`../../../../markdown/posts/${params.slug}.svx`)
    const { title, description, date, categories, } = post.metadata
    const content = post.default
    return { title, description, date, categories, content }

}) satisfies PageLoad