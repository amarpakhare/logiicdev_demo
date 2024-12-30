import React, {useRef} from "react"
import {motion, useInView} from "framer-motion"
import {
	FaUserGraduate,
	FaClock,
	FaBriefcase,
	FaBook,
	FaRocket,
	FaUserTie,
} from "react-icons/fa"

const Opportunities = () => {
	// Animation variants
	const fadeInVariant = {
		hidden: {opacity: 0, y: 30},
		visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
	}

	// Refs and in-view detection for each card
	const cardRefs = Array.from({length: 6}, () => useRef(null))
	const isCardInView = cardRefs.map((ref) =>
		useInView(ref, {once: true, amount: 0.2})
	)

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 lg:px-24 dark:bg-slate-800">
			{/* Heading */}
			<div className="text-center mb-16">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
					Opportunities for Students and New Graduates
				</h1>
				<p className="text-lg text-gray-600 mt-4 dark:text-gray-200">
					Explore a wide range of exciting opportunities available year-round!
				</p>
			</div>

			{/* Opportunities Section */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
				{[
					{
						title: "Full-Time Internship",
						description:
							"Our internships are full-time (40 hours per week) and typically last between 3 to 12 months. Many assignments can serve as thesis or graduation projects.",
						icon: <FaClock className="text-yellow-500 text-4xl mx-auto mb-4" />,
					},
					{
						title: "Working Student Opportunities",
						description:
							"These part-time roles (typically 8-20 hours per week) offer a duration of 6 months or more. Many assignments are well-suited for thesis or graduation projects.",
						icon: <FaBook className="text-blue-500 text-4xl mx-auto mb-4" />,
					},
					{
						title: "Graduate, PhD, and Thesis Opportunities",
						description:
							"We offer diverse graduate opportunities across multiple domains. Ideal for thesis or graduation projects.",
						icon: (
							<FaUserGraduate className="text-green-500 text-4xl mx-auto mb-4" />
						),
					},
					{
						title: "Entry-Level Positions",
						description:
							"Gain real-world experience as a new graduate with year-round opportunities across diverse career fields and locations.",
						icon: (
							<FaBriefcase className="text-purple-500 text-4xl mx-auto mb-4" />
						),
					},
				].map((item, index) => (
					<motion.div
						key={index}
						ref={cardRefs[index]}
						variants={fadeInVariant}
						initial="hidden"
						animate={isCardInView[index] ? "visible" : "hidden"}
						className="bg-white p-8 rounded-lg shadow-lg text-center dark:bg-[#181c32]"
					>
						<div className="flex justify-center  mb-4">{item.icon}</div>
						<h2 className="text-xl dark:text-gray-200 font-semibold text-gray-800 mb-2">
							{item.title}
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Opportunities
