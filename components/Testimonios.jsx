'use client'
import useIsMobile from './useIsMobile'
import { useState, useRef } from 'react'
const V = '#c170e8'

const testimonios = [
  { name:'Carlos M.', role:'Restaurante & Catering', text:'Desde que LR maneja nuestras redes, el local está lleno los fines de semana. El contenido que crean representa exactamente lo que somos. 100% recomendable.' },
  { name:'Laura S.', role:'Tienda de Ropa Online', text:'En 3 meses triplicamos nuestros seguidores y las ventas online crecieron un 40%. El equipo entiende perfectamente el mundo del e-commerce y la moda.' },
  { name:'Roberto K.', role:'Consultor de Negocios', text:'Profesionalismo total. Me armaron una estrategia de contenido que posiciona mi marca personal como referente en mi industria. Los resultados hablan solos.' },
  { name:'Mariana G.', role:'Inmobiliaria', text:'El reel que subieron fue un golazo. Dinámico, moderno, y en una semana tuve más consultas que en el mes anterior. Se nota que entienden cómo funciona Instagram de verdad.' },
  { name:'Fede S.', role:'Preparador Físico', text:'Venía publicando sin estrategia y sin resultados. Desde que arrancamos con LR el crecimiento fue constante. Los contenidos reflejan exactamente lo que quiero transmitir como profesional.' },
  { name:'Luciano P.', role:'Emprendedor 3D', text:'Tenía un producto increíble pero nadie lo conocía. LR me ayudó a mostrar lo que hago de una forma que engancha. Hoy recibo consultas todos los días desde Instagram.' },
]

export default function Testimonios() {
  const isMobile = useIsMobile()
  const [current, setCurrent] = useState(0)
  const total = testimonios.length
  const touchStartX = useRef(null)
  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  // Show 3 on desktop, 1 on mobile
  const visible = (isMobile ? [0] : [0,1,2]).map(i => testimonios[(current + i) % total])

  return (
    <section id="testimonios" style={{ padding:'80px 0', background:'#0d0d12', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'500px', height:'500px', borderRadius:'50%', background:'rgba(193,112,232,0.04)', filter:'blur(80px)', pointerEvents:'none' }}/>
      <div style={{ width:'100%', maxWidth:'1200px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 24px', position:'relative', zIndex:1 }}>

        <div style={{ textAlign:'center', marginBottom:'48px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'11px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'20px' }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:V, animation:'pulse-anim 2s ease-in-out infinite' }}/>
            Testimonios
          </div>
          <h2 style={{ fontSize:'clamp(36px,5vw,64px)', fontWeight:900, letterSpacing:'-0.02em', color:'#fff' }}>Lo que dicen nuestros clientes</h2>
        </div>

        {/* Carrusel */}
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap:'20px', marginBottom:'40px' }}
          onTouchStart={e => { if (isMobile) touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            if (!isMobile || !touchStartX.current) return
            const diff = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 50) {
              if (diff > 0) next()
              else prev()
            }
            touchStartX.current = null
          }}>
          {visible.map((t, i) => (
            <div key={i} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'28px', transition:'all 0.3s', display:'flex', flexDirection:'column', gap:'16px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(193,112,232,0.35)'; e.currentTarget.style.background='rgba(193,112,232,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.background='rgba(255,255,255,0.03)' }}>
              {/* Stars */}
              <div style={{ display:'flex', gap:'4px' }}>
                {[0,1,2,3,4].map(s => <span key={s} style={{ color:'#f59e0b', fontSize:'14px' }}>★</span>)}
              </div>
              <p style={{ color:'rgba(255,255,255,0.75)', fontSize:'15px', lineHeight:1.75, fontStyle:'italic', flex:1 }}>"{t.text}"</p>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', paddingTop:'12px', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width:'40px', height:'40px', borderRadius:'50%', background:`linear-gradient(135deg, ${V}, #7b2fbe)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', fontWeight:700, color:'#fff', flexShrink:0 }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ color:'#fff', fontWeight:700, fontSize:'14px' }}>{t.name}</p>
                  <p style={{ color:V, fontSize:'12px', fontWeight:600 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'16px' }}>
          <button onClick={prev} style={{ width:'44px', height:'44px', borderRadius:'50%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff', fontSize:'18px', cursor:'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', justifyContent:'center' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=V; e.currentTarget.style.color=V }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='#fff' }}>
            ←
          </button>
          <div style={{ display:'flex', gap:'8px' }}>
            {testimonios.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                style={{ width: i === current ? '24px' : '8px', height:'8px', borderRadius:'100px', background: i === current ? V : 'rgba(255,255,255,0.2)', border:'none', cursor:'pointer', transition:'all 0.3s', padding:0 }}/>
            ))}
          </div>
          <button onClick={next} style={{ width:'44px', height:'44px', borderRadius:'50%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff', fontSize:'18px', cursor:'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', justifyContent:'center' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=V; e.currentTarget.style.color=V }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='#fff' }}>
            →
          </button>
        </div>
      </div>
    </section>
  )
}
