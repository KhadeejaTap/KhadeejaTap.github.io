import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Light mode: solid white / Dark mode: dark wash over image */}
      <div className="absolute inset-0 bg-white dark:bg-black/60" />

      {/* Content — dark text in light mode, white in dark mode */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Open to Work badge */}
        <motion.div
          className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full
                     bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20
                     backdrop-blur-sm text-sm font-semibold text-black dark:text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Open to Work
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-zinc-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Khadeeja Tapkirwala
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-zinc-700 dark:text-zinc-200 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Undergraduate Research Assistant &nbsp;·&nbsp; CS Junior, Data Science
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="/resume.pdf"
            download="khadeeja_tapkirwala_resume"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                       bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20
                       backdrop-blur-sm text-sm font-semibold text-zinc-800 dark:text-white
                       transition-colors duration-200"
          >
            <FiDownload size={15} />
            Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
