import { type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { debug } from '../utils/debug';

// Formspree endpoint – same as the original site
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwykkyd';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const data = new FormData(form);
    debug('Contact', 'Form submission attempted', {
      name: data.get('name'),
      email: data.get('email'),
      messageLength: String(data.get('message') ?? '').length,
    });
    // Native form POST to Formspree – no preventDefault so the form submits normally
  };

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">Contact</h2>

        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mb-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600
                       bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600
                       bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-600
                       bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
          />
          <button
            type="submit"
            className="py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg
                       transition-colors duration-200"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Or email directly:{' '}
          <a
            href="mailto:khadeejatapkirwala@gmail.com"
            className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 hover:underline"
          >
            <FiMail size={14} />
            khadeejatapkirwala@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-5 text-zinc-500 dark:text-zinc-400">
          <a
            href="https://linkedin.com/in/khadeeja-t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-500 transition-colors"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="https://github.com/KhadeejaTap"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-sky-500 transition-colors"
          >
            <FiGithub size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
