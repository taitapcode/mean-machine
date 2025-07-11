import type { Metadata } from 'next';
import './globals.css';
import Background from './_components/Background';

export const metadata: Metadata = {
  title: 'Mean Machine',
  description: 'MeanMachine: Bridging the language gap with AI speed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi'>
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
