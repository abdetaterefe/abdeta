interface IConfig {
	me: {
		name: string;
		job: string;
		stack: string[];
		hobby: string[];
		projectLink: string;
	};
	socials: {
		[name: string]: string;
	};
	projects: {
		[name: string]: {
			url: string;
			tags: string[];
		};
	};
	og: {
		image: string;
	};
}

export const Config: IConfig = {
	me: {
		name: 'Abdeta Terefe',
		job: 'developer',
		stack: ['Java', 'Svelte', 'Nextjs', 'React'],
		hobby: ['Drawing', 'Gaming', 'Cooking'],
		projectLink: 'https://github.com/abdetaterefe?tab=repositories'
	},
	socials: {
		twitter: 'https://twitter.com/abdetaterefe',
		github: 'https://github.com/abdetaterefe',
		instagram: 'https://instagram.com/abdetaterefe',
		telegram: 'https://t.me/abdetaterefe'
	},
	projects: {
		'Etdate Svelte': {
			url: 'https://github.com/abdetaterefe/et-date-svelte',
			tags: ['svelte', 'oss', 'library', 'calendar', 'date']
		},
		Zare: {
			url: 'https://github.com/abdetaterefe/zare',
			tags: ['web', 'svelte', 'ui', 'calendar', 'date']
		},
		'Phone Recap': {
			url: 'https://github.com/abdetaterefe/phone_recap',
			tags: ['flutter', 'ui', 'statistic', 'app']
		},
		Misage: {
			url: 'https://github.com/abdetaterefe/misage',
			tags: ['flutter', 'app', 'fun']
		},
		'Bet API': {
			url: 'https://bet-api.abdeta.dev',
			tags: ['api', 'hono', 'bet']
		},
		'how poor am i': {
			url: 'https://github.com/abdetaterefe/how-poor-am-i',
			tags: ['svelte', 'web', 'fun']
		}
	},
	og: {
		image: ''
	}
};
