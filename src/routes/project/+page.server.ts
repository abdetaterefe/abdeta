import type { PageServerLoad } from './$types';

export const load = (async () => {
	const projects = [
		{
			title: 'Telegram Channel Scraper',
			img: 'https://docs.telegram-channel-scraper.abdeta.dev/favicon.svg',
			url: 'https://github.com/abdetaterefe/et-date-svelte',
			desc: 'The best and free telegram channel scraper API out there. ',
			languages: ['AstroJs', 'Honojs']
		},
		{
			title: 'Etdate Svelte',
			img: 'https://i.imgur.com/vH4sht5.png',
			url: 'https://github.com/abdetaterefe/et-date-svelte',
			desc: 'Ethiopian Date Picker Library for Svelte, it have calendar and datepicker',
			languages: ['Svelte', 'TypeScript']
		},
		{
			title: 'Zare',
			img: 'https://i.imgur.com/rOOhrJw.png',
			url: 'https://github.com/abdetaterefe/zare',
			desc: 'A website shows current ethipian date, it also have date converter and arabic to geez number converter',
			languages: ['Svelte']
		},
		{
			title: 'Phone Recap',
			img: 'https://i.imgur.com/1hLMvzd.jpeg',
			url: 'https://github.com/abdetaterefe/phone_recap',
			desc: 'Phone Recap is an app that scans your call history and shows you useful stats and graphs.',
			languages: ['Flutter', 'Dart']
		},
		// {
		// 	title: 'Misage',
		// 	img: 'https://docs.telegram-channel-scraper.abdeta.dev/favicon.svg',
		// 	url: 'https://github.com/abdetaterefe/misage',
		// 	desc: 'Misage appears to be a standard SMS application, but it contains fake messages from almost all banks. ',
		// 	languages: ['Flutter', 'Dart']
		// },
		{
			title: 'How poor am i',
			img: 'https://i.imgur.com/FNcnTLP.png',
			url: 'https://github.com/abdetaterefe/how-poor-am-i',
			desc: 'tells how much money I have in my bank account',
			languages: ['Svelte']
		},
		{
			title: 'Svelte Client',
			img: 'https://i.imgur.com/0qtWZZp.png',
			url: 'https://github.com/abdetaterefe/svelte-client',
			desc: 'Sveltekit | Chapa | REAL_SHOP | ecommerce starter ',
			languages: ['Svelte']
		}
	];

	return { projects };
}) satisfies PageServerLoad;
