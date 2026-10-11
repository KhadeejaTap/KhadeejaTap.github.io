/**
 * projects.ts – single source of truth for portfolio project data.
 *
 * To add a project: append an entry to the `projects` array.
 * No component code needs to change.
 *
 * Fields:
 *   id        – unique key for React lists
 *   title     – displayed project name
 *   desc      – short description shown on the card
 *   githubUrl – link to source code repo
 *   liveUrl   – (optional) link to live demo
 *   tags      – tech stack chips shown on the card
 */

export interface Project {
	id: number;
	title: string;
	desc: string;
	githubUrl: string;
	liveUrl?: string;
	tags?: string[]; // tech stack chips shown on the card
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'UH CodeJam 2025 (1st Place Winner)',
		desc: 'Designed and developed a website for a real nonprofit client in a team of 4 within 6 hours during the UH CodeJam (2025). Focused on an intuitive UX/UI design and functionality.',
		githubUrl: 'https://github.com/KhadeejaTap/UH-CodeJam-Team-1st-Place-Winner-2025',
		liveUrl: 'https://go.screenpal.com/watch/cOQoexnwMcb',
		tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
	},
	{
		id: 2,
		title: 'RGB-D Depth Completion',
		desc: '2 depth refinement models built to support digital twin research, both intake RGB and Time of Flight depth data and output corrected depth. Demoed solution uses a vision transformer model and another uses a CNN based model.',
		githubUrl: 'https://github.com/KhadeejaTap/RGBD--ViT',
		liveUrl: 'https://go.screenpal.com/watch/cOQofOnwM16',
		tags: ['PyTorch', 'TensorBoard', 'Linux Cluster Computing'],
	},
	{
		id: 3,
		title: 'Render-ReflectNet',
		desc: 'Automated pipeline that generates synthetic Time-of-Flight datasets to reduce the sim-to-real performance gap.',
		githubUrl: 'https://github.com/KhadeejaTap/Render-ReflectNet',
		tags: ['Python', 'Blender', '3D Rendering', 'Mitsuba3'],
	},
	{
		id: 4,
		title: 'Mindful Market',
		desc: 'Sustainability web application built in a team of 4 for the CodeRed Astra hackathon that provides sustainability insight to help consumers make better choices. Features include explanations and alternative suggestions from Google Gemini and interactive charts.',
		githubUrl: 'https://github.com/KhadeejaTap/mindfulmarket',
		liveUrl: 'https://go.screenpal.com/watch/cOQoeonwsSx',
		tags: ['TypeScript', 'React', 'Tailwind CSS'],
	},
	{
		id: 5,
		title: 'visRAG',
		desc: 'Multimodal search and classification tool with LLM prompting to support research.',
		githubUrl: 'https://github.com/KhadeejaTap/visRAG',
		tags: ['Python', 'Vector Embeddings', 'RAG'],
	},
	{
		id: 6,
		title: 'Driver Drowsiness Detector',
		desc: 'Real-time safety system that monitors eye and head movement through a webcam to trigger audio alerts when signs of fatigue are detected.',
		githubUrl: 'https://github.com/KhadeejaTap/Driver-Drowsiness-Detection-System',
		tags: ['Python', 'OpenCV', 'MediaPipe'],
	},
];
