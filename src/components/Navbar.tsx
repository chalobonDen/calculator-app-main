'use client'
import React, { useContext } from 'react'

import { ThemeContext } from '@/context/ThemeContext'
import { Theme } from '@/enums/theme'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const { changeTheme } = useContext<any>(ThemeContext)

  return (
    <div className={cn('flex space-x-2')}>
      <button onClick={() => changeTheme(Theme.DEFAULT)}>default</button>
      <button onClick={() => changeTheme(Theme.LIGHT)}>light</button>
      <button onClick={() => changeTheme(Theme.DARK)}>dark</button>
    </div>
  )
}

export default Navbar
