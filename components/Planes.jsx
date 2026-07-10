'use client'
import { useState, useRef, useEffect } from 'react'
import useIsMobile from './useIsMobile'
const V = '#c170e8'

const redesPlanes = [
  {
    name: 'Plan Inicial',
    sub: 'Para empezar en redes',
    highlight: false,
    items: [
      'Análisis básico de marca',
      '4 publicaciones mensuales (feed)',
      '4 historias mensuales',
      'Diseño de piezas + copy',
      'Calendario de contenido mensual',
      'Publicación del contenido en Instagram',
      'Supervisión básica de la cuenta',
      'Revisión ocasional de mensajes (sin gestión activa)',
      '1 reunión mensual de seguimiento',
    ],
    footer: 'Ideal para ganar presencia y generar constancia.',
  },
  {
    name: 'Plan Crecimiento',
    sub: 'Para hacer escalar tu marca',
    highlight: true,
    badge: '✦ Recomendado',
    items: [
      'Análisis de marca y competencia',
      'Estrategia de contenido personalizada',
      '8 publicaciones mensuales (feed)',
      '8 historias mensuales + 2 reels (máx. 40 seg)',
      'Diseño + copy estratégico',
      'Calendario de contenido mensual',
      'Publicación y gestión activa de la cuenta',
      'Análisis de métricas mensuales',
      'Optimización de contenido según resultados',
      'Supervisión de mensajes y derivación de consultas',
      '2 reuniones mensuales',
    ],
    footer: 'Más visibilidad, mejor posicionamiento y generación de consultas.',
  },
  {
    name: 'Plan Premium',
    sub: 'Para resultados reales',
    highlight: false,
    items: [
      'Todo lo incluido en Plan Crecimiento',
      '12 publicaciones mensuales (feed)',
      '12 historias mensuales',
      '3 reels mensuales (máx. 40 seg)',
      'Redacción de contenidos avanzada (copywriting)',
      'Gestión de la cuenta (publicación y seguimiento)',
      'Gestión de comunidad (mensajes y comentarios)',
      'Reporte mensual con métricas y optimización',
      'Asesoramiento continuo vía WhatsApp',
    ],
    footer: 'Pensado para marcas que quieran crecer más rápido y mejor.',
  },
]

const filmmakerPlanes = [
  {
    name: 'Plan Six Pack',
    sub: '6 videos editados profesionalmente',
    highlight: false,
    items: [
      'Reunión previa con el cliente',
      'Armado de guiones (información enviada por el cliente)',
      'Jornada completa de grabación',
      'Edición de 6 videos de hasta 60 segundos',
      'Subtítulos',
      'Transiciones',
      'Textos',
      'Inserts',
      'Música',
      'Hasta 3 revisiones',
    ],
    footer: '',
  },
  {
    name: 'Plan Three Pack',
    sub: '3 videos editados profesionalmente',
    highlight: false,
    items: [
      'Reunión previa con el cliente',
      'Armado de guiones (información enviada por el cliente)',
      'Media jornada de grabación',
      'Edición de 3 videos de hasta 60 segundos',
      'Subtítulos',
      'Transiciones',
      'Textos',
      'Inserts',
      'Música',
      'Hasta 3 revisiones',
    ],
    footer: '',
  },
]

const pubPlanes = [
  {
    name: 'Plan Paid Media Ads',
    sub: 'Para empezar en publicidad digital',
    highlight: false,
    items: [
      'Creación y configuración de cuenta publicitaria (Meta/Google)',
      'Definición estratégica del objetivo de campaña',
      'Segmentación detallada',
      'Configuración de UTMs para seguimiento de tráfico',
      'Hasta 2 campañas activas por mes',
      'Monitoreo durante el período de campaña',
      'Informe mensual básico: alcance, clics, impresiones e interacciones',
    ],
    footer: '',
  },
  {
    name: 'Plan Media Ads + Pixel',
    sub: 'Con seguimiento avanzado',
    highlight: false,
    items: [
      'Todo lo incluido en Plan 1',
      'Instalación y configuración de Pixels de Meta y Google',
      'Configuración de eventos estándar y personalizados',
      'Verificación y testing de eventos configurados',
      'Campañas de remarketing/Lookalikes',
      'Audiencias personalizadas basadas en comportamiento web',
      'Hasta 3 campañas activas por mes',
      'Reporte mensual completo con análisis de conversiones',
    ],
    footer: 'Requisito: acceso a Google Tag Manager o posibilidad de ingestar código en el sitio.',
  },
  {
    name: 'Plan Media Ads + Pixel + Reporting',
    sub: 'Máxima optimización y resultados',
    highlight: false,
    items: [
      'Todo lo incluido en Planes 1 y 2',
      'Hasta 4 campañas activas por mes',
      'Optimización semanal de campañas según performance',
      'Reporte quincenal de performance (métricas clave, evolución)',
      'Reporte mensual completo con recomendaciones estratégicas',
      'Reunión mensual de revisión de estrategia (30 minutos)',
    ],
    footer: '',
  },
]

