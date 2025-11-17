import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const team = [
  { name: 'Nova', role: 'Creative Coder', realm: 'sci-fi', color: 'from-cyan-400 to-blue-600', avatar: '🛸' },
  { name: 'Pixel', role: 'Design Alchemist', realm: 'pixels', color: 'from-pink-400 to-rose-600', avatar: '🧩' },
  { name: 'Arthas', role: 'Systems Paladin', realm: 'medieval', color: 'from-amber-400 to-orange-600', avatar: '🛡️' },
  { name: 'Doodle', role: 'Playful Illustrator', realm: 'doodle', color: 'from-lime-400 to-emerald-600', avatar: '✏️' },
]

export default function TeamSelect({ themeRing }) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + team.length) % team.length)
  const next = () => setIndex((i) => (i + 1) % team.length)

  const active = team[index]

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Meet the Party</h2>

        <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6">
          <button onClick={prev} className="rounded-full p-3 bg-white shadow hover:shadow-md transition" aria-label="Previous">
            <ChevronLeft />
          </button>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br shadow-lg">
            <div className={`absolute inset-0 bg-gradient-to-br ${active.color} opacity-80`} />
            <div className="relative z-10 h-full w-full grid grid-cols-4 gap-4 p-6">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`group rounded-xl bg-white/80 backdrop-blur border border-white/60 flex flex-col items-center justify-center p-4 transition-all ${
                    i === index ? 'ring-4 ' + themeRing + ' scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="text-5xl mb-3 select-none">{member.avatar}</div>
                  <div className="text-lg font-bold">{member.name}</div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} className="rounded-full p-3 bg-white shadow hover:shadow-md transition" aria-label="Next">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
