import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Rangga Cahyadi | IT Support & IT Administrator Portfolio",
  description:
    "Portofolio Profesional Informatika Rangga Cahyadi - Spesialis IT Technical Support, IT Administration, Cisco Networking & Cybersecurity. Lulusan D3 Manajemen Informatika Polinela.",
  keywords: [
    "Rangga Cahyadi",
    "IT Support",
    "IT Administrator",
    "Manajemen Informatika",
    "CCNA Cisco",
    "Cybersecurity",
    "Bandung IT",
    "Portfolio Informatika",
  ],
  authors: [{ name: "Rangga Cahyadi" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Rangga Cahyadi | IT Support & IT Administrator",
    description:
      "Portofolio Profesional Rangga Cahyadi - Spesialis IT Technical Support, IT Administration, Cisco Networking & UI/UX Designer.",
    url: "http://localhost:3000",
    siteName: "Rangga Cahyadi Portfolio",
    images: [
      {
        url: "/assets/Pas Photo/Potret Profesional dengan Logo Microsoft.png",
        width: 800,
        height: 1067,
        alt: "Rangga Cahyadi - IT Support & IT Administrator",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rangga.IT" />
      </head>
      <body className="cyber-body">{children}</body>
    </html>
  );
}
