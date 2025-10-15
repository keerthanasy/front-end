import './index.css'
import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
	const [activeStep, setActiveStep] = useState(1)
	const step1Ref = useRef(null)
	const step2Ref = useRef(null)
	const step3Ref = useRef(null)
	const step4Ref = useRef(null)

	// Single-step rendering: progress is controlled by buttons, not scroll

	const progressPercent = ((activeStep - 1) / 3) * 100

	const setStep = (n) => setActiveStep(n)

	return (
		<div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center overflow-x-hidden">
			{/* Header (same style as Features) */}
			<header className="w-full h-20 flex items-center">
				<div className="w-full px-8 sm:px-10 lg:px-14 grid grid-cols-3 items-center">
					<div className="font-[Inter] text-white text-[24px] font-extrabold tracking-tight">
						HireLens
					</div>
					<nav className="justify-self-center overflow-x-auto">
						<ul className="flex flex-nowrap items-center gap-6 font-[Inter] text-[15px] font-medium whitespace-nowrap">
							<li className="relative">
								<a href="#/features" className="group hover:opacity-90 text-white">
									Features
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
								</a>
							</li>
							<li className="relative">
								<a href="#/how-it-works" className="group hover:opacity-90 text-blue-400">
									How it Works
									<span className="block h-0.5 w-full bg-current" />
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

			{/* Hero */}
			<section className="w-full max-w-6xl mx-auto px-8 sm:px-10 lg:px-14 pt-10 pb-4 text-center">
				<h1 className="text-3xl sm:text-4xl lg:text-5xl font-[Inter] font-semibold">How It Works</h1>
				<p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
					Transform your hiring process with AI-powered resume analysis in just 4 simple steps
				</p>
				<div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/20">
					<span className="text-sm text-blue-300">⚡ Analyze 100+ resumes in minutes</span>
				</div>
			</section>

			{/* Steps */}
			<main className="w-full max-w-6xl mx-auto px-8 sm:px-10 lg:px-14 pb-16">
				{/* Progress bar with numbered nodes */}
				<div className="mb-8">
					<div className="max-w-3xl mx-auto">
						<div className="relative h-2 bg-gray-700/60 rounded-full overflow-hidden">
							<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200" style={{ width: `${progressPercent}%` }} />
						</div>
						<div className="mt-4 flex items-center justify-between">
							{[1,2,3,4].map((n) => (
								<button
									key={n}
									onClick={() => setStep(n)}
									className={`w-10 aspect-square rounded-full border flex items-center justify-center text-sm font-semibold shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),2px_2px_8px_rgba(0,0,0,0.1)] transition-all ${activeStep === n ? 'border-blue-300 text-blue-100 bg-gradient-to-br from-blue-400/50 to-blue-700/50 animate-[bouncing_0.8s_ease-in-out_infinite]' : 'border-blue-800 text-blue-300 bg-gray-800/60 hover:border-blue-600'}`}
								>
									{n}
								</button>
							))}
						</div>
					</div>
				</div>
				<div>
					{activeStep === 1 && (
						<div ref={step1Ref} className="rounded-2xl bg-gray-800/40 border border-gray-700/80 p-6">
							<div className="flex items-start gap-4">
								<div className="w-10 aspect-square rounded-full bg-blue-500/20 border border-blue-500/30 inline-flex items-center justify-center text-blue-300 font-semibold">1</div>
								<div>
									<h3 className="text-xl font-[Inter] font-semibold">Upload Resume</h3>
									<p className="mt-1 text-gray-300">Drag, Drop & Done</p>
									<p className="mt-2 text-gray-400">Simply upload candidate resumes in any format - PDF, DOC, or DOCX. Our AI instantly processes and extracts key information.</p>
									<ul className="mt-3 text-gray-300 text-sm list-disc list-inside space-y-1">
										<li>Bulk upload supported</li>
										<li>100% secure</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{activeStep === 2 && (
						<div ref={step2Ref} className="rounded-2xl bg-gray-800/40 border border-gray-700/80 p-6">
							<div className="flex items-start gap-4">
								<div className="w-10 aspect-square rounded-full bg-purple-500/20 border border-purple-500/30 inline-flex items-center justify-center text-purple-300 font-semibold">2</div>
								<div>
									<h3 className="text-xl font-[Inter] font-semibold">AI Analyzes Skills</h3>
									<p className="mt-1 text-gray-300">Smart Skill Extraction</p>
									<p className="mt-2 text-gray-400">Our advanced AI identifies technical skills, experience levels, and qualifications with 95% accuracy in seconds.</p>
									<ul className="mt-3 text-gray-300 text-sm list-disc list-inside space-y-1">
										<li>200+ skill categories</li>
										<li>Experience mapping</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{activeStep === 3 && (
						<div ref={step3Ref} className="rounded-2xl bg-gray-800/40 border border-gray-700/80 p-6">
							<div className="flex items-start gap-4">
								<div className="w-10 aspect-square rounded-full bg-green-500/20 border border-green-500/30 inline-flex items-center justify-center text-green-300 font-semibold">3</div>
								<div>
									<h3 className="text-xl font-[Inter] font-semibold">Candidate Matching</h3>
									<p className="mt-1 text-gray-300">Smart Ranking System</p>
									<p className="mt-2 text-gray-400">Get candidates ranked by job fit score with detailed comparison charts and compatibility insights.</p>
									<ul className="mt-3 text-gray-300 text-sm list-disc list-inside space-y-1">
										<li>Match scoring</li>
										<li>Side-by-side comparison</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{activeStep === 4 && (
						<div ref={step4Ref} className="rounded-2xl bg-gray-800/40 border border-gray-700/80 p-6">
							<div className="flex items-start gap-4">
								<div className="w-10 aspect-square rounded-full bg-yellow-500/20 border border-yellow-500/30 inline-flex items-center justify-center text-yellow-300 font-semibold">4</div>
								<div>
									<h3 className="text-xl font-[Inter] font-semibold">Actionable Insights</h3>
									<p className="mt-1 text-gray-300">Data-Driven Decisions</p>
									<p className="mt-2 text-gray-400">Receive detailed analytics and recommendations to make informed hiring decisions faster than ever.</p>
									<ul className="mt-3 text-gray-300 text-sm list-disc list-inside space-y-1">
										<li>Smart recommendations</li>
										<li>Export reports</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>

			</main>

			{/* Footer */}
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


