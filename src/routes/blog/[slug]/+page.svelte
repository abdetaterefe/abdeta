<script lang="ts">
	import type { Slug } from '$lib/interfaces';
	export let data: Slug;
</script>

<article class="md:col-span-3 col-span-4">
	<div class="mb-10">
		<h1 class="text-3xl font-extrabold leading-tight lg:text-4xl">{data.title}</h1>
		<p>Published: {data.date}</p>
	</div>

	<svelte:component this={data.content} />
	<div class="mt-10 flex gap-2 items-center">
		<p>Posted in :</p>
		{#each data.categories as category}
			<a
				href="/blog/category/{category}"
				class="items-center p-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
				>{category}
			</a>
		{/each}
	</div>
</article>
