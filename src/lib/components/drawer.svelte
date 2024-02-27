<script lang="ts">
	import clsx from 'clsx';
	import { page } from '$app/stores';
	import { Drawer } from 'vaul-svelte';
	import Moon from './icons/moon.svelte';
	import Sun from './icons/sun.svelte';
	import Close from './icons/close.svelte';

	export let isDarkMode: boolean;
	export let toggle: () => void;
</script>

<Drawer.Root direction="right">
	<Drawer.Trigger class="rounded inline-flex items-center p-2 md:hidden border-2 border-myBlue-800">
		<span class="sr-only">Open main menu</span>
		<svg class="w-6 h-6" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
			><path
				class="fill-black dark:fill-white"
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/></svg
		>
	</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content
			data-testid="content"
			class={clsx({
				'fixed flex bg-zinc-100 dark:bg-slate-950 p-6': true,
				'bottom-0 right-0 top-0 w-[75%] flex-row rounded-l-[10px]': true
			})}
		>
			<div
				class={clsx({
					'flex h-full w-full gap-4 rounded-full': true,
					'flex-row ': true
				})}
			>
				<div>
					<div class="flex justify-evenly">
						<Drawer.Close
							class="w-10 h-10 rounded flex justify-center items-center bg-myBlue-800 hover:bg-myBlue-600 text-white"
						>
							<Close />
						</Drawer.Close>
						<button
							type="button"
							role="switch"
							aria-label="Toggle Dark Mode"
							aria-checked={isDarkMode}
							class="w-10 h-10 rounded flex justify-center items-center bg-myBlue-800 hover:bg-myBlue-600"
							on:click={toggle}><Moon /> <Sun /></button
						>
					</div>
					<div class="grid h-full w-full place-content-center">
						<div class="items-center justify-center flex p-10">
							<ul class="list-none">
								<Drawer.Close>
									<a
										href="/blog"
										class={`rounded h-10 ${
											$page.route.id === '/blog' ? 'bg-myBlue-600' : 'bg-myBlue-800'
										} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
									>
										<span class="decoration-inherit no-underline font-bold text-xl">Blog</span>
									</a>
								</Drawer.Close>
								<Drawer.Close>
									<a
										href="/project"
										class={`rounded h-10 ${
											$page.route.id === '/project' ? 'bg-myBlue-600' : 'bg-myBlue-800'
										} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
									>
										<span class="decoration-inherit no-underline font-bold text-xl">Projects</span>
									</a>
								</Drawer.Close>
								<Drawer.Close>
									<a
										href="/uses"
										class={`rounded h-10 ${
											$page.route.id === '/uses' ? 'bg-myBlue-600' : 'bg-myBlue-800'
										} text-white w-40 flex justify-center items-center hover:bg-myBlue-600 mb-5`}
									>
										<span class="decoration-inherit no-underline font-bold text-xl">Uses</span>
									</a>
								</Drawer.Close>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
