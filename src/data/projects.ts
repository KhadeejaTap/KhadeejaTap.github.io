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
 *   image     – path to screenshot in /public (used when embedUrl is absent)
 *   githubUrl – link to source code repo
 *   embedUrl  – (optional) ScreenPal iframe src; renders a video instead of image
 *   liveUrl   – (optional) link to live demo
 */

export interface Project {
  id: number;
  title: string;
  desc: string;
  image?: string;
  githubUrl: string;
  embedUrl?: string;
  liveUrl?: string;
  tags?: string[]; // tech stack chips shown on the card
}

export const projects: Project[] = [
  {
    id: 3,
    title: 'Mindful Market',
    desc: 'Sustainability web app built for the CodeRed Astra 2025 Hackathon. Integrates Google Gemini to generate automated eco scores and carbon impact evaluations for products.',
    embedUrl: 'https://go.screenpal.com/player/cOenfwnZe7B?ff=1&title=0',
    githubUrl: 'https://github.com/KhadeejaTap/mindfulmarket',
    liveUrl: 'https://devpost.com/software/mindfulmarket',
    tags: ['React', 'TypeScript', 'Gemini API', 'Tailwind'],
  },
  {
    id: 1,
    title: 'Students for Refugees Website',
    desc: 'SFR website designed and developed for the UH 2025 CodeJam. Designed end-to-end in Figma and built with HTML, CSS, and JavaScript.',
    image: '/prjct1.png',
    githubUrl: 'https://github.com/KhadeejaTap/UH-CodeJam-Team-1st-Place-Winner-2025',
    tags: ['Figma', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Driver Drowsiness Detector',
    desc: 'Real-time drowsiness detection personal project built using computer vision to identify facial fatigue symptoms.',
    embedUrl: 'https://go.screenpal.com/player/cT6lqnnbIAY?ff=1&title=0',
    githubUrl: 'https://github.com/KhadeejaTap/Driver-Drowsiness-Detection-System',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
  },
  {
    id: 4,
    title: 'Tamagotchi Game',
    desc: 'A Tamagotchi-style virtual pet game class project where users can feed, play with, and care for their digital pet.',
    embedUrl: 'https://go.screenpal.com/player/cThe32nQ0dW?ff=1&title=0',
    githubUrl: 'https://github.com/KhadeejaTap/Tamagotchi-Game',
    tags: ['C++', 'Object Oriented Programming'],
  },
];
