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
    id: 3,
    title: 'Mindful Market',
    desc: "Sustainability web app built for the CodeRed Astra 2025 Hackathon. Powered by Google's Gemini LLM for real-time eco scoring and carbon footprint analysis of products.",
    githubUrl: 'https://github.com/KhadeejaTap/mindfulmarket',
    tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind'],
  },
  {
    id: 1,
    title: 'Students for Refugees Website',
    desc: '1st prize winning website designed and developed for the UH 2025 CodeJam. Designed end-to-end in Figma and built with HTML, CSS, and JavaScript.',
    githubUrl: 'https://github.com/KhadeejaTap/UH-CodeJam-Team-1st-Place-Winner-2025',
    tags: ['Figma', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Driver Drowsiness Detector',
    desc: 'Real-time drowsiness detection personal project built using computer vision to identify facial fatigue symptoms.',
    githubUrl: 'https://github.com/KhadeejaTap/Driver-Drowsiness-Detection-System',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
  },
  {
    id: 4,
    title: 'Tamagotchi Game',
    desc: 'A Tamagotchi-style virtual pet game class project where users can feed, play with, and care for their digital pet.',
    githubUrl: 'https://github.com/KhadeejaTap/Tamagotchi-Game',
    tags: ['C++', 'Object Oriented Programming'],
  },
];
