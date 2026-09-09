/**
 * experience.ts – work experience and leadership entries.
 * Add new roles here; no component changes needed.
 */

export interface ExperienceEntry {
  id: number;
  role: string;
  org: string;
  location: string;
  period: string;
  type: string; // e.g. 'Research' | 'Internship' | 'Part-Time' | 'Leadership'
  bullets: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    role: 'Undergraduate Research Assistant',
    org: 'Intelligent Structures & AI Lab, University of Houston',
    location: 'Houston, TX',
    period: 'Jan 2026 – Present',
    type: 'Research',
    bullets: [
      'Conducting research in computer vision and AI applied to intelligent structural systems.',
      'Developing and evaluating ML models for real-world sensing and detection tasks.',
    ],
  },
  {
    id: 2,
    role: 'Vice President',
    org: 'Cougarettes, University of Houston',
    location: 'Houston, TX',
    period: 'Jan 2026 – Present',
    type: 'Leadership',
    bullets: [
      "Lead executive operations and strategic planning for one of UH's prominent student organizations.",
      "Coordinate events, manage team communications, and represent the organization at university functions.",
    ],
	},
	{
    id: 3,
    role: 'Sales Representative & Operations Assistant',
    org: 'Modest Essentials, LLC',
    location: 'Stafford, TX',
    period: 'Sep 2024 – Jan 2026',
    type: 'Part-Time',
    bullets: [
      'Managed customer communications, inventory, fulfillment, and logistics while improving operational workflows.',
      'Resolved customer issues, coordinated orders, and supported process improvements across daily operations.',
    ],
  },
  {
    id: 4,
    role: 'Lead Instructor / Administrator',
    org: 'Islamic Society of Greater Houston',
    location: 'Stafford, TX',
    period: 'Sep 2023 – Jul 2025',
    type: 'Part-Time',
    bullets: [
      'Designed and adapted lesson plans for 40+ students, fostering an inclusive and responsive classroom environment.',
      'Executed core administrative operations: coordinated staff, developed teaching materials, and maintained communication with supervisors and guardians.',
    ],
  },
  {
    id: 5,
    role: 'Student Advisor Intern',
    org: 'Stride, Inc',
    location: 'Remote',
    period: 'Sep 2023 – Mar 2024',
    type: 'Internship',
    bullets: [
      'Produced high-impact marketing videos and collaborated cross-functionally to design creative campaigns aligned with brand messaging.',
      'Conducted comprehensive market research to identify trends, analyze competitor strategies, and provide actionable insights for campaign development.',
    ],
  },
];
