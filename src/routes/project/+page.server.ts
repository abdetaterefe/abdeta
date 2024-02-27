import type { PageServerLoad } from './$types';

export const load = (async () => {
	const projects = [
		{
			title: 'Etdate Svelte',
			url: 'https://github.com/abdetaterefe/et-date-svelte',
			desc: 'Ethiopian Date Picker Library for Svelte, it have calendar and datepicker',
			languages: ['Svelte', 'TypeScript']
		},
		{
			title: 'Zare',
			url: 'https://github.com/abdetaterefe/zare',
			desc: 'A website shows current ethipian date, it also have date converter and arabic to geez number converter',
			languages: ['Svelte']
		},
		{
			title: 'Phone Recap',
			url: 'https://github.com/abdetaterefe/phone_recap',
			desc: 'Phone Recap is an app that scans your call history and shows you useful stats and graphs.',
			languages: ['Dart']
		},
		{
			title: 'Misage',
			url: 'https://github.com/abdetaterefe/misage',
			desc: 'Misage appears to be a standard SMS application, but it contains fake messages from almost all banks. ',
			languages: ['Dart']
		},
		{
			title: 'How poor am i',
			url: 'https://github.com/abdetaterefe/how-poor-am-i',
			desc: 'tells how much money I have in my bank account',
			languages: ['Svelte']
		},
		{
			title: 'Svelte Client',
			url: 'https://github.com/abdetaterefe/svelte-client',
			desc: 'Sveltekit | Chapa | REAL_SHOP | ecommerce starter ',
			languages: ['Svelte']
		}
	];

	return { projects };
}) satisfies PageServerLoad;
