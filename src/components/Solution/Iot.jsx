import React from "react"
import {motion} from "framer-motion"
import Omni from "../../assets/IOT.avif"
import IOT from "../../assets/Solution/IOT_Pencil_draing.webp"
const Iot = () => {
	//Animation
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
	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	return (
		<div className="p-6 space-y-8">
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center bg-gray-100 dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				{/* Image Section */}
				<div className="relative w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
					<img
						src={IOT}
						alt="IoT Connectivity"
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
						The Power of IoT: Shaping the Future of Connectivity
					</h1>

					{/* Subtitle */}
					<p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-800">
						The Internet of Things (IoT) is transforming how devices interact,
						offering new levels of connectivity and control. Logiicdev is a
						leader in IoT management, using cloud technologies like AWS to
						enable remote monitoring and control.
					</p>
				</motion.div>
			</motion.div>

			{/* Section Wrapper */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Comprehensive IoT Solutions */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Comprehensive IoT Solutions
					</h2>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">
								Custom Circuit Boards:
							</strong>{" "}
							Designed to meet specific needs, ensuring optimal performance and
							reliability.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">
								Firmware and Software Development:
							</strong>{" "}
							Creating robust firmware and software for effective communication
							and control.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">Connectivity:</strong>{" "}
							Equipping devices with Wi-Fi, Bluetooth, and cellular networks for
							seamless system integration.
						</li>
					</ul>
				</motion.div>

				{/* Remote Monitoring and Control */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Remote Monitoring and Control
					</h2>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">AWS IoT Services:</strong>{" "}
							Utilizing AWS for scalable, secure cloud-based IoT management.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">Cloud Integration:</strong>{" "}
							Enabling global remote monitoring and management with real-time
							data access.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">Data Analytics:</strong>{" "}
							Processing and visualizing IoT data for actionable insights and
							optimization.
						</li>
					</ul>
				</motion.div>

				{/* Enhanced Security and Compliance */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Enhanced Security and Compliance
					</h2>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">
								Secure Data Transmission:
							</strong>{" "}
							Ensuring encrypted communication using AWS’s security features.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">
								Regulatory Compliance:
							</strong>{" "}
							Adhering to industry standards for data privacy and security.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">Regular Updates:</strong>{" "}
							Providing updates to maintain system integrity against evolving
							threats.
						</li>
					</ul>
				</motion.div>

				{/* Scalable and Flexible Architecture */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Scalable and Flexible Architecture
					</h2>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">Scalability:</strong> AWS
							services allow Logiicdev to offer solutions that grow with
							business needs.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">
								Flexible Architecture:
							</strong>{" "}
							Systems can be easily adapted to different use cases, ensuring
							continued relevance.
						</li>
					</ul>
				</motion.div>

				{/* Advanced Testing and Simulation */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Advanced Testing and Simulation
					</h2>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">
								Omnipower Test Equipment:
							</strong>{" "}
							Rigorous testing for performance and efficiency.
						</li>
						<li className="dark:text-gray-400">
							<strong className="dark:text-blue-400">Simulation Tools:</strong>{" "}
							Modeling and optimizing IoT systems before deployment to reduce
							risks.
						</li>
					</ul>
				</motion.div>

				{/* Conclusion */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true}} // Trigger animation when card comes into view
					variants={cardVariants}
					className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800"
				>
					<h2 className="text-2xl font-semibold text-blue-600 dark:text-white">
						Conclusion
					</h2>
					<p className="mt-4 dark:text-gray-400">
						Logiicdev combines innovative design with cloud technologies to
						deliver robust IoT solutions. Leveraging AWS, they offer secure,
						scalable, and efficient IoT management, driving innovation and
						connectivity in a connected world.
					</p>
				</motion.div>
			</div>
		</div>
	)
}

export default Iot
