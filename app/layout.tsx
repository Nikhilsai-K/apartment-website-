import type { Metadata } from 'next';
import { Noto_Serif_JP, Montserrat } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ザ・パークハウス東銀座 | The Park House Higashi-Ginza',
  description: '銀座の中心で、贅沢な暮らしを。東京都中央区新富に位置する高級レジデンス。',
  keywords: ['マンション', '東銀座', '高級', 'レジデンス', '三菱地所'],
  openGraph: {
    title: 'ザ・パークハウス東銀座',
    description: '銀座の中心で、贅沢な暮らしを',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="lenis">
      <body
        className={`${notoSerifJP.variable} ${montserrat.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
