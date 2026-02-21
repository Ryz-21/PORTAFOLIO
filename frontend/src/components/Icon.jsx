import React from 'react'
import { useTheme } from '../context/ThemeContext'

/**
 * Icon component that automatically adapts color based on theme
 * @param {Object} props - Icon properties
 * @param {'sun' | 'moon' | 'menu' | 'close'} props.type - Icon type
 * @param {string} props.size - Tailwind size class (default: 'h-5 w-5')
 * @param {string} props.className - Additional Tailwind classes
 * @returns {JSX.Element} SVG icon
 */
export function Icon({ type = 'moon', size = 'h-5 w-5', className = '' }) {
  const { darkMode } = useTheme()
  const color = darkMode ? 'currentColor text-white' : 'currentColor text-black'

  const icons = {
    sun: (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
    ),
    moon: (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
    menu: (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    close: (
      <svg xmlns="http://www.w3.org/2000/svg" className={`${size} ${color} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  }

  return icons[type] || icons.moon
}

export default Icon
