<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/analytics.svelte';
</script>

<div class="dark:bg-zinc-900">
	<Analytics />
	<Header />
	<main class="p-4 md:px-10 md:py-10 min-h-[75vh]">
		<slot />
	</main>

	<Footer />
</div>
