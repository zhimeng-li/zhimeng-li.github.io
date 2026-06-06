export type PublicationEntry = {
	title: string
	authors: string
	year: string
	containerPrefix?: string
	venueTitle?: string
	venueDetails?: string
	publisher?: string
	status?: string
	abstract?: string
	pdf?: string
	website?: string
}

export const publications: PublicationEntry[] = [
	{
		title: 'Emotions as Events: Cultural Contributions to Emotion Inference',
		authors: 'Gendron, M., & Li, Z.',
		year: 'in press',
		containerPrefix: 'In',
		venueTitle: 'Handbook of Emotion & Culture',
		publisher: 'Oxford University Press',
		status: 'in press',
	},
	{
		title: 'Labeling Behaviors are Associated with the Identification of Emotion Events',
		authors: 'Li, Z. & Gendron, M.',
		year: '2024',
		venueTitle: 'Proceedings of the Annual Meeting of the Cognitive Science Society',
		venueDetails: '46(0)',
		pdf: '/papers/cogsci-labeling-behaviors.pdf',
		website: 'https://escholarship.org/uc/item/4603420q',
	},
	{
		title: 'Emotional Event Perception is Related to Lexical Complexity and Emotion Knowledge',
		authors: 'Li, Z., Lu, H., Liu, D., Yu, A.N.C., & Gendron, M.',
		year: '2023',
		venueTitle: 'Communications Psychology',
		venueDetails: '1(1), Article 1',
		pdf: '/papers/commpsych-emotion-segmentation.pdf',
		website: 'https://www.nature.com/articles/s44271-023-00039-4',
	},
]

export const manuscripts: PublicationEntry[] = [
	{
		title: 'Semantic Modelling of Internal Concepts Captures Individual Differences in Emotion Recognition',
		authors: 'Gu, D., Binetti, N., Li, Z., Gendron, M., & Mareschal, I.',
		year: 'in prep',
		status: 'in prep',
	},
	{
		title: 'Development and Validation of the Cross-cultural Mental States Inference scale (CCMSI)',
		authors: 'Li, Z., Pant, Y., Goel, S., Lu, H., & Gendron, M.',
		year: 'in prep',
		status: 'in prep',
	},
	{
		title: 'Interpersonal Emotion Labeling as a Route to Co-Constructing Emotion',
		authors: 'Liu, E.Y., Li, Z., Clark, M.S., & Gendron, M.',
		year: 'submitted',
		status: 'submitted',
	},
	{
		title: 'Examining the Impact of Affect Labeling on the Segmentation of Emotion Events',
		authors: 'Li, Z., Wormwood, J., & Gendron, M.',
		year: 'in prep',
		status: 'in prep',
	},
	{
		title: 'Dynamic Emotion Perception Across Cultures and Cue Modalities',
		authors: 'Li, Z., Oh, D., Pant, Y., & Gendron, M.',
		year: 'in prep',
		status: 'in prep',
	},
]
