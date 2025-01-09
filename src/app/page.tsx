'use client'

import Calculator from '@/components/Calculator'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div
      className={cn(
        'flex min-h-screen items-center justify-items-center bg-background',
        // 'grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20',
      )}
    >
      <Calculator />
    </div>
  )
}
