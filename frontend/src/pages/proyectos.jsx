import React from 'react'

export default function Proyectos() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto animate-reveal">
      <h2 className="text-5xl font-black uppercase mb-12">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="aspect-video bg-zinc-100 dark:bg-zinc-900 border-2 border-black dark:border-white p-8 group cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-500">
            <span className="text-6xl font-black opacity-10">0{i}</span>
            <h3 className="text-3xl font-black uppercase mt-4">Proyecto Ejemplo</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
