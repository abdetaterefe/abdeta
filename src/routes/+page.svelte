<script>
	import Cplusplus from '$lib/components/icons/cplusplus.svelte';
	import Svelte from '$lib/components/icons/svelte.svelte';
	import Javascript from '$lib/components/icons/javascript.svelte';
	import Typescript from '$lib/components/icons/typescript.svelte';
	import Java from '$lib/components/icons/java.svelte';
	import Python from '$lib/components/icons/python.svelte';
	import Dart from '$lib/components/icons/dart.svelte';
	import Nextjs from '$lib/components/icons/nextjs.svelte';
	import Reactjs from '$lib/components/icons/reactjs.svelte';
	import Firebase from '$lib/components/icons/firebase.svelte';
	import Flutter from '$lib/components/icons/flutter.svelte';
	import Git from '$lib/components/icons/git.svelte';
	import TlCard from '$lib/components/TLCard.svelte';
	import Tailwind from '$lib/components/icons/tailwind.svelte';
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
	<meta
		property="og:image"
		content="https://avatars.githubusercontent.com/u/59355292?s=400&u=9e89eb1ae60b57ed7c0ef0de4858640ae75ce22d&v=4"
	/>
	<meta
		name="twitter:image"
		content="https://avatars.githubusercontent.com/u/59355292?s=400&u=9e89eb1ae60b57ed7c0ef0de4858640ae75ce22d&v=4"
	/>
</svelte:head>

<h1>
	<strong class="text-myBlue-800">About Me</strong>
</h1>
<div class="grid gap-4 md:grid-cols-2">
	<div class="p-4 inline-flex">
		<span class="text-5xl md:text-6xl font-bold"
			>Hi, I'm <strong class="text-myBlue-700">Abdi. </strong>
			I'm web developer</span
		>
	</div>
	<div>
		<h1 class="mb-2">
			<strong class="text-myBlue-800">TechStacks</strong>
		</h1>
		<div class="grid md:grid-cols-6 grid-cols-4 justify-evenly gap-2 w-full" role="group">
			<TlCard percent="30">
				<Cplusplus /> C++
			</TlCard>
			<TlCard percent="60">
				<Javascript /> Js
			</TlCard>
			<TlCard percent="70">
				<Typescript /> Ts
			</TlCard>
			<TlCard percent="20">
				<Java /> Java
			</TlCard>
			<TlCard percent="60">
				<Python /> Python
			</TlCard>
			<TlCard percent="40">
				<Dart /> Dart
			</TlCard>
			<TlCard percent="50">
				<Flutter /> Flutter
			</TlCard>
			<TlCard percent="75">
				<Svelte /> Svelte
			</TlCard>
			<TlCard percent="40">
				<Nextjs /> NextJs
			</TlCard>
			<TlCard percent="30">
				<Reactjs /> React
			</TlCard>
			<TlCard percent="60">
				<Firebase /> Firebase
			</TlCard>
			<TlCard percent="80">
				<Git /> Git
			</TlCard>
			<TlCard percent="60">
				<Tailwind /> Tailwind
			</TlCard>
		</div>
		<h1 class="mt-4 md:mt-8">
			<strong class="text-myBlue-800">Languages</strong>
		</h1>
		<div class="grid md:grid-cols-4 grid-cols-2 justify-evenly gap-2 w-full" role="group">
			<TlCard percent="90">Amharic</TlCard>
			<TlCard percent="80">Oromic</TlCard>
			<TlCard percent="70">English</TlCard>
			<TlCard percent="5">Learnig Japannese</TlCard>
		</div>
	</div>
</div>
<div class="mt-10 grid md:grid-cols-2 gap-4">
	<div class="">
		<h1 class="mt-4 md:mt-8">
			<strong class="text-myBlue-800">Personally</strong>
		</h1>
		<p class="mb-4 font-light text-gray-700">
			I'm a rookie developer who is completely fixated on all things technological,
			programming-related, and hardware-related. I enjoy reading or watching a video about them and
			sharing them with my friends. From now on, hopefully, I'll share what I learn or whatever is
			on my mind in this blog.
		</p>
		<p class="mb-4 font-light text-gray-700">
			Honestly, I'm someone who prefers learning at least one HTML tag I was unaware of rather than
			sitting around doing nothing for a day.
		</p>
	</div>
	<div class="">
		<h1 class="mt-4 md:mt-8">
			<strong class="text-myBlue-800">Professionally</strong>
		</h1>
		<p class="mb-4 font-light text-gray-700">
			I have never worked professionally; I'm a freshman and have never had a job or done freelance
			work. As a currently fresh-man student studying software engineering, everything I have done
			or learnt thus far has been self-taught. I believe I still have a lot to learn before engaging
			in professional activities.
		</p>
	</div>
</div>
<div class="text-xl">
	More on Things That I <a href="/project" class="underline"
		>💻<strong class="text-myBlue-800 hover:text-myBlue-600"> Made </strong></a
	>
	,
	<a href="/blog" class="underline"
		>📖<strong class="text-myBlue-800 hover:text-myBlue-600"> Wrote </strong></a
	>
	or
	<a href="/uses" class="underline"
		>👨‍💻<strong class="text-myBlue-800 hover:text-myBlue-600"> Use </strong></a
	>
</div>
