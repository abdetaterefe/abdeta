<script lang="ts">
	import type { Post } from '$lib/interfaces';
	import postcss from 'postcss';
	export let data: Post;
</script>

<h1>
	<strong
		class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
	>
		[ Blogs ]
	</strong>
</h1>
<div class="mt-4 grid grid-cols-4 gap-2">
	<div class="hidden md:block">
		<input
			type="text"
			id="default-input"
			placeholder="Search post titles"
			class="border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
		/>
		<div class="mt-4">
			<h1>CATEGORIES</h1>
			<div class="grid grid-cols-4 justify-evenly gap-2 w-full" role="group">
				<a
					href="/"
					class="inline-flex items-center py-2 px-2 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
				>
					C++
				</a>
				<a
					href="/"
					class="inline-flex items-center py-2 px-2 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
				>
					C++
				</a>
				<a
					href="/"
					class="inline-flex items-center py-2 px-2 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
				>
					C++
				</a>
				<a
					href="/"
					class="inline-flex items-center py-2 px-2 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
				>
					C++
				</a>
				<a
					href="/"
					class="inline-flex items-center py-2 px-2 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
				>
					C++
				</a>
			</div>
		</div>
	</div>
	<div class="md:col-span-3 col-span-4">
		{#each data.posts as post}
			<div class="flex flex-col mb-4 justify-between p-4 leading-normal">
				<a href={post.path}>
					<h1 class="mb-2 text-4xl font-bold tracking-tight hover:text-gray-700">
						{post.meta.title}
					</h1>
				</a>
				<p>{post.meta.description}</p>
				<p class="text-gray-700 text-sm">{post.meta.date}</p>
				<div class="flex gap-2 items-center">
					{#each post.meta.categories as categories}
						<a
							href="/"
							class="items-center p-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
							>{categories}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
