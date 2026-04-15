import type { Metadata } from "next";
import { SmoothScroll } from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio V Arc | Architecture Studio",
  description:
    "Studio V Arc architecture and interior design portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
