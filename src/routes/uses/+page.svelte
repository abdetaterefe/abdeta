<script>
	import UsesCard from '$lib/components/uses-card.svelte';
</script>

<svelte:head>
	<title>Uses</title>
	<meta property="og:title" content="Abdeta Terefe" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="I'm fullstack developer"
	/>
</svelte:head>

<div class="flex flex-col gap-2 min-h-[500px] justify-center space-y-2 text-center">
	<div class="space-y-2">
		<div
			class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-white"
		>
			My Setup
		</div>
		<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
			Abdeta's Setup
		</h1>
		<p
			class="max-w-[800px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
		>
			Here's a curated list of my favorite items that help me stay focused and get work done.
		</p>
	</div>
</div>

<div class="border-t border-b divide-y">
	<div
		class="container grid items-start gap-6 px-4 py-6 md:grid-cols-2 md:py-12 lg:gap-10 lg:px-6 lg:py-16 xl:gap-12"
	>
		<div class="flex flex-col gap-2">
			<h2 class="text-2xl font-bold dark:text-white">Coding Tools</h2>
			<p class="text-gray-500 dark:text-gray-400">
				Here are the tools I use for coding, writing, and productivity.
			</p>
		</div>
		<div class="flex flex-col gap-2">
			<h2 class="text-2xl font-bold dark:text-white">Hardware Essentials</h2>
			<p class="text-gray-500 dark:text-gray-400">
				These are the hardware devices that are integral to my workflow.
			</p>
		</div>
	</div>
</div>
<div class="container px-4 py-6 md:px-6 lg:py-12">
	<div class="grid max-w-sm gap-4 mx-auto sm:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:gap-8">
		<UsesCard />
		<UsesCard />
	</div>
</div>
<div class="container px-4 py-6 md:px-6 lg:py-12">
	<div class="grid max-w-sm gap-4 mx-auto sm:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:gap-8">
		<UsesCard />
		<UsesCard />
	</div>
</div>
