<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="dark:bg-zinc-900 flex flex-col h-screen overflow-hidden">
	<Header />
	<div class="flex min-h-[calc(100vh-4rem)] flex-col overflow-scroll">
		<div class="flex-grow p-4 md:px-10 md:py-10">
			<slot />
		</div>
		<Footer />
	</div>
</div>