function PlanModal({ plan, onClose }) {
  useEffect(() => {
    if (plan) {
      document.documentElement.classList.add('modal-open')
    }
    return () => {
      document.documentElement.classList.remove('modal-open')
    }
  }, [plan])
  if (!plan) return null
  return (
    <div onClick={() => { onClose(); }} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:99999, display:'flex', alignItems:'center', justifyContent:'center', padding:'24px' }}>
      <div onClick={e => e.stopPropagation()} className="modal-content" style={{ background:'#0d0d12', border:'1px solid rgba(193,112,232,0.35)', borderRadius:'20px', padding:'40px', maxWidth:'560px', width:'100%', position:'relative', boxShadow:'0 0 60px rgba(193,112,232,0.15)', maxHeight:'85vh', overflowY:'auto', WebkitOverflowScrolling:'touch' }} onTouchMove={e => e.stopPropagation()}>
        <button onClick={() => { onClose(); }} style={{ position:'absolute', top:'16px', right:'16px', background:'rgba(255,255,255,0.08)', border:'none', borderRadius:'50%', width:'32px', height:'32px', color:'#fff', fontSize:'18px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
        {plan.badge && (
          <div style={{ display:'inline-block', background:V, color:'#fff', fontSize:'11px', fontWeight:700, padding:'4px 16px', borderRadius:'100px', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'16px' }}>{plan.badge}</div>
        )}
        <h3 style={{ fontSize:'24px', fontWeight:800, color:'#fff', marginBottom:'6px' }}>{plan.name}</h3>
        <p style={{ color:V, fontSize:'14px', fontWeight:600, marginBottom:'20px' }}>{plan.sub}</p>
        <div style={{ width:'40px', height:'2px', background:V, borderRadius:'1px', marginBottom:'20px' }}/>
        <ul style={{ listStyle:'none', padding:0, margin:'0 0 20px', display:'flex', flexDirection:'column', gap:'12px' }}>
          {plan.items.map((item, i) => (
            <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px', color:'rgba(255,255,255,0.75)', fontSize:'15px', lineHeight:1.6 }}>
              <span style={{ color:V, fontSize:'16px', flexShrink:0, marginTop:'2px' }}>✓</span>{item}
            </li>
          ))}
        </ul>
        {plan.footer && <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'13px', lineHeight:1.6, fontStyle:'italic', paddingTop:'16px', borderTop:'1px solid rgba(255,255,255,0.06)', marginBottom:'20px' }}>{plan.footer}</p>}
        <a href="https://wa.me/5491158460123?text=Hola%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer"
          className="btn-primary" style={{ justifyContent:'center', fontSize:'15px', padding:'14px', display:'flex' }}>
          Consultá este plan <span className="arr">→</span>
        </a>
      </div>
    </div>
  )
}

