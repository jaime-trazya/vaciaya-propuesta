import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
const cormorant = localFont({
  src: [
    {
      path: "./fonts/cormorant-garamond.woff2",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-italic.woff2",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});
const dmSans = localFont({
  src: "./fonts/dm-sans.woff2",
  weight: "400 700",
  variable: "--font-dm-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Vacía Ya · Solicita presupuesto para vaciar tu piso o local",
    template: "%s · Vacía Ya",
  },
  description:
    "Cuéntanos qué espacio necesitas vaciar y solicita presupuesto de manera sencilla. Un servicio de intermediación de ANJA.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};
export const viewport: Viewport = {
  themeColor: "#773B49",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cormorant.variable + " " + dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
