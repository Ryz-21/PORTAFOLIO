import React from 'react'

export default function Contacto() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto animate-reveal">
      <h2 className="text-5xl font-black uppercase mb-8">Contacto</h2>
      <form className="space-y-6">
        <input className="w-full p-4 border-2 border-black dark:border-white bg-transparent font-bold outline-none" placeholder="Nombre" />
        <input className="w-full p-4 border-2 border-black dark:border-white bg-transparent font-bold outline-none" placeholder="Email" />
        <textarea rows="5" className="w-full p-4 border-2 border-black dark:border-white bg-transparent font-bold outline-none" placeholder="Mensaje" />
        <button className="btn-alive w-full py-4 text-xl">Enviar</button>
      </form>
    </section>
  )
}
