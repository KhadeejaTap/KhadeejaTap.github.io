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
    title: 'Depth Refinement ViT',
    desc: 'Predict seamless, high-quality depth maps for downstream 3D vision applications by developing an RGBD fusion framework that leverages Vision Transformers (ViT) for super-resolution and error correction.',
    githubUrl: 'https://github.com/KhadeejaTap/RGBD--ViT',
    tags: ['Python', 'Pytorch', 'ML/AI'],
	},
	{
    id: 6,
    title: 'Depth Refinement CNN',
    desc: 'Developed a depth-enhancement project inspired by research on combining ToF and RGB data, with the goal of creating more complete and accurate depth maps. This work supports improved performance in downstream computer vision tasks and provides a foundation for future research.',
    githubUrl: 'https://github.com/KhadeejaTap/RGBD--CNN',
    tags: ['Python', 'Pytorch', 'ML/AI'],
  },
  {
    id: 4,
    title: 'Mindful Market',
    desc: "Sustainability web app built for the CodeRed Astra 2025 Hackathon. Powered by Google's Gemini LLM for real-time eco scoring and carbon footprint analysis of products.",
    githubUrl: 'https://github.com/KhadeejaTap/mindfulmarket',
    tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Students for Refugees Website',
    desc: '1st prize winning website designed and developed for the UH 2025 CodeJam. Designed end-to-end in Figma and built with HTML, CSS, and JavaScript.',
    githubUrl: 'https://github.com/KhadeejaTap/UH-CodeJam-Team-1st-Place-Winner-2025',
    tags: ['Figma', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Driver Drowsiness Detector',
    desc: 'Real-time drowsiness detection personal project built using computer vision to identify facial fatigue symptoms.',
    githubUrl: 'https://github.com/KhadeejaTap/Driver-Drowsiness-Detection-System',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
  },
  {
    id: 5,
    title: 'Tamagotchi Game',
    desc: 'A Tamagotchi-style virtual pet game class project where users can feed, play with, and care for their digital pet.',
    githubUrl: 'https://github.com/KhadeejaTap/Tamagotchi-Game',
    tags: ['C++', 'Object Oriented Programming'],
	}
];
