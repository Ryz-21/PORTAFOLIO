import React from 'react'

export default function About() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto animate-reveal text-center">
      <h2 className="text-5xl font-black uppercase mb-12 italic">Servicios</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {['Diseño', 'Desarrollo', 'Estrategia'].map(s => (
          <div key={s} className="p-12 border-4 border-black dark:border-white">
            <h3 className="text-3xl font-black uppercase">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
