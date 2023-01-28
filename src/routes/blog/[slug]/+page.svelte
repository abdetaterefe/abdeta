<script lang="ts">
	import CButton from '$lib/components/CButton.svelte';
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

<article class="md:col-span-3 col-span-4 dark:text-white">
	<div class="mb-10">
		<h1 class="text-3xl font-extrabold leading-tight lg:text-4xl">{data.title}</h1>
		<p>{data.description}</p>
		<p>Published: {data.date}</p>
	</div>
	<article class="prose prose-lg dark:prose-invert">
		{@html data.content}
	</article>
	<div class="mt-10 flex items-center">
		<p>Posted in :</p>
		{#each data.categories as category}
			<CButton {category} />
		{/each}
	</div>
</article>
