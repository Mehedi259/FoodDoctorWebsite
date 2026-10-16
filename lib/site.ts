// Public site URL, read from NEXT_PUBLIC_SITE_URL (see .env.example).
const configured = process.env.NEXT_PUBLIC_SITE_URL;

if (!configured && process.env.NODE_ENV === "production") {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL is not set. Copy .env.example to .env.local and set it."
  );
}

export const SITE_URL = (configured ?? "http://localhost:3000").replace(/\/+$/, "");
