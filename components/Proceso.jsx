'use client'
import { useEffect, useRef, useState } from 'react'
const V = '#c170e8'

const steps = [
  { num:'01', title:'Consulta Inicial', desc:'Nos conocemos, entendemos tu marca y tus objetivos. Analizamos tu situación actual en redes.', right:false },
  { num:'02', title:'Estrategia', desc:'Diseñamos un plan personalizado con calendario de contenido, pilares temáticos y KPIs.', right:true },
  { num:'03', title:'Ejecución', desc:'Creamos contenido de calidad, gestionamos tus redes y construimos tu comunidad día a día.', right:false },
  { num:'04', title:'Resultados', desc:'Medimos, analizamos y optimizamos. Te mostramos resultados reales con reportes mensuales.', right:true },
]

function SpotlightCard({ title, desc }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x:0, y:0, op:0 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, op: 1 })
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setPos(p=>({...p,op:0}))}
      style={{ position:'relative', padding:'28px 32px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', overflow:'hidden', transition:'border-color 0.3s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor='rgba(193,112,232,0.5)'}
      onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'}>
      <div style={{ position:'absolute', pointerEvents:'none', width:'200px', height:'200px', borderRadius:'50%', background:'radial-gradient(circle,rgba(193,112,232,0.18) 0%,transparent 70%)', transform:'translate(-50%,-50%)', left:pos.x, top:pos.y, opacity:pos.op, transition:'opacity 0.4s' }}/>
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ fontSize:'22px', fontWeight:700, color:'#fff', marginBottom:'10px' }}>{title}</div>
        <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'15px', lineHeight:1.7 }}>{desc}</p>
      </div>
    </div>
  )
}

