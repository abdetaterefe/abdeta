<script lang="ts">

	const projects = [
		{
			title: 'Phone Recap',
			description: 'A Spotify Wrapped-style experience for your phone usage statistics, built for seamless mobile reflection.',
			tags: ['Flutter', 'Mobile'],
			link: 'https://github.com/abdetaterefe/phone_recap'
		},
		{
			title: 'YTCE',
			description: 'YouTube Content Engine: An AI-driven scriptwriter with integrated scene generation, asset finding, and audio synthesis.',
			tags: ['Svelte', 'Cloudflare AI', 'RAG', 'Python'],
			link: 'https://ytce.jinc.team'
		},
		{
			title: 'TCS',
			description: 'Telegram Channel Scraper: An efficient tool for extracting and analyzing data from Telegram channels.',
			tags: ['Hono', 'Cloudflare'],
			link: 'https://tcs.jinc.team'
		},
		{
			title: 'VSM',
			description: 'Vector Space Model: A tool for calculating and visualizing document relationship metrics as part of my IR course.',
			tags: ['Hono', 'Information Retrieval'],
			link: 'https://vsm.jinc.team'
		}
	];

	const experiences = [
		{
			company: 'jinc.team',
			role: 'Founder',
			period: 'Present',
			description: 'Building innovative AI-driven tools and digital products under my own technical collective.'
		},
		{
			company: 'Freelance',
			role: 'Full Stack Developer',
			period: 'Various',
			description: 'Developed custom solutions for diverse clients, focusing on mobile apps and scalable web architectures.'
		},
		{
			company: '1888',
			role: 'Intern',
			period: 'Previous',
			description: 'Gained hands-on experience in production environments, contributing to full-stack development and system optimization.'
		}
	];

	const skills = [
		'Svelte', 'React Native', 'Flutter', 'React', 'Docker', 'RAG', 'TypeScript', 'Node.js', 'PostgreSQL'
	];
</script>

<div class="py-24">
	<!-- Intro / Profile -->
	<section class="group mb-40">
		<div class="grid gap-8 md:grid-cols-5">
			<div class="md:col-span-1">
				<h2 class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 transition-opacity group-hover:opacity-100">Profile</h2>
			</div>
			<div class="md:col-span-4">
				<h1 class="text-4xl font-black leading-none tracking-tight sm:text-7xl dark:text-white">
					Full Stack Developer <br class="hidden sm:block" />
					focusing on <span class="text-slate-400">AI-integrated workflows</span> <br class="hidden sm:block" />
					and <span class="inline-block transition-transform hover:skew-x-[-10deg]">high-performance mobile</span>.
				</h1>
				<p class="mt-12 max-w-2xl text-xl font-medium leading-relaxed opacity-60">
					Currently pursuing my degree at ASTU while building the next generation of content creation tools at jinc.team.
				</p>
			</div>
		</div>
	</section>

	<!-- Projects -->
	<section id="projects" class="group mb-40">
		<div class="grid gap-8 md:grid-cols-5">
			<div class="md:col-span-1">
				<h2 class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 transition-opacity group-hover:opacity-100">Selected Projects</h2>
			</div>
			<div class="md:col-span-4">
				<div class="grid gap-16 md:grid-cols-2">
					{#each projects as project}
						<div class="group relative flex flex-col border border-black/5 bg-slate-50/50 p-10 transition-all hover:bg-slate-100 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10">
							<div class="flex-1">
								<h3 class="text-3xl font-black uppercase tracking-tighter">{project.title}</h3>
								<p class="mt-8 opacity-70 leading-relaxed">{project.description}</p>
							</div>
							<div class="mt-10 flex flex-col gap-6">
								<div class="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-[0.1em] opacity-40">
									{#each project.tags as tag}
										<span class="hover:underline">{tag}</span>
									{/each}
								</div>
								<a href={project.link} target="_blank" rel="noopener noreferrer" class="self-start border-b-2 border-black font-black uppercase text-xs tracking-[0.2em] transition-all hover:translate-x-2 dark:border-white">
									View Project
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Experience -->
	<section id="experience" class="group mb-40">
		<div class="grid gap-8 md:grid-cols-5">
			<div class="md:col-span-1">
				<h2 class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 transition-opacity group-hover:opacity-100">Experience</h2>
			</div>
			<div class="md:col-span-4">
				<div class="grid gap-12">
					{#each experiences as exp}
						<div class="group/item border-b border-black/10 pb-12 transition-colors hover:border-black dark:border-white/10 dark:hover:border-white last:border-0">
							<div class="flex flex-col justify-between md:flex-row">
								<h3 class="text-2xl font-black uppercase tracking-tight">{exp.company}</h3>
								<span class="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mt-2 md:mt-0">{exp.period}</span>
							</div>
							<p class="mt-2 text-sm font-black uppercase tracking-widest opacity-60">{exp.role}</p>
							<p class="mt-8 max-w-3xl text-lg leading-relaxed opacity-60 group-hover/item:opacity-90">{exp.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Education -->
	<section id="education" class="group mb-40">
		<div class="grid gap-8 md:grid-cols-5">
			<div class="md:col-span-1">
				<h2 class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 transition-opacity group-hover:opacity-100">Education</h2>
			</div>
			<div class="md:col-span-4">
				<div class="flex flex-col justify-between border-t border-black pt-12 md:flex-row dark:border-white">
					<div>
						<h3 class="text-2xl font-black uppercase tracking-tighter">ASTU (Adama Science and Technology University)</h3>
						<p class="mt-2 text-sm font-black uppercase tracking-widest opacity-60">Full-time Student</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Expertise -->
	<section class="group mb-40">
		<div class="grid gap-8 md:grid-cols-5">
			<div class="md:col-span-1">
				<h2 class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 transition-opacity group-hover:opacity-100">Expertise</h2>
			</div>
			<div class="md:col-span-4">
				<div class="flex flex-wrap gap-4">
					{#each skills as skill}
						<div class="border border-black px-6 py-3 text-sm font-black uppercase tracking-widest transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
							{skill}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section id="contact" class="group">
		<div class="grid gap-8 md:grid-cols-5">
			<div class="md:col-span-1">
				<h2 class="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 transition-opacity group-hover:opacity-100">Contact</h2>
			</div>
			<div class="md:col-span-4">
				<h2 class="text-4xl font-black leading-tight tracking-tighter sm:text-7xl">
					Open for consultancy <br class="hidden sm:block" /> and collaborative projects.
				</h2>
				<div class="mt-20 flex flex-col gap-12 md:flex-row md:items-center">
					<a href="mailto:abdetaterefe@gmail.com" class="text-3xl font-black underline underline-offset-[12px] transition-opacity hover:opacity-50">
						abdetaterefe@gmail.com
					</a>
					<div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
						<a href="https://github.com/abdetaterefe" target="_blank" rel="noopener noreferrer" class="transition-all hover:translate-y-[-4px] hover:underline">GitHub</a>
						<a href="https://linkedin.com/in/abdetaterefe" target="_blank" rel="noopener noreferrer" class="transition-all hover:translate-y-[-4px] hover:underline">LinkedIn</a>
						<a href="https://twitter.com/abdetaterefe" target="_blank" rel="noopener noreferrer" class="transition-all hover:translate-y-[-4px] hover:underline">Twitter</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
