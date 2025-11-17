import React, { Suspense, useEffect, useState } from 'react'

// Lazy load Spline to avoid hard crashes if WebGL or the package fails to initialize
const LazySpline = React.lazy(() => import('@splinetool/react-spline').then(mod => ({ default: mod.default })))

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(err) { console.error('Hero Spline error:', err) }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

export default function Hero({ overlay, headline, subhead }) {
  const [canRenderSpline, setCanRenderSpline] = useState(false)

  // Only attempt to render Spline on client and when WebGL is likely available
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setCanRenderSpline(!!gl)
    } catch {
      setCanRenderSpline(false)
    }
  }, [])

  const Fallback = (
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200" />
  )

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <ErrorBoundary fallback={Fallback}>
          {canRenderSpline ? (
            <Suspense fallback={Fallback}>
              <LazySpline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </Suspense>
          ) : (
            Fallback
          )}
        </ErrorBoundary>
      </div>

      {/* overlay gradients per realm */}
      <div className={`pointer-events-none absolute inset-0 mix-blend-multiply ${overlay}`} />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-sm text-white">
            {headline}
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-2xl">
            {subhead}
          </p>
        </div>
      </div>
    </section>
  )
}
