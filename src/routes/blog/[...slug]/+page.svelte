<script lang="ts">
	import { page } from '$app/stores';
	import { createSeparator, melt } from '@melt-ui/svelte';
	type Component = $$Generic<typeof SvelteComponent>;

	const {
		elements: { root: horizontal }
	} = createSeparator({
		orientation: 'horizontal',
		decorative: true
	});

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

<section class="relative dark:text-white">
	<h1 class="scroll-m-20 text-5xl font-semibold tracking-[-0.02em]">
		{doc.title}
	</h1>

	<p
		class="mb-11 mt-3 text-balance text-[21px] font-semibold leading-7 tracking-[-0.01em] text-foreground/40"
	>
		{doc.description}
	</p>
</section>

<div use:melt={$horizontal} class="my-3.5 h-[1px] w-full" />

<div class="markdown prose relative pt-4 dark:prose-invert" id="sveco-content">
	<svelte:component this={component} {data} />
</div>
