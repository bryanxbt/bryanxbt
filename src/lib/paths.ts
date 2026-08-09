/** Empty locally; `/bryanxbt` on GitHub Pages (see next.config.ts). */
export const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) =>
  `${base}${path.startsWith("/") ? path : `/${path}`}`;
