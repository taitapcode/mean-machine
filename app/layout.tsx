import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mean Machine",
  description: "MeanMachine: Bridging the language gap with AI speed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
