'use client'
import useIsMobile from './useIsMobile'
const V = '#c170e8'

const Badge = ({ text }) => (
  <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'11px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'24px' }}>
    <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:V, animation:'pulse-anim 2s ease-in-out infinite' }}/>
    {text}
  </div>
)

const valores = [
  { title:'Estrategia personalizada', desc:'Cada cliente es único. Cada plan también. No usamos fórmulas genéricas.' },
  { title:'Resultados medibles', desc:'Decisiones basadas en datos reales, no suposiciones. Te mostramos números concretos.' },
  { title:'Contenido de calidad', desc:'Gestión profesional que construye marcas sólidas y genera confianza.' },
]

export default function Nosotros() {
  const isMobile = useIsMobile()
  return (
    <section id="nosotros" style={{ background:'#050507', padding:'80px 0', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'30%', left:'50%', transform:'translate(-50%,-50%)', width:'600px', height:'600px', borderRadius:'50%', background:'rgba(193,112,232,0.04)', filter:'blur(100px)', pointerEvents:'none' }}/>

      <div style={{ width:'100%', maxWidth:'1100px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 24px', position:'relative', zIndex:1 }}>

        {/* Quienes somos */}
        <div className="fade-in" style={{ textAlign:'center', marginBottom:'64px' }}>
          <Badge text="Quienes somos"/>
          <h2 style={{ fontSize:'clamp(36px,5vw,68px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1.05, color:'#fff', marginBottom:'20px' }}>
            Más que un servicio.<br/>
            <span className="text-gradient" style={{ fontStyle:'italic' }}>Somos un equipo.</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'clamp(16px,1.8vw,19px)', maxWidth:'700px', margin:'0 auto', lineHeight:1.7 }}>
            En LR Social Media & Content ayudamos a marcas y emprendedores a transformar sus redes en herramientas reales de venta — con estrategia, contenido de calidad y resultados medibles.
          </p>
        </div>

        {/* Nuestra historia */}
        <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(193,112,232,0.2)', borderRadius:'20px', padding:'40px 48px', marginBottom:'80px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:0, left:0, width:'4px', height:'100%', background:`linear-gradient(to bottom, ${V}, transparent)` }}/>
          <h3 style={{ fontSize:'20px', fontWeight:800, color:'#fff', marginBottom:'20px', letterSpacing:'0.05em', textTransform:'uppercase', opacity:0.5 }}>Nuestra historia</h3>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'16px', lineHeight:1.85, marginBottom:'16px' }}>
            LR Social Media & Content nació de una convicción simple: las marcas merecen una presencia digital que esté a la altura de lo que ofrecen.
          </p>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'16px', lineHeight:1.85, marginBottom:'16px' }}>
            Vimos que muchos emprendedores y empresas tenían productos y servicios increíbles, pero sus redes sociales no los representaban. Publicaban sin estrategia, sin datos, sin una voz clara.
          </p>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'16px', lineHeight:1.85, marginBottom:'16px' }}>
            Ahí decidimos crear algo diferente: una agencia que no solo publique contenido, sino que entienda cada marca, construya una estrategia real y entregue resultados concretos.
          </p>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'16px', lineHeight:1.85 }}>
            Hoy trabajamos con marcas de distintas industrias — gastronomía, inmobiliarias, fitness, moda — y cada proyecto es único. Porque cada cliente es único. Y cada plan también.
          </p>
        </div>

        {/* Valores */}
        <div className="fade-in" style={{ textAlign:'center', marginBottom:'40px' }}>
          <Badge text="Nuestros valores"/>
          <h2 style={{ fontSize:'clamp(32px,4vw,56px)', fontWeight:900, letterSpacing:'-0.02em', color:'#fff' }}>Lo que nos define</h2>
        </div>

        <div className="nosotros-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px', marginBottom:'80px' }}>
          {valores.map((v, i) => (
            <div key={i} style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'16px', padding:'32px', transition:'all 0.3s', cursor:'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.borderColor='rgba(193,112,232,0.4)'; e.currentTarget.style.background='rgba(193,112,232,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.background='rgba(255,255,255,0.03)' }}>
              <div style={{ width:'36px', height:'4px', background:V, borderRadius:'2px', marginBottom:'18px' }}/>
              <h4 style={{ fontSize:'18px', fontWeight:700, color:'#fff', marginBottom:'12px' }}>{v.title}</h4>
              <p style={{ color:'rgba(255,255,255,0.55)', fontSize:'15px', lineHeight:1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Compromiso */}
        <div className="fade-in" style={{ textAlign:'center', marginBottom:'32px' }}>
          <Badge text="Nuestro compromiso"/>
        </div>
        <div style={{ border:'1px solid rgba(193,112,232,0.5)', borderRadius:'20px', padding:'40px 48px', textAlign:'center', marginBottom:'64px', background:'rgba(193,112,232,0.05)', boxShadow:'0 0 40px rgba(193,112,232,0.1)' }}>
          <p style={{ fontSize:'clamp(20px,3vw,30px)', fontWeight:700, color:'#fff', lineHeight:1.5, fontStyle:'italic' }}>
            "No publicamos por publicar.<br/>
            <span className="text-gradient">Trabajamos para que tu marca crezca de verdad."</span>
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center' }}>
          <h3 style={{ fontSize:'clamp(24px,3vw,36px)', fontWeight:800, color:'#fff', marginBottom:'12px' }}>¿Querés ser parte del equipo?</h3>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'17px', marginBottom:'28px', lineHeight:1.6 }}>
            Nos encanta conocer nuevas marcas y proyectos. Escribinos y contanos qué tenés en mente.
          </p>
          <a href="https://wa.me/5491158460123?text=Hola%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital.%20%C2%BFPodemos%20hablar%3F" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize:'17px', padding:'16px 36px' }}>
            Escribinos <span className="arr">→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
