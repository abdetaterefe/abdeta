import type { LayoutLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    return {
        pathName: params
    };
}) satisfies LayoutLoad;