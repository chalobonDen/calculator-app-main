'use client'
import React, { useState } from 'react'

import { CalculatorButton } from '@/enums/calculator'
import { cn } from '@/lib/utils'

const Calculator = () => {
  const [result, setResult] = useState('')

  const handleClick = (value: CalculatorButton) => {
    switch (value) {
      case CalculatorButton.EQUAL:
        try {
          setResult(String(eval(result) || ''))
        } catch (error) {
          setResult('Error')
        }
        break
      case CalculatorButton.RESET:
        setResult('')
        break
      case CalculatorButton.DELETE:
        setResult(result?.slice(0, -1))
        break
      default:
        setResult(result + value)
    }
  }

  return (
    <div className={cn('mx-auto flex flex-col px-5')}>
      <label htmlFor="result" className="sr-only">
        Result
      </label>
      <input
        type="text"
        className={cn(
          'bg-result text-text-result mb-3 w-full rounded-lg p-3 text-right text-4xl font-bold outline-none',
        )}
        value={result}
        readOnly
      />
      <div className="bg-bg-secondary rounded-lg p-5 shadow-lg">
        <div className="grid grid-cols-4 gap-4">
          {Object.values(CalculatorButton).map((value) => {
            const isSpecialButton = [CalculatorButton.EQUAL, CalculatorButton.RESET, CalculatorButton.DELETE].includes(
              value,
            )
            return (
              <button
                key={value}
                className={cn(
                  'rounded-lg p-3 text-xl font-bold',
                  'btn bg-btn-number',
                  !isSpecialButton && 'hover:bg-btn-hover text-3xl',
                  'border-btn-border-b border-b-4',
                  'text-btn-text',
                  (value === CalculatorButton.EQUAL || value === CalculatorButton.RESET) && 'col-span-2',
                  (value === CalculatorButton.RESET || value === CalculatorButton.DELETE) && 'bg-btn-delete text-white',
                  value === CalculatorButton.EQUAL && 'bg-btn-equal text-equal',
                )}
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calculator
