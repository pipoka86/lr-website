'use client'
import { useEffect, useRef, useState } from 'react'
import useIsMobile from './useIsMobile'

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true
        let start = null
        const duration = 1800
        const animate = (ts) => {
          if (!start) start = ts
          const progress = Math.min((ts - start) / duration, 1)
          setValue(Math.floor(progress * target))
          if (progress < 1) requestAnimationFrame(animate)
          else setValue(target)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{value}{suffix}</span>
}

const stats = [
  { target: 15, suffix: '+', label: 'Marcas Gestionadas', sub: 'Emprendimientos y empresas' },
  { target: 500, suffix: 'K+', label: 'Alcance Generado', sub: 'En redes sociales' },
  { target: 800, suffix: '+', label: 'Contenidos Creados', sub: 'Reels, posts y stories' },
  { target: 100, suffix: '%', label: 'Compromiso', sub: 'Con cada proyecto' },
]

export default function Stats() {
  const isMobile = useIsMobile()
  return (
    <section style={{ position: 'relative', padding: '80px 16px', overflow: 'hidden', background: 'linear-gradient(135deg,#c170e8 0%,#a64fd6 50%,#c170e8 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%,rgba(255,255,255,0.12),transparent 60%)' }}/>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: '32px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(48px,7vw,96px)', fontWeight: 900, color: '#050507', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              <Counter target={s.target} suffix={s.suffix}/>
            </div>
            <p style={{ marginTop: '16px', fontSize: '18px', fontWeight: 700, color: 'rgba(5,5,7,0.85)' }}>{s.label}</p>
            <p style={{ marginTop: '4px', fontSize: '12px', color: 'rgba(5,5,7,0.55)' }}>{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
