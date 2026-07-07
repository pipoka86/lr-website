'use client'
import { useEffect } from 'react'

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = () => {
      const elements = document.querySelectorAll('.fade-in')
      elements.forEach(el => observer.observe(el))
    }

    observe()
    // Re-observe after a short delay to catch dynamically rendered elements
    setTimeout(observe, 500)

    return () => observer.disconnect()
  }, [])

  return null
}
