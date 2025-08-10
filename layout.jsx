import './globals.css';
import { playfair, inter } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'EPI MAKEUP — Makeup di Lusso Vegan & Cruelty-Free',
  description: 'Makeup di lusso, vegan e cruelty-free. Limited drops da 500 pezzi. Eleganza senza compromessi in nero opaco e verde salvia.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-epi-black text-epi-ivory">
        <Header />
        <main className="container-pad mx-auto">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Brand",
          "name": "EPI MAKEUP",
          "slogan": "Empower Your Beauty — Naturally",
          "image": "https://example.com/og.jpg"
        })}} />
      </body>
    </html>
  )
}
