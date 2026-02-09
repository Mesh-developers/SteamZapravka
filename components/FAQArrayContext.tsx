// context/ArrayContext.tsx
"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

// Тип контекста
interface ArrayContextType {
  array: boolean[]
  updateFirstTwoValues: (first: boolean, second: boolean) => void
  resetArray: () => void
}

// Создаем контекст с дефолтными значениями
const ArrayContext = createContext<ArrayContextType | undefined>(undefined)

// Начальный массив
const initialArray = [false, false]

// Провайдер контекста
export const ArrayProvider = ({ children }: { children: ReactNode }) => {
  const [array, setArray] = useState<boolean[]>(initialArray)

  // Функция для обновления первых двух значений
  const updateFirstTwoValues = (first: boolean, second: boolean) => {
    setArray(prev => {
      const newArray = [...prev]
      newArray[0] = first
      newArray[1] = second
      return newArray
    })
  }

  // Функция для сброса массива
  const resetArray = () => {
    setArray(initialArray)
  }

  const value = {
    array,
    updateFirstTwoValues,
    resetArray
  }

  return (
    <ArrayContext.Provider value={value}>
      {children}
    </ArrayContext.Provider>
  )
}

// Кастомный хук для использования контекста
export const useArrayContext = () => {
  const context = useContext(ArrayContext)
  if (context === undefined) {
    throw new Error('useArrayContext must be used within an ArrayProvider')
  }
  return context
}