import React, { useState } from 'react'
import './index.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Proyectos from './pages/proyectos'
import Contacto from './pages/contacto'

function App() {
	const [route, setRoute] = useState('/')

	const navigate = (href) => {
		setRoute(href)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const renderRoute = () => {
		switch (route) {
			case '/proyectos':
				return <Proyectos />
			case '/servicios':
				return <About />
			case '/contacto':
				return <Contacto />
			default:
				return <Home />
		}
	}

	return (
		<div className="min-h-screen flex flex-col select-none">
			<Navbar onNavigate={navigate} />
			<main className="flex-grow pt-24">
				{renderRoute()}
			</main>
		</div>
	)
}

export default App
