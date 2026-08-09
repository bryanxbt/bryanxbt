import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://bryanxbt.github.io/bryanxbt"),
  title: "Bryan Elliott — BryanXBT",
  description:
    "Bitcoin brand building, community growth, and event programming. From zero to 300K+ engaged members.",
  icons: {
    icon: [
      { url: `${base}/favicon.ico`, sizes: "any" },
      {
        url: `${base}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${base}/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `${base}/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: `${base}/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: `${base}/site.webmanifest`,
  openGraph: {
    title: "Bryan Elliott — BryanXBT",
    description:
      "Bitcoin brand building, community growth, and event programming.",
    type: "website",
    images: ["https://bryanxbt.github.io/bryanxbt/assets/bryan-headshot.png"],
  },
  twitter: {
    card: "summary",
    site: "@bryanxbt",
    creator: "@bryanxbt",
    title: "Bryan Elliott — BryanXBT",
    description:
      "Bitcoin brand builder. Community operator. From zero to 300K+ engaged members.",
    images: ["https://bryanxbt.github.io/bryanxbt/assets/bryan-headshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
