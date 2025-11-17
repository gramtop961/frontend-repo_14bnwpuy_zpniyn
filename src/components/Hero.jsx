import Spline from '@splinetool/react-spline'

export default function Hero({ overlay, headline, subhead }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
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
