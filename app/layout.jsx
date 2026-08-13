import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BackToTopButton } from "@/components/back-to-top-button";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://power-electrode-ltd.vercel.app",
  ),
  title: {
    default: "Power Electrode Ltd | Welding Electrodes in Ghana",
    template: "%s | Power Electrode Ltd",
  },
  description:
    "Power Electrode Ltd manufactures and supplies dependable welding electrodes for fabricators, contractors and industries across Ghana.",
  keywords: [
    "Power Electrode Ltd",
    "welding electrodes Ghana",
    "welding electrode manufacturer Ghana",
    "welding supplies Ghana",
    "electrode supplier Accra",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Power Electrode Ltd",
    title: "Power Electrode Ltd | Welding Electrodes in Ghana",
    description:
      "Dependable welding electrodes manufactured and supplied in Ghana.",
    images: [{ url: "/images/frame1.webp", alt: "Power Electrode Ltd welding electrodes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Electrode Ltd | Welding Electrodes in Ghana",
    description: "Dependable welding electrodes manufactured and supplied in Ghana.",
    images: ["/images/frame1.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/power-electrode-logo.webp",
    shortcut: "/images/power-electrode-logo.webp",
    apple: "/images/power-electrode-logo.webp",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Power Electrode Ltd",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://power-electrode-ltd.vercel.app",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://power-electrode-ltd.vercel.app"}/images/power-electrode-logo.webp`,
    email: "info@powerelectrode.net",
    telephone: "+233244316183",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Central University 282, Ningo Prampram",
      addressRegion: "Greater Accra",
      addressCountry: "GH",
    },
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}

        <BackToTopButton />
        <WhatsAppButton />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
