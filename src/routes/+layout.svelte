<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Abdeta | Portfolio</title>
</svelte:head>

<div class="min-h-screen bg-white text-black selection:bg-black selection:text-white dark:bg-black dark:text-white">
	<nav class="sticky top-0 z-50 bg-white/80 py-6 backdrop-blur-md dark:bg-black/80">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6">
			<a href="/" class="text-xl font-black uppercase tracking-tighter transition-transform hover:scale-105 active:scale-95">
				abdeta
			</a>
			<div class="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
				<a href="#projects" class="transition-opacity hover:opacity-50">Projects</a>
				<a href="#experience" class="transition-opacity hover:opacity-50">Experience</a>
				<a href="#contact" class="transition-opacity hover:opacity-50">Contact</a>
			</div>
		</div>
	</nav>

	<main class="mx-auto max-w-6xl px-6">
		{@render children()}
	</main>

	<footer class="mt-40 border-t border-black py-16 dark:border-white">
		<div class="mx-auto max-w-6xl px-6">
			<div class="flex flex-col justify-between gap-8 md:flex-row">
				<div class="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
					&copy; {new Date().getFullYear()} Abdeta Terefe
				</div>
				<div class="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em]">
					<a href="https://github.com/abdetaterefe" target="_blank" rel="noopener noreferrer" class="transition-all hover:translate-y-[-2px] hover:underline">Github</a>
					<a href="https://linkedin.com/in/abdetaterefe" target="_blank" rel="noopener noreferrer" class="transition-all hover:translate-y-[-2px] hover:underline">LinkedIn</a>
					<a href="https://twitter.com/abdetaterefe" target="_blank" rel="noopener noreferrer" class="transition-all hover:translate-y-[-2px] hover:underline">Twitter</a>
				</div>
			</div>
		</div>
	</footer>
</div>
