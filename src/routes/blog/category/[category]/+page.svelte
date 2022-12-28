<script lang="ts">
	import type { Post } from '$lib/interfaces';
	export let data: Post;
</script>

<div class="md:col-span-3 col-span-4">
	{#each data.posts as post}
		<div class="flex flex-col mb-4 justify-between p-4 leading-normal">
			<a href={post.path}>
				<h1 class="mb-2 text-4xl font-bold tracking-tight hover:text-gray-700">
					{post.meta.title}
				</h1>
			</a>
			<p>{post.meta.description}</p>
			<p class="text-gray-700 text-sm">{post.meta.date}</p>
			<div class="flex gap-2 items-center">
				{#each post.meta.categories as category}
					<a
						href="/blog/category/{category}"
						class="items-center p-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
						>{category}
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
