<script>
	import Facebook from './icons/facebook.svelte';
	import Github from './icons/github.svelte';
	import Instagram from './icons/instagram.svelte';
	import Telegram from './icons/telegram.svelte';
	import Twitter from './icons/twitter.svelte';
	import { page } from '$app/stores';
</script>

<footer class="bg-slate-900 {$page.route.id == "/blog/[...slug]" && 'hidden'}">
	<div class="py-6 px-4 md:flex md:items-center md:justify-between">
		<p class="flex items-center justify-center py-4 text-white">
			Made with&MediumSpace;<a class="underline" href="https://kit.svelte.dev">SvelteKit</a>
		</p>
		<div class="flex space-x-6 justify-center">
			<a href="https://www.facebook.com/profile.php?id=100071942769490">
				<Facebook />
				<span class="sr-only">Facebook page</span>
			</a>
			<a href="https://www.instagram.com/abdetaterefe">
				<Instagram />
				<span class="sr-only">Instagram page</span>
			</a>
			<a href="https://twitter.com/abdetaterefe">
				<Twitter />
				<span class="sr-only">Twitter page</span>
			</a>
			<a href="https://github.com/abdetaterefe">
				<Github />
				<span class="sr-only">GitHub account</span>
			</a>
			<a href="https://t.me/abdetaterefe">
				<Telegram />
				<span class="sr-only">Telegram account</span>
			</a>
		</div>
	</div>
</footer>
