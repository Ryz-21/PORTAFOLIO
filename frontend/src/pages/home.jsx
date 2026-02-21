import React from 'react'

export default function Home() {
	return (
		<section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center animate-reveal">
			<h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-8">
				Crea <br />
				<span className="bg-black text-white dark:bg-white dark:text-black px-4">Digital.</span>
			</h1>
			<p className="max-w-xl text-xl md:text-2xl font-medium opacity-70 mb-12">
				Desarrollador de software con experiencia en el desarrollo de aplicaciones web.
			</p>
			<a href="https://github.com/Ryz-21" target="_blank" rel="noopener noreferrer">
				<button className="btn-alive text-lg px-12 py-4">
					Visita mi GitHub
				</button>
			</a>
		</section>
	)
}
