<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main class="p-4 md:px-10 md:py-10">
	<slot />
</main>

<Footer />
