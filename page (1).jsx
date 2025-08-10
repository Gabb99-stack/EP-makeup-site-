import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export const metadata = { title: 'Shop — EPI MAKEUP' };

export default function ShopPage(){
  return (
    <div className="py-10">
      <h1 className="font-display text-3xl mb-6">Shop</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.slug} slug={p.slug} name={p.name} price={p.price} tagline={p.tagline} limited={p.limited} />
        ))}
      </div>
    </div>
  )
}
