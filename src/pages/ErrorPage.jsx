import React from "react"

const ErrorPage = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
			<div className="text-center">
				<h1 className="text-9xl font-bold text-yellow-400 animate-bounce">
					404
				</h1>
				<p className="mt-6 text-2xl font-semibold">Oops! Page not found.</p>
				<p className="mt-4 text-gray-400">
					The page you are looking for doesn't exist or has been moved.
				</p>
				<div className="mt-8">
					<Link
						to="/"
						className="px-6 py-3 text-lg font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 shadow-lg transform hover:scale-105 transition-transform duration-300"
					>
						Go to Home
					</Link>
				</div>
				<div className="mt-8">
					<img
						src="https://via.placeholder.com/400x300.png?text=Not+Found"
						alt="Not Found Illustration"
						className="mx-auto w-64"
					/>
				</div>
			</div>
		</div>
	)
}

export default ErrorPage
