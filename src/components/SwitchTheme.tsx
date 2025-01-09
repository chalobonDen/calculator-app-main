import React, { useContext, useState } from 'react'

import { cn } from '@/lib/utils'
import { ThemeContext } from '@/context/ThemeContext'
import { Theme } from '@/enums/theme'
import { IThemeContextType } from '@/interfaces/modules/theme'

const SwitchTheme = () => {
  const { theme, changeTheme } = useContext<IThemeContextType>(ThemeContext)

  const handleChangeTheme = (value: Theme) => {
    changeTheme(value)
  }

  return (
    <div className={cn('flex flex-col items-end')}>
      <div className={cn('text-text-title mb-0.5 flex w-12 justify-between text-[9px] font-bold')}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className={cn('flex items-center space-x-8')}>
        <div className={cn('text-text-title text-xs font-bold')}>THEME</div>
        <div>
          <div className={cn('bg-bg-switch w-12 rounded-full p-1')}>
            <div
              className={cn(
                'bg-btn-change h-3 w-3 cursor-pointer rounded-full transition-transform',
                theme === Theme.DEFAULT
                  ? 'translate-x-0 transform'
                  : theme === Theme.LIGHT
                    ? 'translate-x-4 transform'
                    : 'translate-x-8 transform',
              )}
              onClick={() =>
                handleChangeTheme(
                  theme === Theme.DEFAULT ? Theme.LIGHT : theme === Theme.LIGHT ? Theme.DARK : Theme.DEFAULT,
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchTheme
