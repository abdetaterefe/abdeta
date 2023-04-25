<script lang="ts">
	import Drawer from './Drawer.svelte';

	import { browser } from '$app/environment';
	import Moon from './icons/moon.svelte';
	import Sun from './icons/sun.svelte';
	import Close from './icons/close.svelte';

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
	let isOpen = false;
	const handleToggle = () => {
		isOpen = !isOpen;
	};

	export let path = '';
</script>

<Drawer {isOpen} on:clickAway={handleToggle}>
	<div class="p-2 dark:bg-zinc-900 min-h-screen">
		<div class="flex justify-evenly">
			<button
				on:click={handleToggle}
				class="rounded w-10 h-10 bg-myBlue-800 text-white flex justify-center items-center hover:bg-myBlue-600"
			>
				<span class="font-bold text-xl"><Close /></span>
			</button>
			<button
				type="button"
				role="switch"
				aria-label="Toggle Dark Mode"
				aria-checked={isDarkMode}
				class="w-10 h-10 rounded flex justify-center items-center bg-myBlue-800 hover:bg-myBlue-600"
				on:click={toggle}><Moon /> <Sun /></button
			>
		</div>
		<div class="items-center justify-center flex p-10">
			<ul class="list-none">
				<a
					href="/blog"
					on:click={handleToggle}
					class={`rounded h-10 ${
						path === '/blog' ? 'bg-myBlue-900' : 'bg-myBlue-800'
					} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
				>
					<span class="decoration-inherit no-underline font-bold text-xl">Blog</span>
				</a>
				<a
					href="/project"
					on:click={handleToggle}
					class={`rounded h-10 ${
						path === '/project' ? 'bg-myBlue-900' : 'bg-myBlue-800'
					} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
				>
					<span class="decoration-inherit no-underline font-bold text-xl">Projects</span>
				</a>
				<a
					href="/uses"
					on:click={handleToggle}
					class={`rounded h-10 ${
						path === '/uses' ? 'bg-myBlue-900' : 'bg-myBlue-800'
					} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
				>
					<span class="decoration-inherit no-underline font-bold text-xl">Uses</span>
				</a>
			</ul>
		</div>
	</div>
</Drawer>

<header class="dark:bg-zinc-900 p-4 flex flex-wrap justify-between">
	<a class="text-lg justify-center items-center flex" href="/"
		><img class="rounded-lg h-10 w-10" src="/favicon.ico" alt="Abdeta Logo" /></a
	>
	<button class="rounded inline-flex items-center p-2 md:hidden border-2 border-myBlue-800">
		<span class="sr-only">Open main menu</span>
		<svg
			class="w-6 h-6"
			aria-hidden="true"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			on:click={handleToggle}
			><path
				class="fill-black dark:fill-white"
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/></svg
		>
	</button>
	<nav class="hidden w-full md:block md:w-auto">
		<ul class="flex gap-4 list-none">
			<a
				href="/blog"
				class={`rounded h-10 ${
					path === '/blog' ? 'bg-myBlue-900' : 'bg-myBlue-800'
				} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
			>
				<span class="decoration-inherit no-underline font-bold text-xl">Blog</span>
			</a>
			<a
				href="/project"
				class={`rounded h-10 ${
					path === '/project' ? 'bg-myBlue-900' : 'bg-myBlue-800'
				} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
			>
				<span class="decoration-inherit no-underline font-bold text-xl">Projects</span>
			</a>
			<a
				href="/uses"
				class={`rounded h-10 ${
					path === '/uses' ? 'bg-myBlue-900' : 'bg-myBlue-800'
				} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
			>
				<span class="decoration-inherit no-underline font-bold text-xl">Uses</span>
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
