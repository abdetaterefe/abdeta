<script lang="ts">
	import Tree from './tree.svelte';
	import { createTableOfContents } from '@melt-ui/svelte';

	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({
		selector: '#toc-builder-preview',
		exclude: ['h1', 'h4', 'h5', 'h6'],
		activeType: 'all',
		headingFilterFn: (heading) => !heading.hasAttribute('data-toc-ignore'),
		scrollFn: (id) => {
			/**
			 * Here we're overwriting the default scroll function
			 * so that we only scroll within the ToC preview
			 * container, instead of the entire page.
			 */
			const container = document.getElementById('toc-builder-preview');
			const element = document.getElementById(id);

			if (container && element) {
				container.scrollTo({
					top: element.offsetTop - container.offsetTop - 16,
					behavior: 'smooth'
				});
			}
		}
	});
</script>

<div class="grid h-screen grid-cols-1 gap-2 md:grid-cols-7 overflow-hidden">
	<div id="toc-builder-preview" class="overflow-y-auto text-neutral-900 col-span-5 h-[75vh]">
		<slot />
	</div>

	<div class="hidden md:block overflow-y-auto rounded-lg p-4 col-span-2">
		<p class="font-semibold text-neutral-900">On This Page</p>
		<nav>
			{#key $headingsTree}
				<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
			{/key}
		</nav>
	</div>
</div>
