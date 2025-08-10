'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-epi-black/90 backdrop-blur border-b border-white/10">
      <div className="container-pad mx-auto flex h-16 items-center justify-between">
        <button aria-label="Apri menu" onClick={() => setOpen(true)} className="md:hidden text-epi-sage">
          ☰
        </button>
        <Link href="/" className="font-display text-xl md:text-2xl">EPI <span className="tracking-wide">MAKEUP</span></Link>
        <nav className="hidden md:flex gap-8 text-sm text-epi-gray">
          <Link href="/shop" className="hover:text-epi-sage">Shop</Link>
          <Link href="/sostenibilita" className="hover:text-epi-sage">Sostenibilità</Link>
          <Link href="/chi-siamo" className="hover:text-epi-sage">Chi siamo</Link>
          <Link href="/contatti" className="hover:text-epi-sage">Contatti</Link>
        </nav>
        <Link href="/shop" className="btn btn-ghost hidden md:inline-flex">Shop</Link>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/80" onClick={() => setOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-epi-black p-6 space-y-6">
            <button className="text-epi-sage" onClick={() => setOpen(false)}>✕</button>
            <nav className="flex flex-col gap-4 text-lg">
              <Link href="/shop" onClick={()=>setOpen(false)}>Shop</Link>
              <Link href="/sostenibilita" onClick={()=>setOpen(false)}>Sostenibilità</Link>
              <Link href="/chi-siamo" onClick={()=>setOpen(false)}>Chi siamo</Link>
              <Link href="/contatti" onClick={()=>setOpen(false)}>Contatti</Link>
            </nav>
          </div>
        </div>
      )}
      <div className="text-center text-xs py-2 border-t border-white/10 text-epi-sage">
        Spedizione gratuita oltre €49
      </div>
    </header>
  );
}
