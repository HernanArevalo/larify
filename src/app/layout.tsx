import { Montserrat } from "next/font/google";
import 'animate.css';
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Larify",
  description: "Official Larify App",
  openGraph: {
    title: "Larify",
    description: "Official Larify App",
    url: "https://larify.vercel.ap",
    siteName: "Larify",
    images: [
      {
        url: "https://res.cloudinary.com/dabmixcta/image/upload/v1733616681/jzn73nindckkxwogisfw.jpg",
        width: 1200,
        height: 630,
        alt: "Larify Preview Image",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larify",
    description: "Official Larify App",
    images: ["https://res.cloudinary.com/dabmixcta/image/upload/v1733616681/jzn73nindckkxwogisfw.jpg"],
  },
};

const montserrat = Montserrat({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
