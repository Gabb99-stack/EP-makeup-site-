export const metadata = { title: 'Contatti — EPI MAKEUP' };
export default function Page(){
  return (
    <div className="py-10 space-y-6">
      <h1 className="font-display text-3xl">Contatti</h1>
      <form className="max-w-xl space-y-3" action="#" onSubmit={(e)=>e.preventDefault()}>
        <input className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 text-sm" placeholder="Nome" required />
        <input className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 text-sm" placeholder="Email" type="email" required />
        <textarea className="w-full rounded-xl bg-black/40 border border-white/10 px-3 py-3 text-sm" placeholder="Messaggio" rows="5" required />
        <button className="btn btn-primary">Invia</button>
      </form>
    </div>
  )
}
