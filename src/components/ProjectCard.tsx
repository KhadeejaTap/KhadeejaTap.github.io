import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiPlay } from 'react-icons/fi';
import { type Project } from '../data/projects';
import VideoModal from './VideoModal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('a, button')) return;
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.div
        onClick={handleCardClick}
        className="flex flex-col h-full rounded-xl border border-zinc-200 dark:border-zinc-700
                   bg-white dark:bg-zinc-800 overflow-hidden shadow-sm
                   hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Content */}
        <div className="flex flex-col flex-1 p-6 gap-3">
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
          <div className="flex items-center gap-4 mt-auto pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400
                           hover:underline"
              >
                <FiGithub size={15} /> Source Code
              </a>
            )}
            {project.liveUrl && (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400
                           hover:underline cursor-pointer bg-transparent dark:bg-transparent border-0 p-0 m-0
                           leading-normal font-sans shadow-none outline-none focus:outline-none"
              >
                <FiPlay size={15} /> Watch Demo
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Video Modal Popup */}
      {project.liveUrl && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoUrl={project.liveUrl}
          title={project.title}
        />
      )}
    </>
  );
}
