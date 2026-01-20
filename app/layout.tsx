import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "BackTier Executives | Boston & New England Chauffeur Service",
    template: "%s | BackTier Executives",
  },
  description:
    "Premium chauffeur and executive transportation across Boston and New England. Logan (BOS) airport transfers, corporate travel, weddings, and private events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-neutral-50">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}