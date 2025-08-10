import { products } from '@/lib/products';
import Link from 'next/link';

export async function generateStaticParams(){
  return products.map(p => ({ slug: p.slug }));
}

export default function ProductPage({ params }){
  const product = products.find(p => p.slug === params.slug);
  if(!product) return <div>Prodotto non trovato.</div>;
  return (
    <div className="py-10 grid lg:grid-cols-2 gap-10">
      <div className="card aspect-[4/5]">Gallery prodotto</div>
      <div>
        <h1 className="font-display text-4xl">{product.name}</h1>
        <p className="text-epi-sage text-xl mt-2">€{product.price}</p>
        <p className="mt-4 text-epi-gray">{product.tagline}</p>
        <p className="mt-4">{product.description}</p>
        <ul className="mt-6 space-y-2 list-disc list-inside text-epi-gray">
          {product.benefits.map((b,i)=>(<li key={i}>{b}</li>))}
        </ul>
        <div className="mt-6 flex gap-3">
          <button className="btn btn-primary">Aggiungi al carrello</button>
          <Link href="/shop" className="btn btn-ghost">Continua lo shopping</Link>
        </div>
        <div className="mt-6 text-xs text-epi-sage">Edizione Limitata • 500</div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <details className="mb-3"><summary className="cursor-pointer text-epi-sage">Ingredienti</summary><p className="text-epi-gray text-sm">—</p></details>
          <details className="mb-3"><summary className="cursor-pointer text-epi-sage">Come si usa</summary><p className="text-epi-gray text-sm">—</p></details>
          <details><summary className="cursor-pointer text-epi-sage">Spedizioni & Resi</summary><p className="text-epi-gray text-sm">Spedizione gratuita oltre €49. Reso 30 giorni.</p></details>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.tagline,
          "brand": {"@type":"Brand","name":"EPI MAKEUP"},
          "offers": {"@type":"Offer","price": product.price, "priceCurrency": "EUR", "availability": "https://schema.org/InStock"}
        })}} />
      </div>
    </div>
  )
}
