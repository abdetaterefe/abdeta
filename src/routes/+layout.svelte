<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Analytics from '$lib/components/analytics.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Analytics website_id="03bb7428-2452-49a3-b909-711dfb9ff459" />

<div class="dark:bg-zinc-900 flex flex-col h-screen overflow-hidden">
	<Header />
	<div class="flex-1 overflow-y-scroll">
		<main class="p-4 md:px-10 md:py-10">
			{@render children?.()}
		</main>
	</div>
	<Footer />
</div>
