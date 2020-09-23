import React from 'react'

export interface importProps {
  action: any
  loading?: React.ElementType | React.ReactNode
}

export interface AsyncComponentState {
  component?: React.ElementType | null
}