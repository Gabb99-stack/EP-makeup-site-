export const metadata = { title: 'Sostenibilità — EPI MAKEUP' };
export default function Page(){
  return (
    <div className="py-10 space-y-6">
      <h1 className="font-display text-3xl">Sostenibilità</h1>
      <p className="text-epi-gray">
        Il nostro impegno verso il pianeta è forte quanto quello verso la bellezza. Packaging in materiali riciclati,
        riutilizzabili e rifiniti con vernice UV eco-friendly. Bellezza cruelty-free e vegan — sempre.
      </p>
      <div className="grid md:grid-cols-4 gap-4">
        {['100% Vegan','Cruelty-Free','Packaging Riciclato','Vernice UV eco-friendly'].map((t,i)=>(
          <div key={i} className="card text-center py-6 text-epi-sage">{t}</div>
        ))}
      </div>
    </div>
  )
}
