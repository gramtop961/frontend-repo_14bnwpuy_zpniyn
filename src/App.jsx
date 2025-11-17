import { useMemo, useState } from 'react'
import Hero from './components/Hero'
import RealmSwitcher from './components/RealmSwitcher'
import TeamSelect from './components/TeamSelect'
import Features from './components/Features'

const REALM_PRESETS = {
  'pixels': {
    overlay: 'bg-gradient-to-br from-pink-500/60 via-yellow-400/50 to-cyan-500/60',
    bg: 'bg-[radial-gradient(circle_at_20%_20%,#ffe1f2_0%,#f4f9ff_40%,#ffffff_100%)]',
    accent: 'bg-pink-500 text-white',
    ring: 'ring-pink-500/80',
    card: 'bg-white/80 backdrop-blur border border-white/60 shadow-lg',
    headline: 'Gamified.agency',
    subhead: 'A pixel‑perfect web studio turning ideas into playable experiences.'
  },
  'sci-fi': {
    overlay: 'bg-gradient-to-br from-indigo-600/60 via-cyan-500/50 to-emerald-500/60',
    bg: 'bg-[radial-gradient(circle_at_80%_20%,#e6f3ff_0%,#eef8ff_40%,#ffffff_100%)]',
    accent: 'bg-cyan-600 text-white',
    ring: 'ring-cyan-500/80',
    card: 'bg-white/70 backdrop-blur-md border border-white/60 shadow-lg',
    headline: 'Enter the Sci‑Fi Realm',
    subhead: 'Star‑forged products, quantum‑fast delivery.'
  },
  'medieval': {
    overlay: 'bg-gradient-to-br from-amber-600/60 via-rose-500/40 to-emerald-600/50',
    bg: 'bg-[radial-gradient(circle_at_50%_0%,#fff7e5_0%,#fffaf0_40%,#ffffff_100%)]',
    accent: 'bg-amber-700 text-amber-50',
    ring: 'ring-amber-600/80',
    card: 'bg-[linear-gradient(135deg,rgba(255,255,255,0.85)_0%,rgba(250,245,225,0.85)_100%)] backdrop-blur border border-amber-200/60 shadow-xl',
    headline: 'Medieval Guild of Websmiths',
    subhead: 'We forge sites in dragon‑fire and polish with elven runes.'
  },
  'doodle': {
    overlay: 'bg-gradient-to-br from-lime-500/60 via-sky-400/50 to-fuchsia-500/60',
    bg: 'bg-[conic-gradient(at_20%_30%,#fff_0%,#f1fff1_25%,#f1f7ff_50%,#fff0fb_75%,#fff_100%)]',
    accent: 'bg-lime-600 text-white',
    ring: 'ring-lime-500/80',
    card: 'bg-white/90 border-2 border-black shadow-[6px_6px_0_0_#000] [transform:skew(-0.5deg)]',
    headline: 'Hand‑drawn Chaos, Clean Code',
    subhead: 'Sketchy vibes, seriously good builds.'
  }
}

export default function App() {
  const [realm, setRealm] = useState('pixels')
  const preset = useMemo(() => REALM_PRESETS[realm], [realm])

  return (
    <div className={`min-h-screen ${preset.bg} text-gray-900`}> 
      <div className="fixed top-4 inset-x-0 z-20 flex justify-center">
        <RealmSwitcher activeRealm={realm} onChange={setRealm} />
      </div>

      <Hero overlay={preset.overlay} headline={preset.headline} subhead={preset.subhead} />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Choose Your Realm</h2>
          <p className="mt-3 text-gray-700/80 max-w-2xl mx-auto">
            Swap themes anytime with the switcher. Hit the R key to cycle. Each realm reskins the interface, animations, and accents so it feels like loading into a new world.
          </p>
        </div>
      </section>

      <TeamSelect themeRing={preset.ring} />

      <Features accent={preset.accent} cardStyle={preset.card} />

      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Gamified.agency — Built like a game, shipped like a product.
      </footer>
    </div>
  )
}
