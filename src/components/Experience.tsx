import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from '../data/experience';
import { debug } from '../utils/debug';

const TYPE_COLORS: Record<string, string> = {
  Research:    'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  Leadership:  'bg-amber-100  text-amber-700  dark:bg-amber-900/40  dark:text-amber-300',
  Internship:  'bg-sky-100    text-sky-700    dark:bg-sky-900/40    dark:text-sky-300',
  'Part-Time': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
};

// Half the ring diameter (20px ring → 10px)
const RING_HALF = 10;

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Measure the timeline track height and re-measure on resize
  useEffect(() => {
    debug('Experience', 'Section mounted', { entryCount: experiences.length });

    const measure = () => {
      if (lineRef.current) {
        const h = lineRef.current.offsetHeight;
        setLineHeight(h);
        debug('Experience', 'Timeline height measured', { px: h });
      }
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (lineRef.current) ro.observe(lineRef.current);
    return () => ro.disconnect();
  }, []);

  // Scroll progress scoped to the section (0 when section top hits center, 1 when bottom hits center)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  // Fill line: scaleY grows from 0 → 1 as scroll progresses (transformOrigin: top)
  const fillScaleY = scrollYProgress;

  // Ring: Y travels from -RING_HALF (centered on start) to lineHeight-RING_HALF (centered on end)
  const ringY = useTransform(scrollYProgress, [0, 1], [-RING_HALF, lineHeight - RING_HALF]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="flex gap-8">
          {/* ── Timeline track (left column) ── */}
          <div className="relative flex-shrink-0 w-5 flex justify-center">
            {/* Static grey track */}
            <div
              ref={lineRef}
              className="absolute top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700"
            />

            {/* Sky-blue fill that grows from top as user scrolls */}
            <motion.div
              className="absolute top-0 w-0.5 bg-sky-500 origin-top"
              style={{ scaleY: fillScaleY, height: '100%' }}
            />

            {/* Single travelling ring indicator */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full
                         border-2 border-sky-500 bg-white dark:bg-zinc-900"
              style={{ y: ringY, top: 0 }}
            />
          </div>

          {/* ── Experience cards (right column) ── */}
          <div className="flex flex-col gap-10 flex-1 pb-2">
            {experiences.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {entry.role}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${TYPE_COLORS[entry.type] ?? 'bg-zinc-100 text-zinc-600'}`}
                  >
                    {entry.type}
                  </span>
                </div>

                <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-0.5">
                  {entry.org}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                  {entry.location} · {entry.period}
                </p>

                <ul className="space-y-1">
                  {entry.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed
                                 pl-3 border-l border-zinc-200 dark:border-zinc-700"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

