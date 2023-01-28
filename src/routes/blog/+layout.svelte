<script lang="ts">
	import CButton from '$lib/components/CButton.svelte';
	import type { Category } from '$lib/interfaces';
	export let data: Category;
</script>

<h1>
	<strong class="text-myBlue-800 dark:text-myBlue-300">Blogs</strong>
</h1>
<div class="mt-4 grid grid-cols-4 gap-2">
	<div class="hidden md:block">
		<input
			type="text"
			id="default-input"
			placeholder="Search post titles"
			class="dark:bg-zinc-800 rounded border dark:border-gray-700 border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
		/>
		<div class="mt-4">
			<h1 class="mb-2 dark:text-white">CATEGORIES</h1>

			<div class="w-full" role="group">
				{#each data.allCategories as category}
					<CButton {category} />
				{/each}
			</div>
		</div>
	</div>
	<slot />
</div>
