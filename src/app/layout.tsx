import type { Metadata } from "next";
import "../assets/globals.css";
import { ViewTransitions } from 'next-view-transitions';
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Providers } from "@/lib/react-query-client";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Santiago Baron Zuleta - Software Developer",
  description: "Mi sitio web con información sobre mi experiencia, proyectos, galería y contacto.",
  keywords: [
    "Santiago Baron",
    "Santiago Baron Zuleta",
    "Software Developer",
    "Developer",
    "Desarrollador de Software",
    "Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "Santiago",
    "Baron",
    "Baron Zuleta",
    "Portafolio",
    "Zuleta",
    "santiagobazul@hotmail.com"
  ],
  authors: [{ name: "Santiago Baron Zuleta", url: "https://santiagobaron.co" }],
  creator: "Santiago Baron Zuleta",
  publisher: "Santiago Baron Zuleta",
  robots: "index, follow",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "Santiago Baron Zuleta - Software Developer",
    description: "Mi sitio web con información sobre mi experiencia, proyectos, galería y contacto.",
    url: "https:/santiagobaron.co",
    siteName: "Santiago Baron Zuleta",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Baron Zuleta - Software Developer",
    description: "Mi sitio web con información sobre mi experiencia, proyectos, galería y contacto.",
    creator: "@santiagobaronz",
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ViewTransitions>
      <Providers>
        <html lang="es" className="bg-black-900 font-poppins">
          <head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-93BBNKQJEV"></Script>
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-93BBNKQJEV');
              `}
            </Script>

            <Script
              id="jsonld-person"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: "Santiago Baron Zuleta",
                  jobTitle: "Software Developer",
                  url: "https://santiagobaron.co",
                  sameAs: [
                    "https://github.com/santiagobaronz",
                    "https://www.linkedin.com/in/santiagobaronz/",
                  ],
                  image: "https://santiagobaron.co/santiago.jpg",
                }),
              }}
            />
          </head>
          <body className={`antialiased container bg-black-800 border-black-700 border-x-1 py-10 p-24 max-md:p-7 min-h-screen relative`}>
            <div id="root">
              <Header></Header>
              <GoogleTagManager gtmId="GTM-NNXDMJCJ" />
              <div className="relative z-10">
                {children}
              </div>
              <Analytics />
              <Footer></Footer>
            </div>
          </body>
        </html>
      </Providers>
    </ViewTransitions>
  );
}
