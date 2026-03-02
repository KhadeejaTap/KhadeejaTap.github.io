import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-zinc-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="flex items-start gap-5 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700
                     bg-white dark:bg-zinc-800 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mt-1 p-2.5 rounded-lg bg-sky-100 dark:bg-sky-900/30">
            <FiBookOpen size={22} className="text-sky-600 dark:text-sky-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              University of Houston
            </h3>
            <p className="text-sky-600 dark:text-sky-400 font-medium text-sm mt-0.5">
              B.S. Computer Science · Data Science Concentration
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
              Houston, TX · Expected May 2027
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Data Science', 'Machine Learning', 'Computer Vision', 'Algorithms', 'Software Engineering'].map((course) => (
                <span
                  key={course}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700
                             text-zinc-600 dark:text-zinc-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
