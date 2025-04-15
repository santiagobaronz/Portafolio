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
  keywords: ["Santiago Baron Zuleta", "Software Developer", "santiago", "baron", "zuleta", "santiagobazul@hotmail.com", "baron zuleta"],
  authors: [{ name: "Santiago Baron Zuleta" }],
  creator: "Santiago Baron Zuleta",
  icons: {
    icon: "/icon.ico",
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
