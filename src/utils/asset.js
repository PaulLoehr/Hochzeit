// Utility to prefix local asset paths with Vite's base URL.
// Accepts full URLs (http/https/Protocol-relative) unchanged.
export function withBase(path) {
  if (!path) return path;
  // Leave absolute URLs alone
  if (/^(https?:)?\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL || '/';
  // If already starts with base, return as-is
  if (path.startsWith(base)) return path;
  // Remove leading slash to avoid double slashes, then prefix base
  return base + (path.startsWith('/') ? path.slice(1) : path);
}

export default withBase;
