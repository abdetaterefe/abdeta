<script lang="ts">
	import '@/styles/markdown.postcss';
	type Component = $$Generic<typeof SvelteComponent>;

	export let data;
	$: component = data.component as unknown as Component;
	$: doc = data.metadata;
</script>

<svelte:head>
	<title>{doc.title}</title>
	<meta property="og:title" content={doc.title} />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content={doc.description}
	/>
</svelte:head>
<div>
	<div class="mb-10 pb-24">
		<h1 class="text-3xl font-extrabold leading-tight lg:text-4xl">{doc.title}</h1>
		<p>{doc.description}</p>
		<p>Published: {doc.date}</p>
	</div>

	<div class="markdown prose relative max-w-5xl pt-4 dark:prose-invert">
		<svelte:component this={component} {data} />
	</div>
</div>
