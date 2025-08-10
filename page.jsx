import Link from 'next/link';
import LimitedBanner from '@/components/LimitedBanner';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';
import { motion } from 'framer-motion';

export default function HomePage(){
  return (
    <div className="space-y-12">
      <section className="min-h-[70vh] grid place-items-center mt-6 text-center">
        <div>
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:.5}} className="font-display text-4xl md:text-6xl mb-4">
            Empower Your Beauty — Naturally
          </motion.h1>
          <p className="max-w-2xl mx-auto text-epi-gray">
            Makeup di lusso vegan pensato per chi pretende eleganza senza compromessi.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/shop" className="btn btn-primary">Scopri la Collezione</Link>
            <Link href="/sostenibilita" className="btn btn-ghost">Sostenibilità</Link>
          </div>
        </div>
      </section>

      <LimitedBanner />

      <section className="grid md:grid-cols-2 gap-6">
        {products.map(p => (
          <ProductCard key={p.slug} slug={p.slug} name={p.name} price={p.price} tagline={p.tagline} limited={p.limited} />
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
        <div className="space-y-4">
          <h2 className="font-display text-3xl">Chi siamo</h2>
          <p className="text-epi-gray">
            In EPI MAKEUP, la bellezza è più che apparenza. Nata dalla passione per lusso, etica e innovazione,
            ogni creazione è studiata per esaltare la tua naturale bellezza rispettando il pianeta.
            100% vegan, cruelty-free e con ingredienti premium.
          </p>
        </div>
        <div className="card min-h-[200px]">Immagine / Video</div>
      </section>
    </div>
  )
}
