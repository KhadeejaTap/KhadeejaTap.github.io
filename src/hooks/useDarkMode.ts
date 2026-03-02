import { useEffect, useState } from 'react';
import { debug } from '../utils/debug';

const STORAGE_KEY = 'portfolio-dark-mode';

/**
 * useDarkMode – persists the user's dark/light preference in localStorage
 * and toggles the `dark` class on <html> so Tailwind's `dark:` variants apply.
 *
 * Returns [isDark, toggleDark].
 *
 * Bug fixed from original: the old site had no dark mode at all. This hook
 * initialises from localStorage so the preference survives page refreshes.
 */
export function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    // If no preference stored, default to dark mode
    if (stored !== null) {
      const parsed = stored === 'true';
      debug('useDarkMode', 'Loaded preference from localStorage', { isDark: parsed });
      return parsed;
    }
    debug('useDarkMode', 'No localStorage preference; defaulting to dark mode');
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEY, String(isDark));
    debug('useDarkMode', 'Applied dark class + saved to localStorage', { isDark });
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => {
      debug('useDarkMode', 'Toggle called', { from: prev, to: !prev });
      return !prev;
    });
  };

  return [isDark, toggleDark];
}
