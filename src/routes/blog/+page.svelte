<script lang="ts">
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

<div class="mx-auto w-full min-w-0 max-w-4xl pt-8">
	<h1>
		<strong class="text-myBlue-800 dark:text-myBlue-300">Blogs</strong>
	</h1>
	<div class="md:col-span-3 col-span-4 mt-4">
		{#each doc as blog}
			<div
				class="flex rounded shadow-md dark:shadow-zinc-600 flex-col mb-4 justify-between p-4 leading-normal"
			>
				<a href="/blog/{blog.path}">
					<h1
						class="mb-2 text-4xl font-bold tracking-tight text-myBlue-900 hover:text-myBlue-700 dark:text-myBlue-100 hover:dark:text-myBlue-300"
					>
						{blog.metadata.title}
					</h1>
				</a>
				<p class="dark:text-myBlue-200 text-myBlue-800">{blog.metadata.description}</p>
				<p class="dark:text-myBlue-200 text-myBlue-800 text-sm">{blog.metadata.date}</p>
			</div>
		{/each}
	</div>
</div>

