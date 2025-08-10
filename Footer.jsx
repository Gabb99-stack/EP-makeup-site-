import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-pad mx-auto py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-display text-lg mb-3">EPI MAKEUP</h4>
          <p className="text-epi-gray text-sm">Makeup di lusso, vegan e cruelty-free.</p>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-widest mb-3 text-epi-sage">Newsletter</h5>
          <form className="flex gap-2" action="#" onSubmit={(e)=>e.preventDefault()}>
            <input className="flex-1 rounded-xl bg-black/40 border border-white/10 px-3 py-3 text-sm" placeholder="La tua email" type="email" required />
            <button className="btn btn-primary">Iscriviti</button>
          </form>
        </div>
        <div className="text-sm text-epi-gray">
          <div className="flex gap-4 mb-3">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="TikTok">TikTok</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
          </div>
          <div className="flex gap-4">
            <Link href="/policy/spedizioni">Spedizioni</Link>
            <Link href="/policy/resi">Resi</Link>
            <Link href="/policy/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-epi-gray pb-8">© EPI MAKEUP</div>
    </footer>
  );
}
