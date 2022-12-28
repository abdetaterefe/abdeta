<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<h1>
	<strong
		class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
	>
		[ Github Projects ]
	</strong>
</h1>

<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
	{#each data.repos.data as data}
		<div class="items-center bg-gray-200 shadow sm:flex">
			<div class="p-2 w-full">
				<div>
					<h3 >
						<a class="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-700" href={data.html_url} target="_blank" rel="noreferrer">{data.name}</a>
					</h3>
					<span class="text-gray-500">{data.fork ? 'Forked' : ''}</span>
					<p class="mt-3 mb-4 font-light text-gray-500 w-full">
						{data.description ? data.description : ''}
					</p>
				</div>
				<div class="mt-1 flex items-center justify-between">
					<div class="flex">
						<svg width="24" height="24" viewBox="0 0 24 24"
							><path
								d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"
							/></svg
						>
						<p>{data.stargazers_count}</p>
					</div>
					<div class="font-light text-gray-900 px-2 bg-gradient-to-r from-blue-500 to-blue-600">{data.language ? data.language : ''}</div>
				</div>
			</div>
		</div>
	{/each}
</div>
