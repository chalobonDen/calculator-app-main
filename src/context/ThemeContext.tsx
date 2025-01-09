'use client'
import React, { createContext, useEffect, useState } from 'react'

import { Theme } from '@/enums/theme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme | string>(Theme.PRIMARY)
  const [isMounted, setIsMounted] = useState<Boolean>(false)

  useEffect(() => {
    setIsMounted(true)
    const storedTheme = localStorage.getItem('theme') || Theme.PRIMARY
    setTheme(storedTheme)
  }, [])

  if (!isMounted) {
    return <>Loading...</>
  }

  const changeTheme = (theme: string | Theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}