function PlanCard({ plan, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div style={{
      position: 'relative',
      background: plan.highlight ? 'rgba(193,112,232,0.08)' : 'rgba(255,255,255,0.03)',
      border: `1px solid ${plan.highlight ? 'rgba(193,112,232,0.5)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: '20px',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      transition: 'all 0.3s',
      boxShadow: plan.highlight ? '0 0 40px rgba(193,112,232,0.12)' : 'none',
      height: '100%',
      boxSizing: 'border-box',
    }}
      onMouseEnter={e => { setHovered(true); e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(193,112,232,0.5)' }}
      onMouseLeave={e => { setHovered(false); e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor=plan.highlight?'rgba(193,112,232,0.5)':'rgba(255,255,255,0.08)' }}
    >
      {plan.badge && (
        <div style={{ position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:V, color:'#fff', fontSize:'11px', fontWeight:700, padding:'4px 16px', borderRadius:'100px', letterSpacing:'0.1em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
          {plan.badge}
        </div>
      )}
      <div>
        <h3 style={{ fontSize:'22px', fontWeight:800, color:'#fff', marginBottom:'6px' }}>{plan.name}</h3>
        <p style={{ color:V, fontSize:'14px', fontWeight:600 }}>{plan.sub}</p>
      </div>
      <div style={{ width:'40px', height:'2px', background:V, borderRadius:'1px' }}/>
      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'10px', flex:1 }}>
        {plan.items.slice(0,5).map((item, i) => (
          <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px', color:'rgba(255,255,255,0.7)', fontSize:'14px', lineHeight:1.5 }}>
            <span style={{ color:V, fontSize:'16px', flexShrink:0, marginTop:'1px' }}>✓</span>{item}
          </li>
        ))}
        {plan.items.length > 5 && (
          <li style={{ color:'rgba(255,255,255,0.35)', fontSize:'13px', paddingLeft:'26px' }}>+ {plan.items.length - 5} beneficios más...</li>
        )}
      </ul>
      <button onClick={onClick}
        style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'none', border:'none', color: hovered ? V : 'rgba(255,255,255,0.4)', fontSize:'13px', fontWeight:600, cursor:'pointer', fontFamily:'inherit', padding:0, transition:'all 0.3s' }}>
        Ver más <span style={{ transition:'transform 0.3s', transform: hovered ? 'translateX(4px)' : 'none' }}>→</span>
      </button>
      <a href="https://wa.me/5491158460123?text=Hola%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer"
        className="btn-primary" style={{ justifyContent:'center', fontSize:'15px', padding:'14px', marginTop:'auto', display:'flex' }}>
        Consultá este plan <span className="arr">→</span>
      </a>
    </div>
  )
}

const tabs = [
  { id: 'redes', label: 'Gestión de Redes Sociales', planes: redesPlanes },
  { id: 'filmmaker', label: 'Creación de Contenido', planes: filmmakerPlanes },
  { id: 'pub', label: 'Publicidad Digital', planes: pubPlanes },
]



function TiltedPlanCard({ plan, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [pressed, setPressed] = useState(false)

  const handleTouchStart = (e) => {
    setPressed(true)
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((touch.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((touch.clientY - rect.top) / rect.height - 0.5) * -20
    setTilt({ x, y })
  }

  const handleTouchEnd = (e) => {
    setPressed(false)
    setTilt({ x: 0, y: 0 })
    onClick()
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        background: plan.highlight ? 'rgba(193,112,232,0.1)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${plan.highlight ? 'rgba(193,112,232,0.5)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius:'16px',
        padding:'16px 12px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        cursor:'pointer',
        transition:'all 0.3s',
        transform: pressed ? `perspective(500px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(0.97)` : 'perspective(500px) rotateX(0) rotateY(0) scale(1)',
        boxShadow: plan.highlight ? '0 0 20px rgba(193,112,232,0.25)' : pressed ? '0 0 15px rgba(193,112,232,0.2)' : 'none',
        minHeight: '120px',
        position: 'relative',
        overflow: 'hidden',
      }}>
      {plan.highlight && (
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at center, rgba(193,112,232,0.08), transparent)', pointerEvents:'none' }}/>
      )}
      {plan.badge && (
        <span style={{ position:'absolute', top:'8px', right:'8px', background:V, color:'#fff', fontSize:'8px', fontWeight:700, padding:'2px 6px', borderRadius:'100px' }}>{plan.badge}</span>
      )}
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ fontSize:'13px', fontWeight:700, color: plan.highlight ? V : '#fff', marginBottom:'4px', lineHeight:1.3 }}>{plan.name}</div>
        <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.4)', lineHeight:1.3 }}>{plan.sub}</div>
      </div>
      <div style={{ marginTop:'10px', fontSize:'11px', color:V, fontWeight:600, position:'relative', zIndex:1 }}>Ver más →</div>
    </div>
  )
}


function TiltedTabCard({ tab, active, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [pressed, setPressed] = useState(false)

  const handleTouchStart = (e) => {
    setPressed(true)
    const touch = e.touches[0]
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((touch.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((touch.clientY - rect.top) / rect.height - 0.5) * -20
    setTilt({ x, y })
  }

  const handleTouchEnd = () => {
    setPressed(false)
    setTilt({ x: 0, y: 0 })
    onClick()
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        background: active === tab.id ? 'rgba(193,112,232,0.15)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${active === tab.id ? 'rgba(193,112,232,0.6)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius:'16px',
        padding:'16px 12px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        cursor:'pointer',
        transition:'all 0.3s',
        transform: pressed ? `perspective(500px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(0.97)` : 'perspective(500px) rotateX(0) rotateY(0) scale(1)',
        boxShadow: active === tab.id ? '0 0 20px rgba(193,112,232,0.3)' : 'none',
        position:'relative',
        overflow:'hidden',
      }}>
      {active === tab.id && <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at center, rgba(193,112,232,0.1), transparent)', pointerEvents:'none' }}/>}
      <span style={{ color: active === tab.id ? '#c170e8' : 'rgba(255,255,255,0.6)', fontSize:'13px', fontWeight: active === tab.id ? 700 : 500, lineHeight:1.3, position:'relative', zIndex:1 }}>
        {tab.label}
      </span>
    </div>
  )
}

export default function Planes() {
  const isMobile = useIsMobile()
  const [active, setActive] = useState('redes')
  const [modal, setModal] = useState(null)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const touchStartX = useRef(null)
  useEffect(() => setCarouselIdx(0), [active])
  const current = tabs.find(t => t.id === active)

  return (
    <section id="planes" style={{ padding: '80px 0', background: '#050507', position: 'relative', overflow: 'hidden' }}>
      {modal && <div style={{ position:'fixed', inset:0, zIndex:99998, backdropFilter:'blur(6px)', WebkitBackdropFilter:'blur(6px)', background:'rgba(0,0,0,0.4)', pointerEvents:'none' }}/>}
      <PlanModal plan={modal} onClose={() => setModal(null)}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(193,112,232,0.04)', filter: 'blur(100px)', pointerEvents: 'none' }}/>
      <div style={{ width: '100%', maxWidth: '1300px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgba(193,112,232,0.12)', border: '1px solid rgba(193,112,232,0.25)', color: V, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: V, animation: 'pulse-anim 2s ease-in-out infinite' }}/>
            Planes
          </div>
          <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05, color: '#fff', marginBottom: '16px' }}>Elegí tu plan ideal</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(16px,2vw,20px)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Adaptamos cada plan a las necesidades reales de tu marca.
          </p>
        </div>

        {/* Sticky Pill Nav - Desktop / Tilted Cards - Mobile */}
        {isMobile ? (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
            {tabs.map(t => (
              <TiltedTabCard key={t.id} tab={t} active={active} onClick={() => { setActive(t.id); setCarouselIdx(0); }}/>
            ))}
          </div>
        ) : (
          <div className="pill-nav-sticky" style={{ display:'flex', justifyContent:'center', marginBottom:'48px', position:'sticky', top:'96px', zIndex:40, paddingTop:'12px', paddingBottom:'12px', background:'rgba(5,5,7,0.85)', backdropFilter:'blur(12px)' }}>
            <div style={{ display:'flex', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'100px', padding:'6px', gap:'4px' }}>
              {tabs.map(t => (
                <button key={t.id} onClick={() => setActive(t.id)}
                  style={{ padding:'10px 24px', borderRadius:'100px', fontSize:'14px', fontWeight:600, cursor:'pointer', fontFamily:'inherit', border:'none', transition:'all 0.3s',
                    background: active === t.id ? '#c170e8' : 'transparent',
                    color: active === t.id ? '#fff' : 'rgba(255,255,255,0.5)',
                    boxShadow: active === t.id ? '0 0 20px rgba(193,112,232,0.4)' : 'none',
                  }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        )}

              {/* Cards — equal height */}
        {isMobile ? (
          <div
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              if (!touchStartX.current) return
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 50) {
                if (diff > 0) setCarouselIdx(i => Math.min(i + 1, current.planes.length - 1))
                else setCarouselIdx(i => Math.max(i - 1, 0))
              }
              touchStartX.current = null
            }}>
            <PlanCard plan={current.planes[carouselIdx]} onClick={() => setModal(current.planes[carouselIdx])}/>
            <div style={{ display:'flex', justifyContent:'center', gap:'8px', marginTop:'16px' }}>
              {current.planes.map((_, i) => (
                <button key={i} onClick={() => setCarouselIdx(i)}
                  style={{ width: i === carouselIdx ? '20px' : '8px', height:'8px', borderRadius:'100px', background: i === carouselIdx ? V : 'rgba(255,255,255,0.2)', border:'none', cursor:'pointer', transition:'all 0.3s', padding:0 }}/>
              ))}
            </div>
            <p style={{ textAlign:'center', color:'rgba(255,255,255,0.3)', fontSize:'12px', marginTop:'8px' }}>{carouselIdx + 1} de {current.planes.length} · Deslizá</p>
          </div>
        ) : (
          <div className="tab-content" style={{ display: 'grid', gridTemplateColumns: `repeat(${current.planes.length},1fr)`, gap: '24px', alignItems: 'stretch' }}>
            {current.planes.map((plan, i) => <PlanCard key={i} plan={plan} onClick={() => setModal(plan)}/>)}
          </div>
        )}

      </div>
    </section>
  )
}
