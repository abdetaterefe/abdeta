<script lang="ts">
	import CategoryButton from '$lib/components/category-button.svelte';
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
		<div
			class="flex rounded shadow-md dark:shadow-zinc-600 flex-col mb-4 justify-between p-4 leading-normal"
		>
			<a href="/{post.path}">
				<h1
					class="mb-2 text-4xl font-bold tracking-tight text-myBlue-900 hover:text-myBlue-700 dark:text-myBlue-100 hover:dark:text-myBlue-300"
				>
					{post.meta.title}
				</h1>
			</a>
			<p class="dark:text-myBlue-200 text-myBlue-800">{post.meta.description}</p>
			<p class="dark:text-myBlue-200 text-myBlue-800 text-sm">{post.meta.date}</p>
			<div class="flex items-center">
				{#each post.meta.categories as category}
					<CategoryButton {category} />
				{/each}
			</div>
		</div>
	{/each}
</div>
