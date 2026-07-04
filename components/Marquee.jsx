const industrias = [
  'Gastronomía','Inmobiliarias','E-commerce','Salud & Bienestar',
  'Moda','Arquitectura','Fitness','Educación','Tecnología','Servicios Profesionales'
]
export default function Marquee() {
  const items = [...industrias, ...industrias]
  return (
    <section style={{ position:'relative', padding:'44px 0', background:'rgba(255,255,255,0.02)', borderTop:'1px solid rgba(255,255,255,0.07)', borderBottom:'1px solid rgba(255,255,255,0.07)', overflow:'hidden' }}>
      <p style={{ textAlign:'center', color:'rgba(255,255,255,0.3)', fontSize:'11px', fontWeight:700, letterSpacing:'0.25em', textTransform:'uppercase', marginBottom:'28px' }}>
        Industrias que confían en nosotros
      </p>
      <div style={{ position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'80px', background:'linear-gradient(to right,#050507,transparent)', zIndex:10, pointerEvents:'none' }}/>
        <div style={{ position:'absolute', right:0, top:0, bottom:0, width:'80px', background:'linear-gradient(to left,#050507,transparent)', zIndex:10, pointerEvents:'none' }}/>
        <div className="marquee-track">
          {items.map((ind, i) => (
            <div key={i} className="marquee-item">
              {ind}
              <span style={{ color:'rgba(193,112,232,0.4)', fontSize:'10px' }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
