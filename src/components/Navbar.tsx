import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { debug } from '../utils/debug';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    const next = !menuOpen;
    debug('Navbar', 'Mobile menu toggled', { isOpen: next });
    setMenuOpen(next);
  };

  // BUG FIX from original: closing menu on link click was done via manual DOM
  // event listeners that could fail if the element didn't exist. Here it's
  // handled cleanly with React state.
  const handleLinkClick = (label: string) => {
    debug('Navbar', 'Nav link clicked, closing menu', { label });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-900 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — full name, smaller weight */}
        <span className="font-medium text-sm tracking-wide">Khadeeja Tapkirwala</span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-sky-400 transition-colors duration-200"
                onClick={() => handleLinkClick(label)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: dark toggle + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              debug('Navbar', 'Dark mode toggle clicked', { isDark });
              toggleDark();
            }}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full hover:bg-zinc-700 transition-colors duration-200"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Hamburger – mobile only */}
          <button
            className="md:hidden p-2 rounded hover:bg-zinc-700 transition-colors duration-200"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-zinc-800 px-6 pb-4 gap-3 text-sm font-medium">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block py-1 hover:text-sky-400 transition-colors duration-200"
                onClick={() => handleLinkClick(label)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
