'use client'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Only apply on mobile
    if (window.innerWidth > 768) return

    let rafId
    let currentY = window.scrollY
    let targetY = window.scrollY
    const ease = 0.08

    const onWheel = (e) => {
      e.preventDefault()
      targetY += e.deltaY
      targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight))
    }

    const tick = () => {
      currentY += (targetY - currentY) * ease
      window.scrollTo(0, currentY)
      rafId = requestAnimationFrame(tick)
    }

    // Only on desktop-like touch devices, not phones (phones have native smooth scroll)
    // For mobile, just add CSS smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = ''
      cancelAnimationFrame(rafId)
    }
  }, [])

  return null
}
