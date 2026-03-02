/**
 * skills.ts – grouped skill list displayed in the Skills section.
 * Add or remove entries here; no component changes required.
 */

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & ML',
    items: ['React', 'OpenCV', 'NumPy', 'dlib', 'Vite'],
  },
  {
    category: 'Tools & Design',
    items: ['Git', 'Figma', 'VS Code'],
  },
];

