import './index.css'

export default function Features() {
	return (
		<div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center overflow-x-hidden">
			<header className="w-full h-20 flex items-center">
				<div className="w-full px-8 sm:px-10 lg:px-14 grid grid-cols-3 items-center">
					<div className="font-[Inter] text-white text-[24px] font-extrabold tracking-tight">
						HireLens
					</div>
					<nav className="justify-self-center overflow-x-auto">
						<ul className="flex flex-nowrap items-center gap-6 font-[Inter] text-[15px] font-medium whitespace-nowrap">
							<li className="relative">
								<a href="#/features" className="group hover:opacity-90 text-blue-400">
									Features
									<span className="block h-0.5 w-full bg-current" />
								</a>
							</li>
							<li className="relative">
								<a href="#/how-it-works" className="group hover:opacity-90 text-white">
									How it Works
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
							{/* Jobs & Candidates removed */}
							<li className="relative">
								<a href="#/" className="group hover:opacity-90 text-white">
									About
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
							<li className="relative">
								<a href="#/" className="group hover:opacity-90 text-white">
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

			<main className="flex-1 w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-14 flex items-center">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
					<div className="col-span-1 lg:col-span-1 bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
						<h3 className="text-2xl font-[Inter] font-semibold text-white mb-2">AI Resume Parsing</h3>
						<p className="text-gray-300">Extracts experience, skills, and education accurately from any resume format.</p>
					</div>
					<div className="col-span-1 lg:col-span-1 bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
						<h3 className="text-2xl font-[Inter] font-semibold text-white mb-2">Skill Gap Insights</h3>
						<p className="text-gray-300">Highlights missing competencies and suggests learning paths for candidates.</p>
					</div>
					<div className="col-span-1 lg:col-span-1 bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
						<h3 className="text-2xl font-[Inter] font-semibold text-white mb-2">Smart Matching</h3>
						<p className="text-gray-300">Ranks candidates to jobs using multi-factor scoring, not just keywords.</p>
					</div>
				</div>
			</main>

			<footer className="w-full h-16 flex items-center justify-center text-gray-400 text-sm">
				© {new Date().getFullYear()} HireLens
			</footer>
		</div>
	)
} 