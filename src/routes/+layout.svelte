<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="dark:bg-zinc-900 flex flex-col h-screen overflow-hidden">
	<Header />
	<div class="flex-1 overflow-y-scroll">
		<main class="p-4 md:px-10 md:py-10 min-h-[75vh]">
			<slot />
		</main>
	</div>
	<Footer />
</div>
