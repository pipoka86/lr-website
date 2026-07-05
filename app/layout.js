import './globals.css'
import MobileProvider from '@/components/MobileProvider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LR Social Media & Content — Agencia de Marketing Digital | Buenos Aires, Argentina',
  description: 'Agencia de marketing digital en Buenos Aires, Argentina. Gestión de redes sociales, creación de contenido, publicidad digital y diseño web para empresas y emprendedores de toda Argentina y Latinoamérica. Social media management agency. Agenzia marketing digitale. Agência marketing digital.',
  keywords: `
    agencia marketing digital Buenos Aires, agencia marketing digital Argentina, gestión redes sociales Argentina,
    community manager Buenos Aires, community manager Argentina remoto, social media manager Argentina,
    creación contenido redes sociales, publicidad digital Meta Google Ads, marketing digital CABA GBA,
    agencia contenido digital, marketing digital para emprendedores, redes sociales para empresas Argentina,
    gestión redes sociales Córdoba, gestión redes sociales Rosario, gestión redes sociales Mendoza,
    gestión redes sociales Tucumán, gestión redes sociales Salta, gestión redes sociales Jujuy,
    gestión redes sociales San Juan, gestión redes sociales San Luis, gestión redes sociales La Rioja,
    gestión redes sociales Catamarca, gestión redes sociales Santiago del Estero, gestión redes sociales Chaco,
    gestión redes sociales Formosa, gestión redes sociales Misiones, gestión redes sociales Corrientes,
    gestión redes sociales Entre Ríos, gestión redes sociales Santa Fe, gestión redes sociales La Pampa,
    gestión redes sociales Neuquén, gestión redes sociales Río Negro, gestión redes sociales Chubut,
    gestión redes sociales Santa Cruz, gestión redes sociales Tierra del Fuego,
    social media management Argentina, digital marketing agency Buenos Aires, social media agency Argentina,
    gestione social media Argentina, agenzia marketing digitale Buenos Aires, gestione reti sociali Argentina,
    gestão redes sociais Argentina, agência marketing digital Buenos Aires, gestão mídia social Argentina,
    agencia marketing digital gastronomia restaurantes, community manager gastronomia,
    marketing digital turismo hoteles viajes, redes sociales turismo Argentina,
    marketing digital inmobiliarias propiedades, community manager inmobiliarias,
    marketing fitness gym salud bienestar, redes sociales gym fitness,
    marketing digital moda lifestyle indumentaria, redes sociales moda,
    marketing digital ecommerce tiendas online, community manager ecommerce,
    marketing digital salud medicos clinicas, redes sociales salud,
    marketing digital odontologia dentistas, community manager odontologia,
    marketing digital psicologia coaches terapeutas, redes sociales psicologia,
    marketing digital abogados estudios juridicos, community manager abogados,
    marketing digital contadores finanzas, redes sociales contadores,
    marketing digital arquitectos constructoras, community manager arquitectura,
    marketing digital educacion cursos academia, redes sociales educacion,
    marketing digital veterinarias mascotas, community manager veterinaria,
    marketing digital estetica belleza spa peluquerias, redes sociales belleza,
    marketing digital automotrices concesionarias, community manager automotrices,
    marketing digital seguros finanzas crypto, redes sociales finanzas,
    marketing digital tecnologia startups, community manager tech startup,
    marketing digital ONG instituciones, redes sociales organizaciones,
    marketing para marcas personales influencers, personal branding Argentina,
    creacion reels profesionales Argentina, diseño contenido redes sociales,
    gestion Instagram profesional Argentina, publicidad Meta Ads Argentina,
    Google Ads para pequeñas empresas Argentina, aumentar seguidores Instagram,
    como hacer crecer mi marca en redes, agencia que gestione mis redes sociales,
    costo community manager Argentina, precio gestion redes sociales Argentina,
    marketing digital Latinoamerica, agencia marketing digital hispanohablante,
    social media management en español, marketing digital para empresas latinas
  `,
  authors: [{ name: 'LR Social Media & Content' }],
  creator: 'LR Social Media & Content',
  publisher: 'LR Social Media & Content',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://lrsocialmedia.com.ar',
    siteName: 'LR Social Media & Content',
    title: 'LR Social Media & Content — Agencia de Marketing Digital | Argentina',
    description: 'Gestión de redes sociales, creación de contenido y publicidad digital para empresas y emprendedores de toda Argentina y Latinoamérica.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'LR Social Media & Content — Agencia de Marketing Digital Argentina' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LR Social Media & Content — Marketing Digital Argentina',
    description: 'Gestión de redes sociales, contenido y publicidad digital para toda Argentina y Latinoamérica.',
  },
  alternates: {
    canonical: 'https://lrsocialmedia.com.ar',
  },
  viewport: 'width=device-width, initial-scale=1',
}


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#050507" />
      </head>
      <body className={inter.className} style={{ background: '#050507', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <MobileProvider>{children}</MobileProvider>
      <a href="https://wa.link/fj0ujx" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
      </body>
    </html>
  )
}
