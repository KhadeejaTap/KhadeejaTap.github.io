import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-zinc-900">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">About Me</h2>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
          Pursuing a B.S. in Computer Science (Data Science concentration) at the University of Houston, graduating December 2027.
          Currently an Undergraduate Research Assistant at the Structures &amp; Artificial Intelligence Lab, UH, where I work on computer vision research.
          Actively seeking opportunities in software engineering, data science, and computer vision.
        </p>
      </motion.div>
    </section>
  );
}
