'use client'
import useIsMobile from './useIsMobile'
import { useState } from 'react'
const V = '#c170e8'
const faqs = [
  { q:'¿Cuánto tiempo tarda en verse resultados?', a:'Los primeros resultados en métricas (alcance, engagement) se empiezan a ver entre los 30 y 60 días de trabajo consistente. El crecimiento real de comunidad y consultas generalmente se consolida a partir del tercer mes. La constancia es clave.' },
  { q:'¿Qué necesito para empezar?', a:'Solo necesitás tener tu cuenta de Instagram activa y ganas de crecer. En la primera reunión hacemos un diagnóstico de tu situación actual, definimos objetivos y armamos el plan. Nos encargamos del resto.' },
  { q:'¿Trabajan con cualquier rubro?', a:'Sí, trabajamos con negocios de distintos rubros: gastronomía, moda, servicios profesionales, comercios, salud, educación y más. Cada estrategia se adapta al rubro, al público y a los objetivos específicos de tu marca.' },
  { q:'¿Hay contratos largos o compromiso mínimo?', a:'No manejamos contratos anuales ni penalidades. Trabajamos con una facturación mensual y pedimos un mínimo de 3 meses para poder mostrar resultados reales, ya que el algoritmo de Instagram necesita tiempo para responder a la estrategia.' },
  { q:'¿Vos manejás mi cuenta o yo tengo que publicar?', a:'Según el plan que elijas, podemos encargarnos de todo: creación de contenido, diseño, copy, publicación y gestión de comunidad. En los planes superiores gestionamos la cuenta de manera integral para que vos no tengas que preocuparte por nada.' },
  { q:'¿Cuánto tengo que invertir en publicidad (Meta Ads)?', a:'El presupuesto publicitario es aparte de nuestra tarifa de gestión y lo definimos según tus objetivos. En Argentina se pueden ver resultados con presupuestos desde $30.000 ARS/mes, aunque la inversión óptima depende del rubro y la escala que buscás.' },
  { q:'¿Cómo me enteraré de qué se está haciendo con mi cuenta?', a:'Tenés acceso a un calendario de contenido mensual aprobado por vos antes de publicar, reportes mensuales con métricas y reuniones periódicas de seguimiento según tu plan. Nada se publica sin tu revisión y aprobación previa.' },
  { q:'¿Trabajan solo con Instagram o también con otras plataformas?', a:'Nuestro foco principal es Instagram y Facebook (Meta). También gestionamos TikTok y LinkedIn según el rubro. Para negocios que necesitan presencia en múltiples plataformas armamos estrategias multi-canal personalizadas.' },
]
function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button onClick={() => setOpen(!open)}
        style={{ width:'100%', padding:'22px 24px', background:'none', border:'none', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'14px', textAlign:'left', fontFamily:'inherit' }}>
        <span style={{ fontSize:'15px', fontWeight:600, color:'#fff', lineHeight:1.4 }}>{q}</span>
        <span style={{ width:'28px', height:'28px', borderRadius:'50%', border:`1px solid rgba(193,112,232,0.4)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', flexShrink:0, transition:'all 0.3s', background: open ? V : 'transparent', transform: open ? 'rotate(45deg)' : 'none', color: open ? '#fff' : V }}>+</span>
      </button>
      <div style={{ maxHeight: open ? '300px' : 0, overflow:'hidden', transition:'max-height 0.4s ease' }}>
        <p style={{ padding:'0 24px 22px', color:'rgba(255,255,255,0.55)', fontSize:'14px', lineHeight:1.75 }}>{a}</p>
      </div>
    </div>
  )
}
export default function FAQ() {
  const isMobile = useIsMobile()
  return (
    <section id="faq" style={{ padding:'80px 0', background:'#050507', position:'relative' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'600px', height:'600px', borderRadius:'50%', background:'rgba(193,112,232,0.03)', filter:'blur(100px)', pointerEvents:'none' }}/>
      <div style={{ width:'100%', maxWidth:'1100px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 24px', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', marginBottom:'56px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'11px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'20px' }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:V, animation:'pulse-anim 2s ease-in-out infinite' }}/>
            Preguntas frecuentes
          </div>
          <h2 style={{ fontSize:'clamp(40px,6vw,78px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1.05, color:'#fff' }}>Todo lo que<br/>querés saber.</h2>
          <p style={{ marginTop:'20px', color:'rgba(255,255,255,0.5)', fontSize:'clamp(16px,2vw,20px)', maxWidth:'560px', margin:'20px auto 0' }}>Si tu pregunta no está acá, escribinos por WhatsApp y te respondemos en menos de 24 horas.</p>
        </div>
        <div className="faq-grid" style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap:'16px' }}>
          {faqs.map((f, i) => <Item key={i} {...f}/>)}
        </div>
      </div>
    </section>
  )
}
