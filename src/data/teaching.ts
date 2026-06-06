export type TeachingEntry = {
	title: string
	term?: string
	institution?: string
	instructor?: string
	description?: string[]
}

export const instructor: TeachingEntry[] = [
	{
		title: 'The Making of Emotions: Language, Culture and Constructionism',
		term: 'Summer 2025, 2026',
		institution: 'Veritas China, Shanghai, China',
		description: [
			'Why does a furrowed brow sometimes signal doubt, but other times anger? Why do some Chinese emotion words have no direct equivalents in other languages? Does “labeling” our emotions always help us “manage” them? Why are “emotion values” so important to us, yet so difficult to grasp?',
			'Emotions are more complex and variable than we often assume. Real, felt bodily responses; deeply rooted cultural backgrounds; and constantly shifting social contexts all shape how we conceptualize, experience, and understand emotion. Emotions are not simply “born this way”; they are “made.”',
			'In this course, we will explore one of the most recent theories in affective science: the theory of constructed emotion. By comparing it with other major theories, we will examine how it helps explain the complexity of emotion. Using this theoretical framework, we will consider how individuals “construct” emotional experiences. We will also take a cross-cultural perspective to understand the diversity of emotion concepts across cultures. In addition, we will examine the role of language in emotion perception and experience, and use what we learn to critically reflect on the hidden assumptions behind popular ideas such as “emotion values” and “emotion regulation.” Through this exploration of emotion’s complexity, we will also consider how knowledge and reflection can help us better understand ourselves and others.',
		],
	},
]

export const guestLecturer: TeachingEntry[] = [
	{
		title: 'Introduction to Social Psychology',
		instructor: 'Dr. Maria Gendron, Yale University',
	},
]

export const graduateTeachingFellow: TeachingEntry[] = [
	{
		title: 'Research Methods, writing intensive (PSYC 253)',
		term: 'Spring 2024',
		instructor: 'Dr. Nicolò Cesana-Arlotti, Yale University',
	},
	{
		title: 'Introduction to Social Psychology (PSYC 150)',
		term: 'Fall 2024',
		instructor: 'Dr. Maria Gendron, Yale University',
	},
	{
		title: 'The Criminal Mind (PSYC 141)',
		term: 'Spring 2023',
		instructor: 'Dr. Arielle Baskin-Sommers, Yale University',
	},
	{
		title: 'The Modern Unconscious (PSYC 315)',
		term: 'Fall 2022',
		instructor: 'Dr. John Bargh, Yale University',
	},
]

export const undergraduateTeachingAssistant: TeachingEntry[] = [
	{
		title: 'Affective and Social Neuroscience (COGST 3660)',
		term: 'Fall 2019',
		instructor: 'Dr. Adam K. Anderson, Cornell University',
	},
]
