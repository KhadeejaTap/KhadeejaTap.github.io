import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { type Project } from '../data/projects';
import { debug } from '../utils/debug';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isEmbed = Boolean(project.embedUrl);

  // Debug log: track which render path each card takes
  debug('ProjectCard', `Rendering "${project.title}"`, {
    mode: isEmbed ? 'iframe-embed' : 'image',
    hasLiveUrl: Boolean(project.liveUrl),
  });

  return (
    <motion.div
      className="flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-700
                 bg-white dark:bg-zinc-800 overflow-hidden shadow-sm
                 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Media area */}
      {isEmbed ? (
        // BUG FIX: original used an inline <script> tag alongside the <iframe>.
        // React silently drops injected <script> nodes; the iframe src alone
        // renders the ScreenPal video correctly, so we use only the iframe.
        <div className="relative w-full" style={{ paddingTop: '62.54%' }}>
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={project.embedUrl}
            allowFullScreen
            scrolling="no"
            title={project.title}
          />
        </div>
      ) : project.image ? (
        <div className="relative w-full" style={{ paddingTop: '62.54%' }}>
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : null}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed flex-1">
          {project.desc}
        </p>

        {/* Tech stack tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-700
                           text-zinc-600 dark:text-zinc-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400
                       hover:underline"
          >
            <FiGithub size={15} /> Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400
                         hover:underline"
            >
              <FiExternalLink size={15} /> View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
