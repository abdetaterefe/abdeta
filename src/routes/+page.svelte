<script>
	import Svelte from '$lib/components/icons/svelte.svelte';
	import Typescript from '$lib/components/icons/typescript.svelte';
	import Java from '$lib/components/icons/java.svelte';
	import Nextjs from '$lib/components/icons/nextjs.svelte';
	import Reactjs from '$lib/components/icons/reactjs.svelte';
	import ProgressPercentCard from '$lib/components/progress-percent-card.svelte';
</script>

<svelte:head>
	<title>Abdeta Terefe</title>
	<meta property="og:title" content="Abdeta Terefe" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="I'm web developer"
	/>
</svelte:head>

<h1>
	<strong class="text-slate-800 dark:text-slate-300">About Me</strong>
</h1>
<div class="grid gap-4 md:grid-cols-2">
	<div class="p-4 inline-flex">
		<span class="dark:text-white text-5xl md:text-6xl font-bold"
			>Hi, I'm <strong class="text-slate-700">Abdi. </strong>
			I'm a developer</span
		>
	</div>
	<div>
		<h1 class="mb-2">
			<strong class="text-slate-800 dark:text-slate-300">TechStacks</strong>
		</h1>
		<div class="grid md:grid-cols-6 grid-cols-4 justify-evenly gap-2 w-full" role="group">
			<ProgressPercentCard percent="60">
				<Typescript /> Ts
			</ProgressPercentCard>
			<ProgressPercentCard percent="20">
				<Java /> Java
			</ProgressPercentCard>
			<ProgressPercentCard percent="60">
				<Svelte /> Svelte
			</ProgressPercentCard>
			<ProgressPercentCard percent="40">
				<Nextjs /> NextJs
			</ProgressPercentCard>
			<ProgressPercentCard percent="30">
				<Reactjs /> React
			</ProgressPercentCard>
		</div>
		<h1 class="mt-4 md:mt-8">
			<strong class="text-slate-800 dark:text-slate-300">Languages</strong>
		</h1>
		<div class="grid md:grid-cols-4 grid-cols-2 justify-evenly gap-2 w-full" role="group">
			<ProgressPercentCard percent="90">Amharic</ProgressPercentCard>
			<ProgressPercentCard percent="80">Oromic</ProgressPercentCard>
			<ProgressPercentCard percent="70">English</ProgressPercentCard>
		</div>
	</div>
</div>
<div class="mt-10 grid md:grid-cols-2 gap-4">
	<div class="">
		<p class="mb-4 font-light text-xl text-gray-700 dark:text-gray-300">
			I'm Abdeta Terefe(Abdi), I'm software engineer who focuses in website development and has some
			expreince with mobile development.
		</p>
	</div>
	<div class="">
		<h1 class="mt-4 md:mt-8">
			<strong class="text-slate-800 dark:text-slate-300">Personally</strong>
		</h1>
		<p class="mb-4 font-light text-gray-700 dark:text-gray-300">
			I'm a rookie developer who is completely fixated on all things technological,
			programming-related, and hardware-related. I enjoy reading or watching a video about them and
			sharing them with my friends. From now on, hopefully, I'll share what I learn or whatever is
			on my mind in this blog.
		</p>
		<p class="mb-4 font-light text-gray-700 dark:text-gray-300">
			Honestly, I'm someone who prefers learning at least one HTML tag I was unaware of rather than
			sitting around doing nothing for a day.
		</p>
		<p class="mb-4 font-light text-gray-700 dark:text-gray-300">
			I'm an anime fan, I love anime, and my favorite is Attack on Titan.
		</p>
		<h1 class="mt-4 md:mt-8">
			<strong class="text-slate-800 dark:text-slate-300">Professionally</strong>
		</h1>
		<p class="mb-4 font-light text-gray-700 dark:text-gray-300">...</p>
	</div>
</div>
