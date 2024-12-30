import React from "react"
import {motion} from "framer-motion"
import MOBILITY from "../../assets/Solution/mobility_green.jpeg"

function Mobility() {
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
		<div className="container mx-auto p-6 space-y-8">
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center bg-gray-100 dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				{/* Image Section */}
				<div className="relative w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
					<img
						src={MOBILITY}
						alt="Mobility and Connectivity"
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
						Mobility: Empowering Connectivity and Integration
					</h1>

					{/* Subtitle */}
					<p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-800">
						Mobility is key to modern innovation, enabling seamless
						communication, data collection, and device integration. At
						Logiicdev, we focus on creating solutions that enhance connectivity,
						improve user experiences, and meet evolving business needs.
					</p>
				</motion.div>
			</motion.div>

			{/* Cards */}
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
						Seamless Platform Communication
					</h2>
					<h4 className="font-semibold text-blue-400">
						Logiicdev ensures smooth, efficient communication across various
						systems
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Interoperability:</strong> Solutions work across multiple
							platforms, ensuring device compatibility.
						</li>
						<li className="dark:text-gray-400">
							<strong>Real-Time Connectivity:</strong> Devices stay connected,
							providing instant updates crucial for industries like logistics
							and healthcare.
						</li>
						<li className="dark:text-gray-400">
							<strong>Scalability::</strong> Our solutions grow with your
							business, allowing easy integration with additional platforms and
							devices.
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
						Mobile Apps and Platforms
					</h2>
					<h4 className="font-semibold text-blue-400">
						Logiicdev specializes in developing mobile apps across platforms
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Android (Kotlin) and iOS (Swift):</strong>Robust,
							user-friendly apps tailored to each platform. Cross-Platform
							Development: Using React Native and Flutter, we create apps that
							work seamlessly on both Android and iOS.
						</li>
						<li className="dark:text-gray-400">
							<strong>Custom Mobile Solutions:</strong> Tailored apps that meet
							specific business needs.
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
						Data Collection:
					</h2>
					<h4 className="font-semibold text-blue-400">
						Effective data collection is crucial. Logiicdev enables businesses
						to gather, analyze, and act on valuable data
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Accurate Data Capture:</strong> Efficiently capture data
							from sensors, devices, or user interactions.
						</li>
						<li className="dark:text-gray-400">
							<strong>Edge Computing:</strong> Process data closer to the source
							for real-time insights.
						</li>
						<li className="dark:text-gray-400">
							<strong>Data Security:</strong>Robust security measures protect
							data at every stage.
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
						Device Integration
					</h2>
					<h4 className="font-semibold text-blue-400">
						Device integration ensures a cohesive ecosystem where all components
						function harmoniously
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>Cross-Device Compatibility:</strong>Solutions work across
							a wide range of devices.
						</li>
						<li className="dark:text-gray-400">
							<strong>Custom Integration Solutions:</strong> Tailored to meet
							unique business needs, integrating legacy systems with new
							technology.
						</li>
						<li className="dark:text-gray-400">
							<strong>IoT and Smart Devices:</strong> Expertise in IoT
							integration creates smarter, more responsive environments.
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
						API and Backend Development
					</h2>
					<h4 className="font-semibold text-blue-400">
						Robust backend and API support are essential for optimal platform
						functionality
					</h4>
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							<strong>API Development:</strong> Custom APIs facilitate secure
							and scalable communication between mobile apps and backend
							systems.
						</li>
						<li className="dark:text-gray-400">
							<strong>Backend Infrastructure:</strong> Reliable and scalable
							backend solutions support the entire mobility ecosystem. Cloud
							Integration: Leveraging cloud computing for storage, processing,
							and scalability ensures future-proof solutions.
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
					<ul className="mt-4 space-y-2">
						<li className="dark:text-gray-400">
							At Logiicdev, mobility is about creating intelligent, responsive
							systems that enhance connectivity, improve data utilization, and
							ensure seamless integration
						</li>
						<li className="dark:text-gray-400">
							Our solutions are designed to adapt and grow, ensuring long-term
							success in a rapidly evolving technological landscape.
						</li>
					</ul>
				</motion.div>
			</div>
		</div>
	)
}

export default Mobility
