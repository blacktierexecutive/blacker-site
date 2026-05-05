import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://blacktierexecutive.com"),
  title: {
    default:
      "BlackTier Executives | Chauffeur, Black Car & Group Transportation in Boston & New England",
    template: "%s | BlackTier Executives",
  },
  description:
    "Luxury chauffeur and black car service across Boston and New England. Logan (BOS) airport transfers, corporate travel, Sprinter vans, minibuses, and motorcoaches for events and group transportation.",
  keywords: [
    "BlackTier Executives",
    "chauffeur service Boston",
    "black car service Boston",
    "Logan Airport car service",
    "BOS airport transfer",
    "corporate transportation Boston",
    "Sprinter van service Boston",
    "minibus transportation Boston",
    "motorcoach transportation Boston",
    "group transportation New England",
    "NYC to Boston car service",
  ],
  icons: {
    icon: "/images/brand/logo-mark.png",
    shortcut: "/images/brand/logo-mark.png",
    apple: "/images/brand/logo-mark.png",
  },
  openGraph: {
    title: "BlackTier Executives | Luxury Transportation",
    description:
      "Premium chauffeur and group transportation across Boston, New England, and NYC — airport transfers, corporate travel, Sprinters, minibuses, and motorcoaches.",
    url: "https://blacktierexecutive.com",
    siteName: "BlackTier Executives",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TransportationService",
    name: "BlackTier Executives",
    url: "https://blacktierexecutive.com",
    areaServed: ["Boston", "New England", "New York City"],
    serviceType: [
      "Chauffeur Service",
      "Black Car Service",
      "Airport Transfers",
      "Corporate Transportation",
      "Group Transportation",
      "Sprinter Van Service",
      "Minibus Transportation",
      "Motorcoach Transportation",
    ],
  };

  return (
    <html lang="en">
      <body className="min-h-screen text-neutral-50">
        <SiteHeader />
        {children}
        <SiteFooter />

        {/* Structured data for SEO */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Tawk.to Live Chat */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69815558c06cd31c38a8ec7b/1jggjaogk';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
