<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	export let data;
</script>

<svelte:head>
	<title>Projects</title>
	<meta property="og:title" content="Abdeta Terefe" />
</svelte:head>
<div class="mx-auto w-full max-w-screen-xl px-4 py-6">
	<div class="space-y-2 mb-4">
		<h1 class="text-3xl font-bold tracking-tighter lg:text-5xl xl:text-6xl dark:text-white">
			My Projects
		</h1>
		<p
			class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
		>
			Check out some of my completed and failed projects.
		</p>
	</div>

	<div class="grid gap-4 mx-auto lg:grid-cols-2 xl:gap-6">
		{#each data.projects as project}
			<ProjectCard
				title={project.title}
				url={project.url}
				img={project.img}
				desc={project.desc}
				languages={project.languages}
			/>
		{/each}
	</div>
</div>
