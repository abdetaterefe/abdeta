<script lang="ts">
	import { formatDate } from '$lib/utils/index.js';

	export let data;

	$: doc = data.blogs;
</script>

<svelte:head>
	<title>Blogs</title>
	<meta property="og:title" content="Blogs" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="Abdeta Terefe's blogs"
	/>
</svelte:head>

<div class="mx-auto w-full max-w-screen-lg px-4 py-6">
	{#each doc as blog}
		<div class="mb-4 basis-1 last:mb-0">
			<a href="/blog/{blog.path}">
				<div
					class="h-full rounded-2xl bg-slate-200/50 from-slate-900 via-slate-700 to-white p-[1px] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r dark:bg-gray-900"
				>
					<div
						class="flex h-full w-full flex-col rounded-[1rem] bg-slate-300 p-4 text-gray-900 opacity-90 dark:bg-slate-800 dark:text-white"
					>
						<div class="flex-auto">
							<div class="flex justify-between pb-4 text-xs">
								<p>{formatDate(blog.metadata.date)}</p>
							</div>

							<p class="pb-4 text-lg font-bold">{blog.metadata.title}</p>
							<!-- <div class="flex flex-wrap">
								{#each blog.metadata.tags as tag}
									<a href={`/tags/${tag}`}>
										<span
											class="mb-2 mr-2 rounded-xl bg-slate-600 px-3 py-1 text-xs font-bold uppercase text-white hover:bg-slate-500"
										>
											#{tag}
										</span>
									</a>
								{/each}
							</div> -->
							<p class="line-clamp-6 pt-4">{blog.metadata.excerpt}</p>
						</div>
						<p class="pt-4 underline">read more →</p>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>
