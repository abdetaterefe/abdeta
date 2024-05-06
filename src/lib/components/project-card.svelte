<script lang="ts">
	export let title: string;
	export let desc: string;
	export let url: string;
	export let img: string;
	export let languages: string[];
</script>

<div class="bg-slate-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
	<a href={url}>
		<img
			src={img}
			alt={title}
			width="400"
			height="300"
			class="w-full h-48 object-cover"
			style="aspect-ratio: 400 / 300; object-fit: cover;"
		/>
		<div class="p-4">
			<h2 class="text-lg dark:text-white font-semibold mb-2">{title}</h2>
			<div class="flex flex-wrap gap-2 mb-2">
				{#each languages as lang}
					<span class={`text-white px-2 py-1 rounded-full text-xs bg-slate-400 dark:bg-slate-900`}>
						{lang}
					</span>
				{/each}
			</div>
			<p class="text-gray-500 dark:text-gray-400 text-sm">
				{desc}
			</p>
		</div>
	</a>
</div>
