/**
 * debug.ts – lightweight dev-only logger.
 *
 * All calls are silenced in production builds automatically via
 * Vite's `import.meta.env.DEV` flag (false after `npm run build`).
 *
 * Usage:
 *   import { debug, debugWarn } from '../utils/debug';
 *   debug('Navbar', 'menu toggled', { isOpen });
 */

const isDev = import.meta.env.DEV;

/**
 * Log an informational debug message.
 * @param component - Name of the component / module emitting the log.
 * @param message   - Description of the event.
 * @param data      - Optional payload to inspect.
 */
export function debug(component: string, message: string, data?: unknown): void {
  if (isDev) {
    console.log(`[DEBUG] [${component}] ${message}`, ...(data !== undefined ? [data] : []));
  }
}

/**
 * Log a warning-level debug message.
 * Useful for flagging unexpected but non-fatal states during development.
 */
export function debugWarn(component: string, message: string, data?: unknown): void {
  if (isDev) {
    console.warn(`[WARN]  [${component}] ${message}`, ...(data !== undefined ? [data] : []));
  }
}
