'use client'

import { useContext } from 'react'

import { ThemeContext } from './ThemeContext'

export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useContext<any>(ThemeContext)

  return (
    <div data-theme={theme} className={theme}>
      {children}
    </div>
  )
}
