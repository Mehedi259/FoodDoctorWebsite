// Pages that get a generated Open Graph image (see scripts/generate-og.mjs)
export const OG_PAGES = ["home", "about", "privacy", "terms"] as const;

export type OgPage = (typeof OG_PAGES)[number];
