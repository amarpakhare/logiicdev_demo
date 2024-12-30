import React from "react"
import {motion} from "framer-motion"
import DRONE from "../../assets/Solution/drone.jpeg"

const Drones = () => {
	//Animation
	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<>
			<div className="px-6 py-12 space-y-12">
				<motion.div
					initial={{opacity: 0, y: 50}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 1}}
					className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center bg-gray-100 dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
				>
					{/* Image Section */}
					<div className="w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
						<img
							src={DRONE}
							alt="Drone Technology"
							className="w-full h-full object-cover opacity-80"
						/>
					</div>

					{/* Overlay Content */}
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8, ease: "easeOut"}}
						className="w-full max-w-3xl mt-8 bg-white dark:bg-blue-300 bg-opacity-60 backdrop-blur-[2px] p-6 md:p-10 lg:p-16 rounded-lg shadow-lg text-center"
					>
						{/* Title */}
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-900 mb-4">
							The Evolution and Impact of Drone Technology
						</h1>

						{/* Subtitle */}
						<p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-800">
							Drones have rapidly evolved from novelties to essential tools
							across industries, revolutionizing operations with enhanced
							efficiency, accuracy, and safety. Logiicdev is at the forefront of
							this evolution, advancing drone technology through precision
							tracking.
						</p>
					</motion.div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}} // Trigger animation when card comes into view
						variants={cardVariants}
						className="bg-white shadow-lg flex flex-col gap-4 rounded-lg p-6 dark:bg-gray-800"
					>
						<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
							Precision Tracking: Enhancing Accuracy and Efficiency
						</h2>
						<p className="text-gray-700 text-lg dark:text-gray-400">
							Precision tracking is vital for applications like asset:
							<ul className="space-y-4 pl-6 list-disc py-2">
								<li className="text-gray-700 text-lg dark:text-gray-400">
									Management
								</li>
								<li className="text-gray-700 text-lg dark:text-gray-400">
									Environmental Monitoring
								</li>
								<li className="text-gray-700 text-lg dark:text-gray-400">
									Infrastructure Inspection
								</li>
								<li className="text-gray-700 text-lg dark:text-gray-400">
									Logiicdev’s drone solutions offer real-time precise tracking,
									improving efficiency, security, and safety.
								</li>
							</ul>
						</p>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}} // Trigger animation when card comes into view
						variants={cardVariants}
						className="bg-white shadow-lg flex flex-col gap-4 rounded-lg p-6 dark:bg-gray-800"
					>
						<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
							Innovative Applications Across Industries
						</h2>
						<p className="text-gray-700 text-lg dark:text-gray-400">
							Drones are widely adopted across sectors, including agriculture,
							construction, and public safety. Logiicdev’s technology supports
							activities like precision farming, site surveys, and emergency
							response with advanced data collection and analysis.
						</p>
						<ul className="space-y-4 pl-6 list-disc">
							<li className="text-gray-700 text-lg dark:text-gray-400">
								<strong>Agriculture:</strong> Create Drones monitor crop health
								and manage irrigation, optimizing yields.
							</li>
							<li className="text-gray-700 text-lg dark:text-gray-400">
								<strong>Construction:</strong> Drones conduct site surveys and
								safety inspections, providing real-time insights.
							</li>
							<li className="text-gray-700 text-lg dark:text-gray-400">
								<strong>Public Safety:</strong> Drones aid in search and rescue
								operations, ensuring efficient responses.
							</li>
						</ul>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}} // Trigger animation when card comes into view
						variants={cardVariants}
						className="bg-white shadow-lg flex flex-col gap-4 rounded-lg p-6 dark:bg-gray-800"
					>
						<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
							Integrating Drones with IoT for Smarter Operations
						</h2>
						<p className="text-gray-700 text-lg dark:text-gray-400">
							IoT integration enhances drone capabilities, enabling real-time
							data sharing, automation, and sophisticated analytics. This
							synergy improves efficiency and provides actionable insights
							across various applications.
						</p>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}} // Trigger animation when card comes into view
						variants={cardVariants}
						className="bg-white shadow-lg flex flex-col gap-4 rounded-lg p-6 dark:bg-gray-800"
					>
						<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
							Logiicdev’s Role in Shaping the Future of Drones
						</h2>
						<p className="text-gray-700 text-lg dark:text-gray-400">
							Logiicdev drives innovation in drone technology through custom
							solutions, R&D, and global impact. Their expertise in precision
							tracking and IoT integration helps industries worldwide optimize
							operations, reduce costs, and improve safety.
						</p>
					</motion.div>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{once: true}} // Trigger animation when card comes into view
						variants={cardVariants}
						className="bg-white shadow-lg flex flex-col gap-4 rounded-lg p-6 dark:bg-gray-800"
					>
						<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
							Conclusion{" "}
						</h2>
						<p className="text-gray-700 text-lg dark:text-gray-400">
							Drones are now essential in modern industry, and Logiicdev’s
							pioneering work is shaping the future of drone technology,
							offering unparalleled benefits across sectors.
						</p>
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default Drones
