import Link from 'next/link'

export const metadata = {
  title: 'Marketing Digital para Gym y Fitness | LR Social Media',
  description: 'Agencia de marketing digital para gimnasios, boxes y entrenadores personales en Argentina. Llenamos tu gym de alumnos nuevos con redes sociales y publicidad.',
  keywords: 'marketing digital gimnasios Buenos Aires, redes sociales gym Argentina, Instagram entrenadores personales, publicidad Meta Ads fitness',
  openGraph: {
    title: 'Marketing Digital para Gym y Fitness | LR Social Media',
    description: 'Agencia de marketing digital para gimnasios, boxes y entrenadores personales en Argentina. Llenamos tu gym de alumnos nuevos con redes sociales y publicidad.',
    url: 'https://lrsocialmedia.com.ar/fitness',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const V = '#c170e8'

export default function Page() {
  return (
    <main style={{ background:'#050507', minHeight:'100vh', fontFamily:'Inter, -apple-system, sans-serif', color:'#fff' }}>

      {/* NAV */}
      <nav style={{ padding:'20px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:'12px', textDecoration:'none' }}>
          <span style={{ color:'#fff', fontWeight:800, fontSize:'20px' }}>LR <span style={{ color:V }}>Social Media</span></span>
        </Link>
        <a href="https://wa.me/5491158460123?text=Hola%21%20Me%20interesa%20el%20marketing%20digital%20para%20mi%20gimnasio.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer"
          style={{ background:V, color:'#fff', padding:'10px 24px', borderRadius:'100px', fontWeight:700, fontSize:'14px', textDecoration:'none' }}>
          Contactanos →
        </a>
      </nav>

      {/* HERO */}
      <section style={{ padding:'80px 24px', textAlign:'center', maxWidth:'800px', margin:'0 auto' }}>
        <div style={{ fontSize:'56px', marginBottom:'16px' }}>💪</div>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'12px', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'24px' }}>
          Especialistas en fitness
        </div>
        <h1 style={{ fontSize:'clamp(32px,5vw,60px)', fontWeight:900, lineHeight:1.1, marginBottom:'20px' }}>
          Llenamos tu gym de alumnos nuevos
        </h1>
        <p style={{ fontSize:'18px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, marginBottom:'40px' }}>
          Gestión de redes y publicidad digital para gimnasios, boxes y entrenadores en Argentina.
        </p>
        <a href="https://wa.me/5491158460123?text=Hola%21%20Me%20interesa%20el%20marketing%20digital%20para%20mi%20gimnasio.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:V, color:'#fff', padding:'16px 40px', borderRadius:'100px', fontWeight:700, fontSize:'16px', textDecoration:'none' }}>
          Quiero más alumnos →
        </a>
      </section>

      {/* PAIN POINT */}
      <section style={{ padding:'60px 24px', background:'#0d0d12' }}>
        <div style={{ maxWidth:'700px', margin:'0 auto', textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(24px,3vw,36px)', fontWeight:800, marginBottom:'16px' }}>
            ¿Tu gym tiene capacidad para más alumnos pero no llegan nuevos clientes?
          </h2>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>
            Creamos contenido motivador y campañas de captación para llenar tu gimnasio o agenda de entrenamiento personal.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding:'80px 24px' }}>
        <div style={{ maxWidth:'1000px', margin:'0 auto' }}>
          <h2 style={{ textAlign:'center', fontSize:'clamp(24px,3vw,40px)', fontWeight:800, marginBottom:'48px' }}>
            ¿Qué incluye nuestro servicio?
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'20px' }}>
            <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'28px', display:'flex', flexDirection:'column', gap:'12px' }}>
              <span style={{ fontSize:'32px' }}>🎬</span>
              <h3 style={{ color:'#fff', fontWeight:700, fontSize:'18px' }}>Reels de entrenamiento</h3>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'15px', lineHeight:1.6 }}>Contenido dinámico que muestra tu metodología y atrae al público correcto.</p>
            </div>
            <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'28px', display:'flex', flexDirection:'column', gap:'12px' }}>
              <span style={{ fontSize:'32px' }}>📣</span>
              <h3 style={{ color:'#fff', fontWeight:700, fontSize:'18px' }}>Campañas de captación</h3>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'15px', lineHeight:1.6 }}>Publicidad dirigida a personas en tu zona que quieren ponerse en forma.</p>
            </div>
            <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'28px', display:'flex', flexDirection:'column', gap:'12px' }}>
              <span style={{ fontSize:'32px' }}>🏆</span>
              <h3 style={{ color:'#fff', fontWeight:700, fontSize:'18px' }}>Transformaciones y testimonios</h3>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'15px', lineHeight:1.6 }}>Mostramos resultados reales para generar confianza.</p>
            </div>
            <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'28px', display:'flex', flexDirection:'column', gap:'12px' }}>
              <span style={{ fontSize:'32px' }}>📅</span>
              <h3 style={{ color:'#fff', fontWeight:700, fontSize:'18px' }}>Calendario de contenido</h3>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'15px', lineHeight:1.6 }}>Planificación mensual con fitness, nutrición y motivación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding:'80px 24px', background:'#0d0d12', textAlign:'center' }}>
        <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:900, marginBottom:'16px' }}>
          ¿Listo para hacer crecer tu negocio?
        </h2>
        <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'17px', marginBottom:'40px' }}>
          Hablemos hoy. Sin compromiso.
        </p>
        <a href="https://wa.me/5491158460123?text=Hola%21%20Me%20interesa%20el%20marketing%20digital%20para%20mi%20gimnasio.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:V, color:'#fff', padding:'16px 40px', borderRadius:'100px', fontWeight:700, fontSize:'16px', textDecoration:'none', marginBottom:'20px' }}>
          Quiero más alumnos →
        </a>
        <br/>
        <Link href="/" style={{ color:'rgba(255,255,255,0.3)', fontSize:'14px', textDecoration:'none' }}>
          ← Volver al sitio principal
        </Link>
      </section>

    </main>
  )
}
