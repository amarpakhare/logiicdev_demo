import React from "react"
import {motion} from "framer-motion"
import BoardWriting from "../../assets/About us Image.jpg"
import {FaCheck} from "react-icons/fa"
import {Link} from "react-router-dom"
import Darshna from "../../assets/Team/Darshna.png"
import DK from "../../assets/Team/DK.png"
import IanM from "../../assets/Team/IanM.png"
import Theo from "../../assets/Team/Theo.png"
import JAKOB from "../../assets/Team/Jakob_Udier.jpeg"
import ELENA from "../../assets/Team/Elena Mokina.jpeg"

const AboutUs = () => {
	const teamMembers = [
		{
			name: "DEEPAK V KATKORIA",
			title: "Founder",
			description:
				"My expertise lies in crafting and executing strategies to address complex issues, system planning and rationalization, and effectively managing and motivating teams.",
			imageUrl: DK, // Replace with the actual image path
		},
		{
			name: "DARSHNA DK",
			title: "Manager",
			description:
				"My versatility is a valuable asset to understand customers requirements and propose adequate solutions which can not only ease their design but also ease their utilization.",
			imageUrl: Darshna, // Replace with the actual image path
		},
		{
			name: "THEO H",
			title: "CTO",
			description:
				"Experienced Chief Technology Officer with a demonstrated history of working in the Power semiconductors industry. Skilled in Power electronics, testing and simulation.",
			imageUrl: Theo, // Replace with the actual image path
		},
		{
			name: "IAN M",
			title: "Investor",
			description:
				"As a Strategist, Technologist, and Leader, I am deeply passionate about managing and cultivating highly productive and motivated Engineering teams that innovate and develop cutting-edge technical solutions.",
			imageUrl: IanM, // Replace with the actual image path
		},
		{
			name: "JAKOB UDIER",
			title: "Senior Sales consultant Partner",
			description:
				"Founder of x.test and expert in electronic measurement sales, driving LogiicDev’s growth, mentoring teams, fostering partnerships, and consistently achieving sales excellence.",
			imageUrl: JAKOB, // Replace with the actual image path
		},
		{
			name: "ELENA MOKINA",
			title: "Business Manager",
			description:
				"Driving growth, optimizing operations, and leading teams. Passionate about strategic planning, fostering innovation, and delivering exceptional results for clients and stakeholders.",
			imageUrl: ELENA, // Replace with the actual image path
		},
	]

	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	return (
		<>
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center bg-[#fefff2] dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				{/* Image Section */}
				<div className="relative w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
					<img
						src={BoardWriting}
						alt="People walking and discussing"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Overlay Content */}
				<div className="w-full max-w-3xl mt-8  dark:bg-blue-300 bg-opacity-90 dark:bg-opacity-90 p-6 md:p-10 lg:p-16 rounded-lg  text-left">
					{/* Title */}
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-900 mb-4">
						Let's push the Horizon together...
					</h2>

					{/* Description */}
					<p className="text-gray-700 dark:text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
						We are continuously seeking partners for research projects. We
						believe that collaborating can lead to enhanced knowledge and
						understanding of technology.
					</p>
					<p className="text-gray-700 dark:text-gray-800 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
						Our areas of interest include Power Electronics, GaN, Battery,
						Digital Twins, AI, Robotics and Autonomous Systems, Smart
						Transportation, HPC, and Cyber Security.
					</p>
					<p className="text-gray-700 dark:text-gray-800 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
						Our team consists of skilled PE, FPGA, software, and firmware
						engineers. Additionally, we offer consulting and third-party design
						services...
					</p>

					{/* Call to Action Button */}
					<button className="mt-6 px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded hover:bg-yellow-500 transition duration-200 dark:bg-[#f0f8ee] dark:text-[#256867]">
						<Link
							to="/contact"
							onClick={() => {
								window.scrollTo(0, 0)
							}}
						>
							Contact With Us
						</Link>
					</button>
				</div>
			</motion.div>

			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 0.5, duration: 1}}
				className="flex items-center justify-center bg-[#fefff2] dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				<div className="max-w-3xl w-full text-gray-800 dark:text-white">
					{/* Heading */}
					<h2 className="text-2xl md:text-3xl font-semibold">
						We understand the business language very well.
					</h2>

					{/* Subheading */}
					<p className="text-gray-500 italic mt-2">That is:</p>

					{/* List */}
					<ul className="mt-4 space-y-2 text-sm md:text-base">
						{[
							"Understanding the requirement.",
							"Exploring and finalise the agreed path.",
							"Committing only to what can really be delivered.",
							"Client’s trust and IP protection are our top priority.",
							"Long term profit and win-win partnership.",
							"Any decision should be made openly with choice…not with pressure.",
						].map((text, index) => (
							<motion.li
								key={index}
								initial={{opacity: 0, x: -20}}
								animate={{opacity: 1, x: 0}}
								transition={{delay: index * 0.2, duration: 0.5}}
								className="flex items-start space-x-2"
							>
								<FaCheck className="text-green-500 mt-1" />
								<span>{text}</span>
							</motion.li>
						))}
					</ul>
				</div>
			</motion.div>
			<motion.section
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="py-12 bg-gray-100 dark:bg-[#181c32]"
			>
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
						OUR TEAM
					</h2>
					<p className="text-center text-gray-600 dark:text-[#ffffffac] mb-12">
						Bonding through dialog and empathy
					</p>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								whileHover={{scale: 1.05}}
								className="text-center bg-white dark:bg-[#87b4e8] p-4 shadow-md rounded-lg"
							>
								<img
									src={member.imageUrl}
									alt={member.name}
									className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
								/>
								<h3 className="text-lg font-semibold">{member.name}</h3>
								<p className="text-sm text-gray-500 mb-2">{member.title}</p>
								<p className="text-sm text-gray-700">{member.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
		</>
	)
}

export default AboutUs
