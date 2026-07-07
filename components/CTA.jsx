'use client'
import useIsMobile from './useIsMobile'
import { useState } from 'react'
const V = '#c170e8'

export default function CTA() {
  const isMobile = useIsMobile()
  const [form, setForm] = useState({ nombre:'', email:'', telefono:'', empresa:'', mensaje:'' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async () => {
    if (!form.nombre || !form.email) return
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: 'df4aa2de-1930-43a3-9f2f-0b1a66476429',
          subject: 'Nuevo contacto desde lrsocialmedia.com.ar',
          from_name: form.nombre,
          name: form.nombre,
          email: form.email,
          phone: form.telefono,
          company: form.empresa,
          message: form.mensaje,
        })
      })
      const data = await res.json()
      if (data.success) setSent(true)
      else alert('Hubo un error, intentá de nuevo.')
    } catch(e) {
      alert('Hubo un error, intentá de nuevo.')
    }
  }

  return (
    <section id="cta" style={{ padding:'80px 0', background:'#050507', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'600px', height:'600px', borderRadius:'50%', background:'rgba(193,112,232,0.05)', filter:'blur(80px)', pointerEvents:'none' }}/>
      <div style={{ width:'100%', maxWidth:'1200px', margin:'0 auto', padding: isMobile ? '0 16px' : '0 24px', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div className="fade-in" style={{ textAlign:'center', marginBottom:'60px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', borderRadius:'100px', background:'rgba(193,112,232,0.12)', border:'1px solid rgba(193,112,232,0.25)', color:V, fontSize:'11px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'24px' }}>
            <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#c170e8', animation:'pulse-anim 2s ease-in-out infinite' }}/>
            Disponible para nuevos proyectos
          </div>
          <h2 style={{ fontSize:'clamp(36px,5vw,72px)', fontWeight:900, letterSpacing:'-0.02em', lineHeight:1.05, color:'#fff', marginBottom:'16px', overflow:'visible', paddingBottom:'8px' }}>
            ¿Listo para dar el<br/>
            <span className="text-gradient" style={{ fontStyle:'italic', display:'inline-block', paddingRight:'16px', paddingBottom:'8px', lineHeight:1.15 }}>siguiente paso?</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'18px', maxWidth:'560px', margin:'0 auto', lineHeight:1.6 }}>
            Escribinos y contanos sobre tu proyecto. Te armamos una propuesta a medida sin compromiso.
          </p>
        </div>

        {/* Grid: formulario izquierda, info derecha */}
        <div className="cta-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'stretch' }}>

          {/* Formulario */}
          <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'20px', padding:'36px' }}>
            {sent ? (
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <div style={{ fontSize:'48px', marginBottom:'16px' }}>✦</div>
                <h3 style={{ color:'#fff', fontSize:'22px', fontWeight:700, marginBottom:'8px' }}>¡Mensaje enviado!</h3>
                <p style={{ color:'rgba(255,255,255,0.5)' }}>Te respondemos en menos de 1 hora.</p>
              </div>
            ) : (
              <>
                <div className="cta-form-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginBottom:'16px' }}>
                  {[
                    { key:'nombre', label:'Tu nombre', placeholder:'Luis García' },
                    { key:'email', label:'Email', placeholder:'luis@email.com' },
                    { key:'telefono', label:'Teléfono', placeholder:'+54 11 1234-5678' },
                    { key:'empresa', label:'Empresa / Marca', placeholder:'Mi Marca' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display:'block', color:'rgba(255,255,255,0.5)', fontSize:'12px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'8px' }}>{f.label}</label>
                      <input value={form[f.key]} onChange={e => setForm(p => ({...p, [f.key]: e.target.value}))}
                        placeholder={f.placeholder}
                        style={{ width:'100%', padding:'12px 16px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', color:'#fff', fontSize:'14px', fontFamily:'inherit', outline:'none', boxSizing:'border-box', transition:'border-color 0.2s' }}
                        onFocus={e => e.target.style.borderColor=V}
                        onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.1)'}/>
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom:'20px' }}>
                  <label style={{ display:'block', color:'rgba(255,255,255,0.5)', fontSize:'12px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'8px' }}>Contanos sobre tu proyecto</label>
                  <textarea value={form.mensaje} onChange={e => setForm(p => ({...p, mensaje: e.target.value}))}
                    placeholder="Contanos qué necesitás..."
                    rows={4}
                    style={{ width:'100%', padding:'12px 16px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', color:'#fff', fontSize:'14px', fontFamily:'inherit', outline:'none', resize:'vertical', boxSizing:'border-box', transition:'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor=V}
                    onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.1)'}/>
                </div>
                <button onClick={handleSubmit} className="btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:'16px', padding:'16px' }}>
                  Enviar mensaje <span className="arr">→</span>
                </button>
                <p style={{ color:'rgba(255,255,255,0.3)', fontSize:'12px', textAlign:'center', marginTop:'12px' }}>
                  Te respondemos lo antes posible — generalmente en menos de 1 hora.
                </p>
              </>
            )}
          </div>

          {/* Info derecha */}
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {/* Contactos */}
            {[
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>, label:'WhatsApp', sub:'Escribinos directo', href:'https://wa.me/5491158460123?text=Hola%21%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital.%20%C2%BFPodemos%20hablar%3F' },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, label:'Instagram', sub:'@lr.socialcontent', href:'https://www.instagram.com/lr.socialcontent/' },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={V} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label:'E-Mail', sub:'info@lrsocialmedia.com.ar', href:'mailto:info@lrsocialmedia.com.ar' },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                style={{ display:'flex', alignItems:'center', gap:'16px', padding:'20px 24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', textDecoration:'none', transition:'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(193,112,232,0.4)'; e.currentTarget.style.background='rgba(193,112,232,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.background='rgba(255,255,255,0.03)' }}>
                <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:'rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color:'#fff', fontWeight:700, fontSize:'15px', marginBottom:'2px' }}>{item.label}</p>
                  <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'13px' }}>{item.sub}</p>
                </div>
                <span style={{ marginLeft:'auto', color:'rgba(255,255,255,0.2)', fontSize:'16px' }}>→</span>
              </a>
            ))}

            {/* Info box */}
            <div style={{ padding:'24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', display:'flex', flexDirection:'column', gap:'14px' }}>
              <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'11px', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase' }}>Info</p>
              {[
                { icon:'📍', text:'Buenos Aires, Argentina' },
                { icon:'🕐', text:'Lunes a Viernes 9:00 a 18:00 hs' },
                { icon:'⚡', text:'Respuesta en menos de 1 hora' },
              ].map((item, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <span style={{ fontSize:'16px' }}>{item.icon}</span>
                  <span style={{ color:'rgba(255,255,255,0.6)', fontSize:'14px' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sello */}
        <div style={{ display:'flex', justifyContent:'center', marginTop:'60px' }}>
          <div style={{ position:'relative', width:'80px', height:'80px' }}>
            <svg viewBox="0 0 100 100" width="80" height="80" style={{ animation:'spin-slow 20s linear infinite' }}>
              <path id="cp3" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
              <text style={{ fontSize:'10px', fill:'rgba(255,255,255,0.3)', fontWeight:700, letterSpacing:'0.3em' }}>
                <textPath href="#cp3">LR SOCIAL CONTENT · ARGENTINA · </textPath>
              </text>
            </svg>
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', color:V, fontSize:'20px' }}>✦</div>
          </div>
        </div>

      </div>
    </section>
  )
}
