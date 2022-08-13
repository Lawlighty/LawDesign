import type React from 'react'

interface onClick {
  (): void
}
export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'error' | 'disabled'
  children: React.ReactNode
  onClick?: onClick
  [props: string]: any
}
