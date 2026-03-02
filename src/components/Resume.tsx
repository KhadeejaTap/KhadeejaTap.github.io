import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-white dark:bg-zinc-900">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Resume</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          Download a PDF copy of my resume.
        </p>
        {/* BUG FIX from original: the .btn CSS class was used on this link but
            was never defined in styles.css — only the `button` element selector existed.
            Replaced with explicit Tailwind classes. */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20
                     backdrop-blur-sm text-sm font-semibold text-zinc-800 dark:text-white
                     transition-colors duration-200"
        >
          <FiDownload size={18} />
          Download PDF
        </a>
      </motion.div>
    </section>
  );
}
