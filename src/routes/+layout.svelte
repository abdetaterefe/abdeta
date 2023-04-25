<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/analytics.svelte';
	export let data;
</script>

<div class="dark:bg-zinc-900">
	<Analytics />
	<Header path={data.pathName} />
	<main class="p-4 md:px-10 md:py-10 min-h-[75vh]">
		<slot />
	</main>

	<Footer />
</div>
