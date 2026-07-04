'use client'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Stats from '@/components/Stats'
import Servicios from '@/components/Servicios'
import Planes from '@/components/Planes'
import Nosotros from '@/components/Nosotros'
import Proceso from '@/components/Proceso'
import Testimonios from '@/components/Testimonios'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Marquee/>
        <Stats/>
        <Servicios/>
        <Planes/>
        <Nosotros/>
        <Proceso/>
        <Testimonios/>
        <FAQ/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}
