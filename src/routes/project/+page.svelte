<script lang="ts">
	import Forkicon from '$lib/components/icons/forkicon.svelte';
	import Repo from '$lib/components/icons/repo.svelte';
	import Starticon from '$lib/components/icons/starticon.svelte';
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
	{#each data.repos.data as data}
		<div class="flex flex-col rounded shadow-md dark:shadow-zinc-600 mb-4 justify-between p-4">
			<div>
				<header class="flex items-center">
					<Repo />
					<a
						class="ml-2 text-base hover:underline focus:underline dark:text-white"
						href={data.html_url}
						target="_blank"
						rel="noreferrer">{data.name}</a
					>
				</header>
				<p class="my-2 text-xs dark:text-gray-200">
					{data.description ? data.description : ''}
				</p>
			</div>

			<div>
				<ul class="flex items-center">
					{#if data.language}
						<li class="flex items-center mr-4">
							<div class={`w-3 h-3 rounded-full flex-shrink-0 ${data.language}`} />
							<span class="ml-1 text-xs dark:text-gray-200">{data.language}</span>
						</li>
					{/if}
					<li class="flex items-center mr-4">
						<Starticon />
						<span class="ml-1 text-xs dark:text-gray-200">{data.stargazers_count}</span>
					</li>
					<li class="flex items-center mr-4">
						<Forkicon />
						<span class="ml-1 text-xs dark:text-gray-200"
							>{data.fork ? `forked ${data.forks_count}` : data.forks_count}</span
						>
					</li>
				</ul>
			</div>
		</div>
	{/each}
</div>
