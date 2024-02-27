<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	export let data;
</script>

<svelte:head>
	<title>Projects</title>
	<meta property="og:title" content="Abdeta Terefe" />
</svelte:head>

<div class="w-full py-12 lg:py-20">
	<div class="grid lg:gap-12 px-4 md:px-6">
		<div class="space-y-2">
			<h1 class="text-3xl font-bold tracking-tighter lg:text-5xl xl:text-6xl dark:text-white">
				My Projects
			</h1>
			<p
				class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
			>
				Check out some of my completed and failed projects.
			</p>
		</div>
		<div>
			<div class="grid gap-8 mx-auto lg:grid-cols-3 xl:gap-12">
				{#each data.projects as project}
					<ProjectCard
						title={project.title}
						url={project.url}
						desc={project.desc}
						languages={project.languages}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
