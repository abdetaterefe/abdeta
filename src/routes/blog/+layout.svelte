<script lang="ts">
	import type { Category } from '$lib/interfaces';
	export let data: Category;
</script>

<h1>
	<strong class="text-myBlue-800">Blogs</strong>
</h1>
<div class="mt-4 grid grid-cols-4 gap-2">
	<div class="hidden md:block">
		<input
			type="text"
			id="default-input"
			placeholder="Search post titles"
			class="rounded border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
		/>
		<div class="mt-4">
			<h1 class="mb-2">CATEGORIES</h1>

			<div class="w-full" role="group">
				{#each data.allCategories as category}
					<a
						href="/blog/category/{category}"
						class="inline-flex mr-2 rounded text-myBlue-800 items-center py-2 px-2 text-xs font-bold bg-myBlue-400 hover:bg-myBlue-300"
						>{category}
					</a>
				{/each}
			</div>
		</div>
	</div>
	<slot />
</div>
