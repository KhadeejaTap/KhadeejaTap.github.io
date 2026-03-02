export default function Footer() {
  return (
    <footer className="py-6 bg-zinc-900 text-center text-sm text-zinc-400 space-y-3">
      <p>Last updated March 2026</p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {['React', 'TypeScript', 'Vite', 'Tailwind CSS'].map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-300 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </footer>
  );
}
