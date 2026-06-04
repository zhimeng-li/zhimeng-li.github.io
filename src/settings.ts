export const profile = {
	fullName: 'Zhimeng Li',
	title: 'PhD Candidate in Psychology',
	institute: 'Yale University',
	author_name: 'Zhimeng Li', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Emotion',
			description: 'How people identify, segment, and make meaning of emotions across contexts.',
			field: 'emotion',
		},
		{
			title: 'Culture and Language',
			description: 'How cultural contexts and emotion concepts shape social perception and inference.',
			field: 'culture-language',
		},
		{
			title: 'Empathy',
			description: 'How people understand others’ experiences, especially across social and cultural boundaries.',
			field: 'empathy',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display.
// Keep future social URLs blank until real, public profiles are ready to add.
export const social = {
	email: 'zhimeng.li@yale.edu',
	linkedin: '',
	x: '',
	bluesky: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://zhimeng-li.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'academic', // Custom DaisyUI theme defined in tailwind.config.mjs
	darkTheme: 'academic',
	excerptLength: 200,
	postPerPage: 5,
	base: '', // Root deployment for the zhimeng-li.github.io user GitHub Pages site.
}

export const seo = {
	default_title: 'Zhimeng Li | Psychology PhD Candidate',
	default_description: 'Personal academic website for Zhimeng Li, PhD Candidate in Psychology at Yale University.',
	default_image: '/favicon.svg',
}
