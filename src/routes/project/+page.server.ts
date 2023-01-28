import type { PageServerLoad } from './$types';
import { Octokit } from "@octokit/core";

export const load = (async () => {
    const octokit = new Octokit({
        auth: import.meta.env.VITE_GITHUB_API
    })
    const repos = await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
        username: 'abdetaterefe'
    })
    return { repos }
}) satisfies PageServerLoad;