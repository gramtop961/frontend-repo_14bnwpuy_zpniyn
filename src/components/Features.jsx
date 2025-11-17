import { Controller, Zap, Paintbrush, Rocket } from 'lucide-react'

export default function Features({ accent, cardStyle }) {
  const items = [
    {
      icon: Controller,
      title: 'Quest-Based Projects',
      text: 'Turn briefs into quests with progress, rewards, and boss fights at launch time.',
    },
    {
      icon: Paintbrush,
      title: 'Adaptive Realms',
      text: 'Switch the entire vibe between Pixels, Sci‑fi, Medieval, and Doodle with one tap.',
    },
    {
      icon: Zap,
      title: 'Power‑Ups',
      text: 'Scope potions, turbo sprints, and XP dashboards to level up your product.',
    },
    {
      icon: Rocket,
      title: 'Launch Cinematics',
      text: 'Every ship has a cut‑scene. We choreograph your go‑live like a final boss.',
    },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Game‑like Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`relative rounded-2xl p-6 ${cardStyle} transition-transform hover:-translate-y-1`}> 
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}>
                <Icon size={20} />
              </div>
              <div className="mt-4 font-bold text-lg">{title}</div>
              <p className="mt-2 text-sm text-gray-700/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
