import React from 'react'

export interface importProps {
  action: any
  loading?: React.ElementType | React.ReactNode
}

export interface AsyncComponentState {
  component?: React.ElementType | null
}

export function LazyImport(props: importProps): (porps: any) => JSX.Element

export function AsyncImport(props: importProps): typeof AsyncComponent


declare class AsyncComponent extends React.Component<any, AsyncComponentState> {}