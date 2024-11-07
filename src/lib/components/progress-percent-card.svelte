<script lang="ts">
	interface Props {
		percent?: string;
		children?: import('svelte').Snippet;
	}

	let { percent = '10', children }: Props = $props();
</script>

<div class="w-full relative bg-slate-800 rounded h-8">
	<div
		class="bg-slate-600 rounded inline-flex items-center h-full text-xs text-center"
		style="width: {percent}%"
	></div>
	<div class="absolute text-white text-xs font-bold inline-flex items-center top-1 left-1">
		{@render children?.()}
	</div>
</div>
