'use client'
import { useEffect, useRef, useState } from 'react'
const V = '#c170e8'

function Galaxy() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 350 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.2, o: Math.random() * 0.8 + 0.2,
      t: Math.random() * Math.PI * 2, s: Math.random() * 0.02 + 0.005,
    }))

    const shoots = []
    const addShoot = () => shoots.push({
      x: Math.random() * canvas.width * 0.9,
      y: Math.random() * canvas.height * 0.5,
      len: Math.random() * 200 + 80,
      speed: Math.random() * 14 + 8,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
      life: 1, decay: Math.random() * 0.01 + 0.006,
      color: Math.random() > 0.4 ? '255,255,255' : '193,112,232',
      width: Math.random() > 0.4 ? 1.5 : 2.5,
    })

    let frame = 0, animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.t += s.s
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.o * (0.55 + 0.45 * Math.sin(s.t))})`; ctx.fill()
      })

      // More frequent shooting stars
      if (frame % 55 === 0) addShoot()
      if (frame % 90 === 0) addShoot()
      if (frame % 150 === 0 && Math.random() > 0.3) addShoot()

      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i]
        const dx = Math.cos(s.angle) * s.len * s.life
        const dy = Math.sin(s.angle) * s.len * s.life
        const g = ctx.createLinearGradient(s.x, s.y, s.x - dx, s.y - dy)
        g.addColorStop(0, `rgba(${s.color},${s.life})`)
        g.addColorStop(0.3, `rgba(${s.color},${s.life * 0.4})`)
        g.addColorStop(1, `rgba(${s.color},0)`)
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - dx, s.y - dy)
        ctx.strokeStyle = g; ctx.lineWidth = s.width; ctx.stroke()
        s.x += Math.cos(s.angle) * s.speed; s.y += Math.sin(s.angle) * s.speed
        s.life -= s.decay; if (s.life <= 0) shoots.splice(i, 1)
      }
      frame++; animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none' }}/>
}

export default function Hero() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return (
    <section id="inicio" style={{ position:'relative', minHeight:'100vh', paddingTop:'96px', background:'#030303', display:'flex', alignItems:'center', overflow:'hidden' }}>
      <Galaxy/>

      <div className="hero-grid" style={{ position:'relative', zIndex:10, width:'100%', maxWidth:'1400px', margin:'0 auto' }}>

        {/* Texto izquierda */}
        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'11px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'28px' }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:V, animation:'pulse-anim 2s ease-in-out infinite' }}/>
            Agencia de Marketing Digital
          </div>
          <h1 style={{ fontSize:'clamp(48px,6vw,96px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:0.95, color:'#fff', marginBottom:'28px' }}>
            Hacemos<br/>crecer tu{' '}
            <span className="text-gradient" style={{ fontStyle:'italic', paddingRight:'12px' }}>marca.</span>
          </h1>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'clamp(16px,1.8vw,20px)', maxWidth: isMobile ? '100%' : '520px', marginBottom:'36px', lineHeight:1.65 }}>
            Estrategia, contenido y gestión de redes sociales para empresas y emprendedores que buscan resultados reales.
          </p>
          <div className="hero-btns" style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap:'wrap', gap:'12px', marginBottom:'48px', alignItems: isMobile ? 'stretch' : 'center' }}>
            <a href="https://wa.link/fj0ujx" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Quiero hacer crecer mi marca <span className="arr">→</span>
            </a>
            <button onClick={() => go('#servicios')} className="btn-secondary">Conocé nuestros servicios</button>
          </div>
          <div className="fade-in" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px' }}>
            <span style={{ color:'rgba(255,255,255,0.2)', fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase' }}>Scroll</span>
            <div style={{ width:'20px', height:'32px', borderRadius:'100px', border:'1px solid rgba(255,255,255,0.2)', display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4px' }}>
              <div style={{ width:'4px', height:'8px', borderRadius:'100px', background:V, animation:'pulse-anim 2s ease-in-out infinite' }}/>
            </div>
          </div>
        </div>

        {/* Video derecha — mix-blend-mode screen */}
        <div className="hero-video-col" style={{ alignItems:'center', justifyContent:'center' }}>
          <video autoPlay muted loop playsInline
            style={{ width:'100%', maxWidth:'480px', objectFit:'contain', mixBlendMode:'screen', pointerEvents:'none' }}>
            <source src="/hero-video.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>

      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'100px', background:'linear-gradient(to top,#030303,transparent)', pointerEvents:'none', zIndex:10 }}/>
    </section>
  )
}
