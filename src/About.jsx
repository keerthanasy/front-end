import './index.css'

export default function About() {
	return (
		<div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center overflow-x-hidden">
			<header className="w-full h-20 flex items-center">
				<div className="w-full px-8 sm:px-10 lg:px-14 grid grid-cols-3 items-center">
					<div className="font-[Inter] text-white text-[24px] font-extrabold tracking-tight">HireLens</div>
					<nav className="justify-self-center overflow-x-auto">
						<ul className="flex flex-nowrap items-center gap-6 font-[Inter] text-[15px] font-medium whitespace-nowrap">
							<li className="relative">
								<a href="#/features" className="group hover:opacity-90 text-white">
									Features
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
							<li className="relative">
								<a href="#/how-it-works" className="group hover:opacity-90 text-white">
									How it Works
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
							<li className="relative">
								<a href="#/about" className="group hover:opacity-90 text-blue-400">
									About
									<span className="block h-0.5 w-full bg-current" />
								</a>
							</li>
							<li className="relative">
								<a href="#/contact" className="group hover:opacity-90 text-white">
									Contact
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
						</ul>
					</nav>
					<div className="justify-self-end flex items-center gap-4 font-[Inter]">
						<a href="#/" className="text-white text-[15px] font-medium hover:opacity-80">Home</a>
						<a href="#/get-started" className="inline-flex items-center rounded-full bg-[#3B82F6] text-white text-[15px] font-medium px-5 py-2 shadow-sm hover:bg-[#2563EB]">Get Started</a>
					</div>
				</div>
			</header>

			<main className="w-full max-w-6xl mx-auto px-8 sm:px-10 lg:px-14 py-16">
				<h1 className="text-3xl sm:text-4xl font-[Inter] font-semibold text-white">About HireLens</h1>
				<p className="mt-3 text-gray-300 max-w-3xl">We help teams hire smarter and faster using AI-driven resume analysis and candidate matching. Replace manual screening with data-backed insights.</p>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="rounded-2xl bg-gray-800/40 border border-gray-700/80 p-6">
						<h3 className="text-lg font-[Inter] font-semibold">Our Mission</h3>
						<p className="mt-2 text-gray-300">Bring fairness, speed, and clarity to hiring decisions through responsible AI.</p>
					</div>
					<div className="rounded-2xl bg-gray-800/40 border border-gray-700/80 p-6">
						<h3 className="text-lg font-[Inter] font-semibold">Our Approach</h3>
						<p className="mt-2 text-gray-300">Privacy-first processing, transparent scoring, and actionable recommendations.</p>
					</div>
					<div className="rounded-2xl bg-gray-800/40 border border-gray-700/80 p-6">
						<h3 className="text-lg font-[Inter] font-semibold">Our Promise</h3>
						<p className="mt-2 text-gray-300">Deliver measurable time-to-hire reductions and higher-quality matches.</p>
					</div>
				</div>
			</main>

			<footer className="w-full mt-auto py-8 text-center text-gray-400 text-sm">
				<div className="font-[Inter]">HireLens</div>
				<div className="mt-2">© 2024 ResumeAI. All rights reserved.</div>
				<div className="mt-2 flex items-center justify-center gap-4">
					<a href="#/" className="hover:text-gray-300">Privacy</a>
					<a href="#/" className="hover:text-gray-300">Terms</a>
					<a href="#/" className="hover:text-gray-300">Support</a>
				</div>
			</footer>
		</div>
	)
}


