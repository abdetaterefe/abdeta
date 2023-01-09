<script lang="ts">
	import type { Slug } from '$lib/interfaces';
	export let data: Slug;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content={data.description}
	/>
</svelte:head>

<article class="md:col-span-3 col-span-4">
	<div class="mb-10">
		<h1 class="text-3xl font-extrabold leading-tight lg:text-4xl">{data.title}</h1>
		<p>{data.description}</p>
		<p>Published: {data.date}</p>
	</div>
	<article class="prose prose-lg">
		{@html data.content}
	</article>
	<div class="mt-10 flex gap-2 items-center">
		<p>Posted in :</p>
		{#each data.categories as category}
			<a
				href="/blog/category/{category}"
				class="inline-flex rounded text-myBlue-800 items-center py-2 px-2 text-xs font-bold bg-myBlue-400 hover:bg-myBlue-300"
				>{category}
			</a>
		{/each}
	</div>
</article>
