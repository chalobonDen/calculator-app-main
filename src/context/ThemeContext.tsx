'use client'
import React, { createContext, useEffect, useState } from 'react'

import { Theme } from '@/enums/theme'
import { IThemeContextType } from '@/interfaces/modules/theme'

export const ThemeContext = createContext<IThemeContextType>({
  theme: Theme.DEFAULT,
  changeTheme: () => {},
})

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme | string>(Theme.DEFAULT)
  const [isMounted, setIsMounted] = useState<Boolean>(false)

  useEffect(() => {
    setIsMounted(true)
    const storedTheme = localStorage.getItem('theme') || Theme.DEFAULT
    setTheme(storedTheme)
  }, [])

  // if (!isMounted) {
  //   return <>Loading...</>
  // }

  const changeTheme = (theme: string | Theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}
