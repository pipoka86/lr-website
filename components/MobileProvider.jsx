'use client'
import { useEffect } from 'react'

export default function MobileProvider({ children }) {
  useEffect(() => {
    const check = () => {
      if (window.innerWidth <= 768) {
        document.body.classList.add('is-mobile')
      } else {
        document.body.classList.remove('is-mobile')
      }
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return children
}
