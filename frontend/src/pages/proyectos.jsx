import { useState } from "react"

export default function Proyectos() {

  const projects = [
    {
      id: 1,
      name: "Proyecto 1",
      images: [
        "https://via.placeholder.com/800x500",
        "https://via.placeholder.com/800x500/000000/FFFFFF"
      ]
    },
    {
      id: 2,
      name: "Proyecto 2",
      images: [
        "https://via.placeholder.com/800x500",
        "https://via.placeholder.com/800x500/333333/FFFFFF"
      ]
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto animate-reveal">
      <h2 className="text-5xl font-black uppercase mb-12">
        Proyectos
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="aspect-video bg-zinc-100 dark:bg-zinc-900 
                       border-2 border-black dark:border-white 
                       p-8 cursor-pointer
                       hover:bg-black hover:text-white 
                       dark:hover:bg-white dark:hover:text-black
                       transition-all duration-500"
          >
            <span className="text-6xl font-black opacity-10">
              0{project.id}
            </span>

            <h3 className="text-3xl font-black uppercase mt-4">
              {project.name}
            </h3>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
                        bg-black/70 backdrop-blur-sm
                        px-4 transition-opacity duration-300">

          <div className="relative w-full max-w-4xl
                          bg-white dark:bg-black
                          border-2 border-black dark:border-white
                          p-6
                          animate-[fadeIn_.4s_ease-in-out]">

            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4
                         w-10 h-10 flex items-center justify-center
                         border-2 border-black dark:border-white
                         text-black dark:text-white
                         hover:bg-black hover:text-white
                         dark:hover:bg-white dark:hover:text-black
                         transition-all duration-300
                         hover:rotate-90 hover:scale-110"
            >
              ✕
            </button>

            <h3 className="text-3xl font-black uppercase mb-6">
              {selectedProject.name}
            </h3>

            {/* CAROUSEL */}
            <div
              id={`carousel-${selectedProject.id}`}
              className="relative w-full"
              data-carousel="slide"
            >
              {/* Wrapper */}
              <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">

                {selectedProject.images.map((img, index) => (
                  <div
                    key={index}
                    className={`${index === 0 ? "" : "hidden"} duration-700 ease-in-out`}
                    data-carousel-item={index === 0 ? "active" : ""}
                  >
                    <img
                      src={img}
                      alt=""
                      className="absolute block w-full h-full object-cover
                                 transition-transform duration-700"
                    />
                  </div>
                ))}

              </div>

              {/* Flecha IZQUIERDA (Rotada 180 grados) */}
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
                data-carousel-prev
              >
                <span className="
                w-12 h-12 flex items-center justify-center
                rounded-full
                border-2
                border-black dark:border-white
                bg-black dark:bg-white
                text-white dark:text-black
                 transition-all duration-300
               group-hover:bg-white group-hover:text-black
               dark:group-hover:bg-black dark:group-hover:text-white
               group-hover:scale-110
              ">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>
              </button>

              {/* Flecha DERECHA (Normal) */}
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
                data-carousel-next
              >
                <span className="
                  w-12 h-12 flex items-center justify-center
                   rounded-full
                     border-2
                      border-black dark:border-white
                       bg-black dark:bg-white
                       text-white dark:text-black
                          transition-all duration-300
                             group-hover:bg-white group-hover:text-black
                               dark:group-hover:bg-black dark:group-hover:text-white
                                   group-hover:scale-110
                                     ">

                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}