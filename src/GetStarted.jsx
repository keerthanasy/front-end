import './index.css'
import { useState, useEffect } from 'react'

export default function GetStarted() {
	const [isSignUp, setIsSignUp] = useState(false)

	useEffect(() => {
		// Initialize Google OAuth
		if (window.google) {
			window.google.accounts.id.initialize({
				client_id: '289028752097-vb6r5tr3fm6vb5kiugfu1oerccd1nr93.apps.googleusercontent.com',
				callback: handleGoogleResponse
			})
		}
	}, [])

	const handleGoogleResponse = (response) => {
		console.log('Google OAuth response:', response)
		// Handle the Google OAuth response here
		// You can decode the JWT token and extract user information
	}

	const handleGoogleSignIn = () => {
		if (window.google) {
			window.google.accounts.id.prompt()
		}
	}

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
								<a href="#/about" className="group hover:opacity-90 text-white">
									About
									<span className="block h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
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

			<main className="w-full max-w-md mx-auto px-8 sm:px-10 lg:px-14 py-16">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-[Inter] font-semibold text-white">Get Started</h1>
					<p className="mt-2 text-gray-300">Join HireLens and transform your hiring process</p>
				</div>

				{/* Toggle between Sign In and Sign Up */}
				<div className="flex rounded-xl bg-gray-800/40 border border-gray-700/80 p-1 mb-6">
					<button
						onClick={() => setIsSignUp(false)}
						className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${!isSignUp ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'}`}
					>
						Sign In
					</button>
					<button
						onClick={() => setIsSignUp(true)}
						className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${isSignUp ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'}`}
					>
						Sign Up
					</button>
				</div>

				{/* Form */}
				<form className="space-y-4">
					{isSignUp && (
						<input
							type="text"
							placeholder="Full Name"
							className="w-full rounded-xl bg-gray-800/60 border border-gray-700/80 px-4 py-3 outline-none focus:border-blue-500/60 text-white placeholder-gray-400"
						/>
					)}
					<input
						type="email"
						placeholder="Email"
						className="w-full rounded-xl bg-gray-800/60 border border-gray-700/80 px-4 py-3 outline-none focus:border-blue-500/60 text-white placeholder-gray-400"
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full rounded-xl bg-gray-800/60 border border-gray-700/80 px-4 py-3 outline-none focus:border-blue-500/60 text-white placeholder-gray-400"
					/>
					{isSignUp && (
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full rounded-xl bg-gray-800/60 border border-gray-700/80 px-4 py-3 outline-none focus:border-blue-500/60 text-white placeholder-gray-400"
						/>
					)}
					<button
						type="button"
						className="w-full rounded-xl bg-[#3B82F6] text-white font-medium py-3 hover:bg-[#2563EB] transition-colors"
					>
						{isSignUp ? 'Create Account' : 'Sign In'}
					</button>
				</form>

				{/* Social Login */}
				<div className="mt-6">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-700/80" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
						</div>
					</div>
					<div className="mt-4">
						<button 
							onClick={handleGoogleSignIn}
							className="w-full flex justify-center items-center py-3 px-4 border border-gray-700/80 rounded-xl hover:bg-gray-800/40 transition-colors"
						>
							<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
								<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
								<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
								<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
								<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
							</svg>
							<span className="text-sm text-gray-300">Continue with Google</span>
						</button>
					</div>
				</div>

				{/* Footer text */}
				<div className="mt-6 text-center text-sm text-gray-400">
					{isSignUp ? (
						<p>Already have an account? <button onClick={() => setIsSignUp(false)} className="text-blue-400 hover:text-blue-300">Sign in</button></p>
					) : (
						<p>Don't have an account? <button onClick={() => setIsSignUp(true)} className="text-blue-400 hover:text-blue-300">Sign up</button></p>
					)}
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
