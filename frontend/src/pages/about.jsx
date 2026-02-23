import React from 'react'
import { FaReact, FaAngular, FaJava, FaFigma } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiOracle, SiJavascript, SiUml } from 'react-icons/si'

export default function About() {

  const services = [
    {
      title: "Desarrollo",
      description: "Construyo aplicaciones web modernas y APIs robustas con tecnologías actuales.",
      icons: [<FaReact />, <FaAngular />, <FaJava />, <SiSpringboot />, <SiJavascript />, <SiMysql />, <SiOracle />]
    },
    {
      title: "Diseño",
      description: "Diseño interfaces centradas en el usuario, prototipos y experiencia visual.",
      icons: [<FaFigma />, <SiJavascript />] 
    },
    {
      title: "Metodología",
      description: "Optimizo procesos de desarrollo usando metodologías ágiles y modelado de sistemas.",
      icons: [<SiUml />]
    }
  ]

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto animate-reveal text-center">
      <h2 className="text-5xl font-black uppercase mb-12 italic">Servicios</h2>

      <div className="grid md:grid-cols-3 gap-12">
        {services.map((s, index) => (
          <div key={index} className="p-8 border-4 border-black dark:border-white rounded-xl hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-black uppercase mb-4">{s.title}</h3>
            <p className="mb-6">{s.description}</p>
            <div className="flex justify-center gap-4 text-4xl">
              {s.icons.map((icon, idx) => (
                <span key={idx} className="hover:text-blue-500 dark:hover:text-yellow-300 transition-colors duration-300">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}