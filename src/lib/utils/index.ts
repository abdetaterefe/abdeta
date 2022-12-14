export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/markdown/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { metadata }: any = await resolver()
            const postPath = path.slice(15, -3)

            return {
                meta: metadata,
                path: "blog" + postPath,
            }
        })
    )
    return allPosts
}