import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antonio Nusco | Expert Web Developer | Prestashop, Wordpress, Next.js, Angular & More",
  description: "Discover Antonio Nusco's portfolio showcasing expertise in HTML5, CSS3, JavaScript, Angular, Next.js, Node.js, PrestaShop, WordPress, and SEO optimization. Explore innovative web solutions and collaborative projects!",
  keywords: "portfolio, web developer, HTML5, CSS3, JavaScript, Angular, Next.js, Node.js, PrestaShop, WordPress, SEO optimization, innovative solutions, Antonio Nusco",
  authors: [{ name: "Antonio Nusco", url: "https://antonio-nusco.it" }], // Modificato da author a authors
  robots: "index, follow",
  // openGraph: {
  //   title: "Antonio Nusco | Expert Web Developer | HTML, CSS, JavaScript, Node.js & More",
  //   description: "Discover Antonio Nusco's portfolio showcasing expertise in HTML5, CSS3, JavaScript, Angular, Next.js, Node.js, PrestaShop, WordPress, and SEO optimization. Explore innovative web solutions and collaborative projects!",
  //   url: "https://antonio-nusco.it",
  //   images: [
  //     {
  //       url: "https://antonio-nusco.it/path/to/your-image.jpg", // Cambia con il percorso corretto dell'immagine
  //       width: 800,
  //       height: 600,
  //       alt: "Antonio Nusco Portfolio",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Antonio Nusco | Expert Web Developer | HTML, CSS, JavaScript, Node.js & More",
  //   description: "Discover Antonio Nusco's portfolio showcasing expertise in HTML5, CSS3, JavaScript, Angular, Next.js, Node.js, PrestaShop, WordPress, and SEO optimization. Explore innovative web solutions and collaborative projects!",
  //   images: ["https://antonio-nusco.it/path/to/your-image.jpg"], // Cambia con il percorso corretto dell'immagine
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="temp-layout">
            <ThemeSwitch />
            <Sidebar />
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
