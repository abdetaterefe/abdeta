<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Analytics from '$lib/analytics.svelte'
</script>
<Analytics/>
<Header />

<main class="p-4 md:px-10 md:py-10">
	<slot />
</main>

<Footer />
