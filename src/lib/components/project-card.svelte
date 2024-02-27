<script lang="ts">
	import Repo from './icons/repo.svelte';

	export let title: string;
	export let desc: string;
	export let url: string;
	export let languages: string[];
</script>

<div class="flex flex-col rounded shadow-md dark:shadow-zinc-600 mb-4 justify-between p-4">
	<div>
		<header class="flex items-center">
			<Repo />
			<a
				class="ml-2 text-base hover:underline focus:underline dark:text-white"
				href={url}
				target="_blank"
				rel="noreferrer">{title}</a
			>
		</header>
		<p class="my-2 text-xs dark:text-gray-200">{desc}</p>
	</div>

	<div>
		<ul class="flex items-center">
			{#each languages as lang}
				<li class="flex items-center mr-4">
					<div class={`w-3 h-3 rounded-full flex-shrink-0 ${lang}`} />
					<span class="ml-1 text-xs dark:text-gray-200">{lang}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
