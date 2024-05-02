<script lang="ts">
	export let title: string;
	export let desc: string;
	export let url: string;
	export let languages: string[];
</script>

<div
	class="h-full rounded-2xl bg-slate-200/50 from-slate-900 via-slate-700 to-white p-[1px] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r dark:bg-gray-900"
>
	<div
		class="flex h-full w-full flex-col rounded-[1rem] bg-slate-300 p-4 text-gray-900 opacity-90 dark:bg-slate-800 dark:text-white"
	>
		<div class="flex-auto">
			<a href={url} target="_blank"><p class="pb-4 text-lg font-bold">{title}</p></a>
			<div class="flex flex-wrap">
				{#each languages as lang}
					<span
						class={`mb-2 mr-2 rounded-xl px-3 py-1 text-xs font-bold uppercase text-white hover:bg-slate-500 ${lang}`}
					>
						{lang}
					</span>
				{/each}
			</div>
			<p class="line-clamp-6 pt-4">{desc}</p>
		</div>
	</div>
</div>
