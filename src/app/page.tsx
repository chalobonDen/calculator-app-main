'use client'

import Calculator from '@/components/Calculator'
import SwitchTheme from '@/components/SwitchTheme'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className={cn('flex min-h-screen flex-col items-center justify-center bg-background')}>
      <div className={cn('mb-6 flex w-full max-w-[437px] items-center justify-between px-5 md:px-0')}>
        <div className={cn('text-text-title text-2xl font-bold')}>calc</div>
        <SwitchTheme />
      </div>
      <Calculator />
    </div>
  )
}
