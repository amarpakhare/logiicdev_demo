import React from "react"
import {motion} from "framer-motion"
import ENERGY from "../../assets/Solution/Energy Efficiency.webp"

const EnergyEfficiency = () => {
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
		<div className="container mx-auto px-6 py-12 space-y-12">
			{/* Section 1: Header */}
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center bg-gray-100 dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				{/* Image Section */}
				<div className="w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
					<img
						src={ENERGY}
						alt="AI, Cloud, and IoT for Energy Efficiency"
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
						Harnessing the Power of AI, Cloud, and IoT for Energy Efficiency
					</h1>

					{/* Subtitle */}
					<p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-800">
						The rapid integration of AI, Cloud, and IoT technologies is
						transforming industries worldwide, bringing both innovation and
						challenges, particularly in energy consumption and sustainability.
						As businesses evolve, the need for energy-efficient solutions
						becomes crucial.
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
						Turning Challenges into Opportunities
					</h2>
					<p className="text-gray-700 text-lg dark:text-gray-400">
						At Logiicdev, we view the growing energy demands as an opportunity
						for agencies and consultants to enhance operations. The push for
						smarter, connected environments requires solutions that optimize
						energy use and reduce waste.
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Optimize Building and Plant Efficiency:</strong> Leverage
							advanced technologies to ensure facilities operate at peak
							efficiency, minimizing environmental impact.
						</li>
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Enhance Data Center Operations:</strong> Enable precise
							monitoring and management of energy usage in data centers,
							ensuring sustainability.
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
						Innovative Solutions for Efficiency
					</h2>
					<p className="text-gray-700 text-lg dark:text-gray-400">
						Logiicdev leads in developing tailored platforms and solutions for
						energy efficiency professionals, including:
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Custom Sites and Configurable Tests:</strong> Create
							personalized platforms to optimize energy efficiency based on
							specific client needs.
						</li>
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Advanced Data Capture:</strong> Integrate mobile apps and
							IoT devices for real-time data collection to identify
							inefficiencies.
						</li>
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Comprehensive Analysis:</strong> Provide in-depth tools
							for monitoring and analysis, ensuring accurate, actionable
							solutions.
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
						Delivering Sustainable Results
					</h2>
					<p className="text-gray-700 text-lg dark:text-gray-400">
						Our commitment extends beyond tools; we deliver sustainable results
						that add long-term value. By implementing our solutions, businesses
						can achieve cost savings, operational efficiency, and a more
						sustainable future.
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Proactive Energy Management:</strong> Use insights from
							our analytics to optimize operations across multiple sites.
						</li>
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Scalable Solutions:</strong> Our platforms adapt to the
							growing demand for energy-efficient solutions, from single
							buildings to vast data centers.
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
						Your Partner in Energy Efficiency
					</h2>
					<p className="text-gray-700 text-lg dark:text-gray-400">
						Partner with Logiicdev for expert-driven solutions that meet the
						complexities of modern energy management, driving the future of
						energy efficiency for a sustainable tomorrow.
					</p>
					<ul className="space-y-4 pl-6 list-disc">
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Future-Focused Approach:</strong> Invest in sustainable
							practices that prepare your business for long-term efficiency and
							regulatory compliance.
						</li>
						<li className="text-gray-700 text-lg dark:text-gray-400">
							<strong>Collaborative Partnership:</strong> Work with us as a
							dedicated partner committed to achieving your energy efficiency
							goals.
						</li>
					</ul>
				</motion.div>
			</div>
		</div>
	)
}

export default EnergyEfficiency
