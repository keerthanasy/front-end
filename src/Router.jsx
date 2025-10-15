import { useEffect, useState } from 'react'
import App from './App.jsx'
import Features from './Features.jsx'
import HowItWorks from './HowItWorks.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import GetStarted from './GetStarted.jsx'

function getHashPath() {
	const { hash } = window.location
	return hash || '#/'
}

export default function Router() {
	const [path, setPath] = useState(getHashPath())

	useEffect(() => {
		const onHashChange = () => setPath(getHashPath())
		window.addEventListener('hashchange', onHashChange)
		return () => window.removeEventListener('hashchange', onHashChange)
	}, [])

	if (path === '#/features') {
		return <Features />
	}

	if (path === '#/how-it-works') {
		return <HowItWorks />
	}

	if (path === '#/about') {
		return <About />
	}

	if (path === '#/contact') {
		return <Contact />
	}

	if (path === '#/get-started') {
		return <GetStarted />
	}

	return <App />
} 