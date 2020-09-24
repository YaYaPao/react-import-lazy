import React, { Suspense } from 'react'
import { importProps, AsyncComponentState } from '../../index.d'

// based on React lazy() and Suspense
export function LazyImport(props: importProps) {
  const { action, loading } = props
  const LazyComponent = React.lazy(() => action as any)

  return (porps: any) => {
    return (
      <div>
        <Suspense fallback={loading || <div>Loading...</div>}>
          <LazyComponent {...porps} />
        </Suspense>
      </div>
    )
  }
}

// based on import().then()
export function AsyncImport(props: importProps) {
  const { action, loading } = props
  class AsyncComponent extends React.Component<{}, AsyncComponentState> {
    constructor(props: any) {
      super(props)
      this.state = {
        component: null,
      }
    }

    componentDidMount() {
      action &&
        action.then((cm: any) => {
          this.setState({
            component: cm.default ? cm.default : cm,
          })
        })
    }

    render() {
      if (this.state.component) {
        const Current = this.state.component
        return <Current {...this.props} />
      }
      return loading || <div>loading...</div>
    }
  }
  return AsyncComponent
}
