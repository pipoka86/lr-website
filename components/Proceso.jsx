'use client'
import { useEffect, useRef, useState } from 'react'
const V = '#c170e8'

const steps = [
  { num:'01', title:'Consulta Inicial', desc:'Nos conocemos, entendemos tu marca y tus objetivos. Analizamos tu situación actual en redes.' },
  { num:'02', title:'Estrategia', desc:'Diseñamos un plan personalizado con calendario de contenido, pilares temáticos y KPIs.' },
  { num:'03', title:'Ejecución', desc:'Creamos contenido de calidad, gestionamos tus redes y construimos tu comunidad día a día.' },
  { num:'04', title:'Resultados', desc:'Medimos, analizamos y optimizamos. Te mostramos resultados reales con reportes mensuales.' },
]

function StepCard({ step }) {
  return (
    <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(193,112,232,0.2)', borderRadius:'20px', padding:'32px', position:'relative' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'16px' }}>
        <div style={{ width:'52px', height:'52px', borderRadius:'50%', background:'rgba(193,112,232,0.12)', border:`2px solid ${V}`, display:'flex', alignItems:'center', justifyContent:'center', color:V, fontWeight:800, fontSize:'16px', flexShrink:0 }}>
          {step.num}
        </div>
        <h3 style={{ fontSize:'20px', fontWeight:700, color:'#fff' }}>{step.title}</h3>
      </div>
      <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'15px', lineHeight:1.7 }}>{step.desc}</p>
    </div>
  )
}

export default function Proceso() {
  const [isMobile, setIsMobile] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="proceso" style={{ padding:'80px 0', background:'#0d0d12', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 20% 80%,rgba(193,112,232,0.04),transparent 60%)', pointerEvents:'none' }}/>

      <div style={{ width:'100%', maxWidth:'1100px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 24px', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div className="fade-in" style={{ textAlign:'center', marginBottom:'64px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'11px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'20px' }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:V, animation:'pulse-anim 2s ease-in-out infinite' }}/>
            Proceso
          </div>
          <h2 style={{ fontSize:'clamp(40px,6vw,78px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1.05, color:'#fff' }}>Cómo trabajamos</h2>
          <p style={{ marginTop:'20px', color:'rgba(255,255,255,0.5)', fontSize:'clamp(16px,2vw,20px)', maxWidth:'560px', margin:'20px auto 0' }}>Un proceso simple, claro y orientado a resultados.</p>
        </div>

        {isMobile ? (
          /* MOBILE CAROUSEL */
          <div>
            <div style={{ marginBottom:'24px' }}>
              <StepCard step={steps[idx]} />
            </div>

            {/* Numbered circles progress */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px' }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center' }}>
                  <button onClick={() => setIdx(i)}
                    style={{ width:'44px', height:'44px', borderRadius:'50%', background: i === idx ? V : '#0d0d12', border:`2px solid ${i === idx ? V : 'rgba(193,112,232,0.3)'}`, color: i === idx ? '#fff' : 'rgba(255,255,255,0.4)', fontWeight:800, fontSize:'13px', cursor:'pointer', transition:'all 0.3s', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {s.num}
                  </button>
                  {i < steps.length - 1 && (
                    <div style={{ width:'28px', height:'2px', background: i < idx ? V : 'rgba(193,112,232,0.2)', transition:'all 0.3s' }}/>
                  )}
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div style={{ display:'flex', justifyContent:'center', gap:'16px' }}>
              <button onClick={() => setIdx(i => (i - 1 + steps.length) % steps.length)}
                style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'50%', width:'40px', height:'40px', color:'#fff', fontSize:'18px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>←</button>
              <button onClick={() => setIdx(i => (i + 1) % steps.length)}
                style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:'50%', width:'40px', height:'40px', color:'#fff', fontSize:'18px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>→</button>
            </div>
          </div>
        ) : (
          /* DESKTOP GRID */
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
            {steps.map((s, i) => (
              <div key={i} className="fade-in" style={{ animationDelay:`${i * 0.1}s` }}>
                <StepCard step={s} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
