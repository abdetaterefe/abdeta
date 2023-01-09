<script lang="ts">
	import type { Post } from '$lib/interfaces';
	export let data: Post;
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
	<meta
		property="og:image"
		content="https://avatars.githubusercontent.com/u/59355292?s=400&u=9e89eb1ae60b57ed7c0ef0de4858640ae75ce22d&v=4"
	/>
	<meta
		name="twitter:image"
		content="https://avatars.githubusercontent.com/u/59355292?s=400&u=9e89eb1ae60b57ed7c0ef0de4858640ae75ce22d&v=4"
	/>
</svelte:head>

<div class="md:col-span-3 col-span-4">
	{#each data.posts as post}
		<div class="flex rounded shadow-md flex-col mb-4 justify-between p-4 leading-normal">
			<a href="/{post.path}">
				<h1 class="capitalize mb-2 text-4xl font-bold tracking-tight text-myBlue-900 hover:text-myBlue-700">
					{post.meta.title}
				</h1>
			</a>
			<p class="text-myBlue-800">{post.meta.description}</p>
			<p class="text-myBlue-800 text-sm">{post.meta.date}</p>
			<div class="flex gap-2 items-center">
				{#each post.meta.categories as category}
					<a
						href="/blog/category/{category}"
						class="rounded text-myBlue-800 items-center py-2 px-2 text-xs font-bold bg-myBlue-400 hover:bg-myBlue-300"
						>{category}
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
