import './index.css'
import { useEffect, useState } from 'react'
 

function App() {
	const [scrolled, setScrolled] = useState(false)
	const [activeView, setActiveView] = useState('home')
	const [displayedStep, setDisplayedStep] = useState(0)
	const [pendingStep, setPendingStep] = useState(null)
	const [isTransitioning, setIsTransitioning] = useState(false)
	const [isEntering, setIsEntering] = useState(false)

	const features = [
		{ title: 'AI Resume Parsing', icon: '🧠', desc: 'Automatically extract and structure key information with high accuracy using advanced AI technology.' },
		{ title: 'Candidate Ranking', icon: '🏆', desc: 'Intelligent ranking system that automatically prioritizes candidates to match your specific role requirements.' },
		{ title: 'Match Scoring', icon: '🎯', desc: 'Get precise compatibility scores with a detailed breakdown of strengths.' },
		{ title: 'Faster Hiring', icon: '⚡', desc: 'Reduce time-to-hire by 60% with automated workflows powered by machine learning.' },
		{ title: 'Skill Gap Insights', icon: '📊', desc: 'Identify missing skills and competencies with actionable insights to make informed hiring decisions.' },
		{ title: 'Collaboration Tools', icon: '🤝', desc: 'Seamlessly collaborate with your team through shared notes, ratings, and real-time feedback.' },
	]

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 4)
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		if (activeView !== 'features') return
		const intervalId = setInterval(() => {
			if (isTransitioning) return
			const next = (displayedStep + 1) % features.length
			setPendingStep(next)
			setIsTransitioning(true)
							setIsEntering(false)
				requestAnimationFrame(() => {
					setIsEntering(true)
				})
				setTimeout(() => {
					setDisplayedStep(next)
					setPendingStep(null)
					setIsTransitioning(false)
					setIsEntering(false)
				}, 500)
			}, 4000)
			return () => clearInterval(intervalId)
	}, [activeView, isTransitioning, displayedStep])

	return (
		<div className={`min-h-screen flex flex-col items-center bg-gray-900 text-white pt-0 pb-8 relative overflow-hidden h-screen ${activeView === 'home' ? 'overflow-hidden' : 'overflow-y-scroll'} snap-y snap-mandatory`}>
			{/* Particle Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Small floating particles with custom animations */}
				<div className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-30" style={{ 
					top: '5%', 
					left: '5%', 
					animation: 'float 6s ease-in-out infinite, pulse 3s ease-in-out infinite',
					animationDelay: '0s'
				}}></div>
				<div className="absolute w-1 h-1 rounded-full bg-purple-400 opacity-40" style={{ 
					top: '15%', 
					left: '25%', 
					animation: 'float 8s ease-in-out infinite, pulse 4s ease-in-out infinite',
					animationDelay: '1s'
				}}></div>
				<div className="absolute w-3 h-3 rounded-full bg-green-400 opacity-20" style={{ 
					top: '25%', 
					left: '45%', 
					animation: 'float 7s ease-in-out infinite, pulse 5s ease-in-out infinite',
					animationDelay: '2s'
				}}></div>
				<div className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-35" style={{ 
					top: '35%', 
					left: '65%', 
					animation: 'float 9s ease-in-out infinite, pulse 3.5s ease-in-out infinite',
					animationDelay: '0.5s'
				}}></div>
				<div className="absolute w-2 h-2 rounded-full bg-pink-400 opacity-25" style={{ 
					top: '45%', 
					left: '85%', 
					animation: 'float 6.5s ease-in-out infinite, pulse 4.5s ease-in-out infinite',
					animationDelay: '1.5s'
				}}></div>
				<div className="absolute w-1 h-1 rounded-full bg-indigo-400 opacity-30" style={{ 
					top: '55%', 
					left: '15%', 
					animation: 'float 8.5s ease-in-out infinite, pulse 3.2s ease-in-out infinite',
					animationDelay: '2.5s'
				}}></div>
				<div className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 opacity-20" style={{ 
					top: '65%', 
					left: '35%', 
					animation: 'float 7.5s ease-in-out infinite, pulse 4.8s ease-in-out infinite',
					animationDelay: '0.8s'
				}}></div>
				<div className="absolute w-1 h-1 rounded-full bg-orange-400 opacity-35" style={{ 
					top: '75%', 
					left: '55%', 
					animation: 'float 6.8s ease-in-out infinite, pulse 3.8s ease-in-out infinite',
					animationDelay: '1.8s'
				}}></div>
				<div className="absolute w-1.5 h-1.5 rounded-full bg-teal-400 opacity-25" style={{ 
					top: '85%', 
					left: '75%', 
					animation: 'float 8.2s ease-in-out infinite, pulse 4.2s ease-in-out infinite',
					animationDelay: '2.2s'
				}}></div>
				<div className="absolute w-2 h-2 rounded-full bg-red-400 opacity-30" style={{ 
					top: '95%', 
					left: '95%', 
					animation: 'float 7.2s ease-in-out infinite, pulse 3.7s ease-in-out infinite',
					animationDelay: '0.3s'
				}}></div>
				
				{/* Additional particles */}
				<div className="absolute w-1 h-1 rounded-full bg-blue-300 opacity-25" style={{ 
					top: '10%', 
					left: '50%', 
					animation: 'float 9.5s ease-in-out infinite, pulse 3.8s ease-in-out infinite',
					animationDelay: '1.2s'
				}}></div>
				<div className="absolute w-2 h-2 rounded-full bg-purple-300 opacity-20" style={{ 
					top: '20%', 
					left: '70%', 
					animation: 'float 6.2s ease-in-out infinite, pulse 4.2s ease-in-out infinite',
					animationDelay: '2.8s'
				}}></div>
				<div className="absolute w-1.5 h-1.5 rounded-full bg-green-300 opacity-30" style={{ 
					top: '30%', 
					left: '10%', 
					animation: 'float 8.8s ease-in-out infinite, pulse 3.5s ease-in-out infinite',
					animationDelay: '0.7s'
				}}></div>
				<div className="absolute w-1 h-1 rounded-full bg-yellow-300 opacity-35" style={{ 
					top: '40%', 
					left: '30%', 
					animation: 'float 7.8s ease-in-out infinite, pulse 4.1s ease-in-out infinite',
					animationDelay: '1.9s'
				}}></div>
				<div className="absolute w-2.5 h-2.5 rounded-full bg-pink-300 opacity-15" style={{ 
					top: '50%', 
					left: '50%', 
					animation: 'float 6.8s ease-in-out infinite, pulse 4.6s ease-in-out infinite',
					animationDelay: '0.4s'
				}}></div>
				
				{/* Larger floating elements with bounce */}
				<div className="absolute w-8 h-8 rounded-full bg-blue-500 opacity-10" style={{ 
					top: '8%', 
					left: '20%', 
					animation: 'bounce 6s ease-in-out infinite, float 10s ease-in-out infinite',
					animationDelay: '0s'
				}}></div>
				<div className="absolute w-6 h-6 rounded-full bg-purple-500 opacity-15" style={{ 
					top: '28%', 
					left: '60%', 
					animation: 'bounce 8s ease-in-out infinite, float 12s ease-in-out infinite',
					animationDelay: '2s'
				}}></div>
				<div className="absolute w-10 h-10 rounded-full bg-green-500 opacity-8" style={{ 
					top: '48%', 
					left: '40%', 
					animation: 'bounce 7s ease-in-out infinite, float 11s ease-in-out infinite',
					animationDelay: '4s'
				}}></div>
				<div className="absolute w-7 h-7 rounded-full bg-yellow-500 opacity-12" style={{ 
					top: '68%', 
					left: '80%', 
					animation: 'bounce 6.5s ease-in-out infinite, float 9.5s ease-in-out infinite',
					animationDelay: '1s'
				}}></div>
				<div className="absolute w-5 h-5 rounded-full bg-pink-500 opacity-18" style={{ 
					top: '88%', 
					left: '10%', 
					animation: 'bounce 7.5s ease-in-out infinite, float 10.5s ease-in-out infinite',
					animationDelay: '3s'
				}}></div>
			</div>

			<header className="sticky top-4 z-20 w-full h-20 flex items-center relative bg-transparent border-none outline-none">
				<div className="w-full px-8 sm:px-10 lg:px-14 grid grid-cols-3 items-center">
					<div className="font-[Inter] text-white text-[24px] font-extrabold tracking-tight cursor-pointer" onClick={() => setActiveView('home')}>
						HireLens
					</div>
					<nav className="justify-self-center overflow-x-auto">
						<ul className="flex flex-nowrap items-center gap-6 font-[Inter] text-[15px] font-medium whitespace-nowrap">
							<li className="relative">
								<a href="#/features" className="group hover:opacity-90 text-white" onClick={(e) => { e.preventDefault(); window.location.hash = '#/features' }}>
									Features
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
							<li className="relative">
								<a href="#/how-it-works" className="group hover:opacity-90 text-white" onClick={(e) => { e.preventDefault(); window.location.hash = '#/how-it-works' }}>
									How it works
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
							<li className="relative">
							{/* Jobs & Candidates removed */}
							</li>
						<li className="relative">
							<a href="#/about" className="group hover:opacity-90 text-white" onClick={(e) => { e.preventDefault(); window.location.hash = '#/about' }}>
								About
								<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
							</a>
						</li>
						<li className="relative">
							<a href="#/contact" className="group hover:opacity-90 text-white" onClick={(e) => { e.preventDefault(); window.location.hash = '#/contact' }}>
								Contact
								<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
							</a>
						</li>
						</ul>
					</nav>
					<div className="justify-self-end flex items-center gap-4 font-[Inter]">
						<a href="#" onClick={(e) => { e.preventDefault(); setActiveView('home') }} className="text-white text-[15px] font-medium hover:opacity-80">Home</a>
						<a href="#/get-started" className="inline-flex items-center rounded-full bg-[#3B82F6] text-white text-[15px] font-medium px-5 py-2 shadow-sm hover:bg-[#2563EB]">Get Started</a>
					</div>
				</div>
			</header>

			{/* Animated Panels */}
			<div className="flex-1 w-full relative">
				{/* Home Panel */}
				<div className={`absolute inset-0 transition-all duration-500 ease-out ${activeView === 'home' ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-6 pointer-events-none'}`} aria-hidden={activeView !== 'home'}>
					{/* Main content area with Lottie animation */}
					<main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
					<div className={`flex flex-col items-center text-center mt-16 space-y-8 transition-all duration-500 ease-out ${activeView === 'home' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
						<div className="space-y-4 max-w-3xl">
							<h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-[Inter] font-semibold text-[#1E56E4] leading-tight">
								"Smarter Hiring Starts Here"
							</h1>
							<p className="text-lg sm:text-xl font-[Inter] leading-relaxed text-gray-300">
								Analyze resumes instantly, uncover hidden skills, and match candidates to the right job with AI precision.
							</p>
						</div>
					</div>
					
					{/* Buttons section - centered and moved down */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
						<button className="inline-flex items-center justify-center rounded-full bg-[#3B82F6] text-white text-base font-medium px-6 py-3 shadow-lg hover:bg-[#2563EB] transition-colors">
							Upload Resume
						</button>
						<a href="#/get-started" className="inline-flex items-center justify-center rounded-full border-2 border-gray-600 text-gray-300 text-base font-medium px-6 py-3 hover:border-gray-500 transition-colors">
							Try Demo
						</a>
					</div>
					</main>

					{/* AI Powered Section */}
					<section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
						<div className="text-center space-y-6">
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
								<div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
								<span className="text-sm font-[Inter] font-medium text-blue-300">Powered by Advanced AI</span>
							</div>
							
							<div className="space-y-4">
								<h2 className="text-2xl font-[Inter] font-semibold text-white">
									HireLens was built to make hiring smarter, faster, and fairer.
								</h2>
								<p className="text-lg font-[Inter] leading-relaxed text-gray-300 max-w-3xl mx-auto">
									Our AI ensures every resume is evaluated on skills, not just keywords, empowering businesses to find the right talent while helping candidates showcase their strengths.
								</p>
							</div>
						</div>
					</section>
				</div>

				{/* Features Panel */}
				<div className={`absolute inset-0 transition-all duration-500 ease-out ${activeView === 'features' ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-6 pointer-events-none'}`} aria-hidden={activeView !== 'features'}>
					<main className="w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-14 py-16">
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/20">
								<div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
								<span className="text-sm font-[Inter] text-blue-300">Powerful features</span>
							</div>
							<h3 className="mt-5 text-3xl sm:text-4xl font-[Inter] font-semibold text-white">Everything you need to hire smarter</h3>
							<p className="mt-3 text-gray-300 max-w-3xl mx-auto">Explore the core capabilities that streamline your hiring workflow and elevate candidate matching.</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{features.map((f, i) => (
								<div key={i} className="relative group rounded-2xl bg-gray-800/40 border border-gray-700/80 hover:border-blue-500/40 transition-colors p-6">
									<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
									<div className="flex items-start gap-4">
										<div className="w-12 aspect-square rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/30 inline-flex items-center justify-center text-blue-100 text-base leading-none">
											{f.icon}
										</div>
										<div>
											<h4 className="text-lg font-[Inter] font-semibold text-white">{f.title}</h4>
											<p className="mt-1.5 text-gray-300 text-sm leading-relaxed">{f.desc}</p>
										</div>
									</div>
								</div>
							))}
						</div>


					</main>
				</div>
			</div>
		</div>
	)
}

export default App
