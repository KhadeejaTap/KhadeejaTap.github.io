import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

function getEmbedUrl(url: string): string {
  const screenPalMatch = url.match(/go\.screenpal\.com\/(?:watch|player)\/([a-zA-Z0-9]+)/);
  if (screenPalMatch) {
    return `https://go.screenpal.com/player/${screenPalMatch[1]}`;
  }
  return url;
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900/90 text-white">
            <h3 className="font-semibold text-base sm:text-lg truncate pr-4">{title} Demo</h3>
            <div className="flex items-center gap-3">
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-1"
                title="Open in new tab"
              >
                <FiExternalLink size={18} />
              </a>
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-zinc-800"
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* 16:9 Video Player */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={embedUrl}
              title={`${title} Demo`}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              scrolling="no"
              allow="encrypted-media *;"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
