'use client'

import { useContext } from 'react'

import { ThemeContext } from './ThemeContext'
import { IThemeContextType } from '@/interfaces/modules/theme'

export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useContext<IThemeContextType>(ThemeContext)

  return (
    <div data-theme={theme} className={theme}>
      {children}
    </div>
  )
}