// Modern rocket pointing UP
function Rocket() {
  return (
    <svg width="48" height="68" viewBox="0 0 48 68" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter:'drop-shadow(0 0 12px rgba(193,112,232,0.9)) drop-shadow(0 0 4px rgba(193,112,232,0.6))' }}>
      {/* Main body */}
      <path d="M24 2C24 2 10 16 10 36H38C38 16 24 2 24 2Z" fill="url(#rb1)"/>
      {/* Nose cone highlight */}
      <path d="M24 2C24 2 18 12 18 24H30C30 12 24 2 24 2Z" fill="rgba(255,255,255,0.15)"/>
      {/* Window */}
      <circle cx="24" cy="22" r="6" fill="#0d0d12" stroke={`#c170e8`} strokeWidth="1.5"/>
      <circle cx="24" cy="22" r="3" fill="rgba(193,112,232,0.3)"/>
      <circle cx="22" cy="20" r="1" fill="rgba(255,255,255,0.5)"/>
      {/* Left wing */}
      <path d="M10 36L2 50L10 48V36Z" fill="url(#rb2)"/>
      {/* Right wing */}
      <path d="M38 36L46 50L38 48V36Z" fill="url(#rb2)"/>
      {/* Bottom body */}
      <rect x="14" y="36" width="20" height="10" rx="2" fill="url(#rb3)"/>
      {/* Engines */}
      <rect x="16" y="46" width="6" height="4" rx="1" fill="#7b2fbe"/>
      <rect x="26" y="46" width="6" height="4" rx="1" fill="#7b2fbe"/>
      {/* Flames */}
      <ellipse cx="19" cy="53" rx="4" ry="7" fill="url(#rf1)" opacity="0.95"/>
      <ellipse cx="29" cy="53" rx="4" ry="7" fill="url(#rf1)" opacity="0.95"/>
      <ellipse cx="19" cy="51" rx="2" ry="4" fill="url(#rf2)" opacity="0.8"/>
      <ellipse cx="29" cy="51" rx="2" ry="4" fill="url(#rf2)" opacity="0.8"/>
      {/* Stripe detail */}
      <rect x="14" y="30" width="20" height="2" rx="1" fill="rgba(193,112,232,0.4)"/>
      <defs>
        <linearGradient id="rb1" x1="24" y1="2" x2="24" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.5" stopColor="#e8d0ff"/>
          <stop offset="1" stopColor="#c170e8"/>
        </linearGradient>
        <linearGradient id="rb2" x1="0" y1="36" x2="0" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c170e8"/>
          <stop offset="1" stopColor="#7b2fbe"/>
        </linearGradient>
        <linearGradient id="rb3" x1="24" y1="36" x2="24" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d89bf0"/>
          <stop offset="1" stopColor="#c170e8"/>
        </linearGradient>
        <linearGradient id="rf1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop stopColor="#ff8c00"/>
          <stop offset="0.6" stopColor="#ff4500"/>
          <stop offset="1" stopColor="transparent"/>
        </linearGradient>
        <linearGradient id="rf2" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop stopColor="#fff7aa"/>
          <stop offset="1" stopColor="#ffaa00"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Proceso() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  const lineRef = useRef(null)
  const sectionRef = useRef(null)
  const rocketRef = useRef(0)
  const [rocketY, setRocketY] = useState(0)

  useEffect(() => {
    let rafId
    const onScroll = () => {
      if (!sectionRef.current || !lineRef.current) return
      const section = sectionRef.current.getBoundingClientRect()
      const lh = lineRef.current.getBoundingClientRect().height
      const target = Math.max(0, Math.min(1, (-section.top + window.innerHeight * 0.3) / (section.height * 0.9))) * lh
      const animate = () => {
        rocketRef.current += (target - rocketRef.current) * 0.05
        setRocketY(rocketRef.current)
        if (Math.abs(target - rocketRef.current) > 0.3) rafId = requestAnimationFrame(animate)
      }
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(animate)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <section id="proceso" ref={sectionRef} style={{ padding:'80px 0', background:'#0d0d12', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 20% 80%,rgba(193,112,232,0.04),transparent 60%)', pointerEvents:'none' }}/>
      <div style={{ width:'100%', maxWidth:'1100px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 24px', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', marginBottom:'64px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'11px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'20px' }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:V, animation:'pulse-anim 2s ease-in-out infinite' }}/>
            Proceso
          </div>
          <h2 style={{ fontSize:'clamp(40px,6vw,78px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1.05, color:'#fff' }}>Cómo trabajamos</h2>
          <p style={{ marginTop:'20px', color:'rgba(255,255,255,0.5)', fontSize:'clamp(16px,2vw,20px)', maxWidth:'560px', margin:'20px auto 0' }}>Un proceso simple, claro y orientado a resultados.</p>
        </div>

        <div style={{ position:'relative', padding:'48px 0' }}>
          <div ref={lineRef} className="proceso-line" style={{ display: isMobile ? 'none' : 'block', position:'absolute', left:'50%', top:0, bottom:0, width:'2px', transform:'translateX(-50%)', background:'linear-gradient(to bottom,transparent,rgba(193,112,232,0.5) 5%,rgba(193,112,232,0.5) 95%,transparent)', zIndex:1 }}/>

          {/* Rocket pointing UP, moving down */}
          <div style={{ position:'absolute', left:'50%', top:`${rocketY}px`, transform:'translateX(-50%) translateY(-50%)', zIndex:20, pointerEvents:'none' }}>
            <Rocket/>
          </div>

          {steps.map((s, i) => (
            <div key={i} className="proceso-grid" className="proceso-grid" style={{ position:'relative', display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 80px 1fr', alignItems:'center', marginBottom: i < 3 ? '64px' : 0, minHeight:'120px' }}>
              {(!s.right || isMobile) ? <SpotlightCard title={s.title} desc={s.desc}/> : <div/>}
              <div className="proceso-center" style={{ display: isMobile ? 'none' : 'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:10 }}>
                <div style={{ width:'48px', height:'48px', borderRadius:'50%', background:'#0d0d12', border:`2px solid rgba(193,112,232,0.5)`, display:'flex', alignItems:'center', justifyContent:'center', color:V, fontWeight:700, fontSize:'15px', boxShadow:'0 0 15px rgba(193,112,232,0.3)' }}>
                  {s.num}
                </div>
              </div>
              {(s.right && !isMobile) ? <SpotlightCard title={s.title} desc={s.desc}/> : <div/>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
