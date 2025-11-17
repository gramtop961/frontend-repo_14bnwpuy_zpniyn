import { useEffect } from 'react'
import { Sparkles, Rocket, Castle, PencilLine } from 'lucide-react'

const realms = [
  {
    key: 'pixels',
    label: 'Pixels',
    icon: Sparkles,
  },
  {
    key: 'sci-fi',
    label: 'Sci‑fi',
    icon: Rocket,
  },
  {
    key: 'medieval',
    label: 'Medieval',
    icon: Castle,
  },
  {
    key: 'doodle',
    label: 'Doodle',
    icon: PencilLine,
  },
]

export default function RealmSwitcher({ activeRealm, onChange }) {
  useEffect(() => {
    // keyboard cycle between realms
    const handler = (e) => {
      if (e.key.toLowerCase() === 'r') {
        const idx = realms.findIndex((r) => r.key === activeRealm)
        const next = realms[(idx + 1) % realms.length]
        onChange(next.key)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [activeRealm, onChange])

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-2 py-1 shadow border border-white/50">
      {realms.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-all ${
            activeRealm === key
              ? 'bg-black text-white shadow-inner'
              : 'text-gray-700 hover:bg-black/5'
          }`}
          aria-pressed={activeRealm === key}
        >
          <Icon size={16} className="opacity-80" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
