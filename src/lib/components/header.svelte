<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Drawer from './drawer.svelte';
	import Moon from './icons/moon.svelte';
	import Sun from './icons/sun.svelte';

	let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true;

	function disableTransitionsTemporarily() {
		document.documentElement.classList.add('[&_*]:!transition-none');
		window.setTimeout(() => {
			document.documentElement.classList.remove('[&_*]:!transition-none');
		}, 0);
	}

	function toggle() {
		isDarkMode = !isDarkMode;
		localStorage.setItem('isDarkMode', isDarkMode.toString());

		disableTransitionsTemporarily();

		if (isDarkMode) {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}
	}
</script>

<header class="dark:bg-zinc-900 p-4 flex flex-wrap justify-between">
	<a class="text-lg justify-center items-center flex" href="/"
		><img class="rounded-lg h-10 w-10" src="/favicon.ico" alt="Abdeta Logo" /></a
	>
	<Drawer {isDarkMode} {toggle} />
	<nav class="hidden w-full md:block md:w-auto">
		<ul class="flex gap-4 list-none">
			<a
				href="/blog"
				class={`rounded h-10 ${
					$page.route.id === '/blog' ? 'bg-myBlue-600' : 'bg-myBlue-800'
				} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
			>
				<span class="decoration-inherit no-underline font-bold text-xl">Blog</span>
			</a>
			<a
				href="/project"
				class={`rounded h-10 ${
					$page.route.id === '/project' ? 'bg-myBlue-600' : 'bg-myBlue-800'
				} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
			>
				<span class="decoration-inherit no-underline font-bold text-xl">Projects</span>
			</a>

			<button
				type="button"
				role="switch"
				aria-label="Toggle Dark Mode"
				aria-checked={isDarkMode}
				class="w-10 h-10 rounded flex justify-center items-center bg-myBlue-800 hover:bg-myBlue-600"
				on:click={toggle}><Moon /> <Sun /></button
			>
		</ul>
	</nav>
</header>
