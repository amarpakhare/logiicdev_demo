import React, {useRef} from "react"
import {Link} from "react-router-dom"
import {motion, useInView} from "framer-motion"
import {FaBriefcase, FaMapMarkerAlt, FaTools} from "react-icons/fa"
import careers1 from "../../assets/Career/student.jpeg"
import careers3 from "../../assets/careers4.jpeg"
import AO from "../../assets/AO_lab_office-min.webp"
import Opportunities from "./Opportunities"
import BoardWriting from "../../assets/BoardWriting.webp"

const Careers = () => {
	// Animation References
	const textRef2 = useRef(null)
	const textRef3 = useRef(null)

	const isTextInView2 = useInView(textRef2, {once: true, amount: 0.2})
	const isTextInView3 = useInView(textRef3, {once: true, amount: 0.2})

	const textVariants = {
		hidden: {opacity: 0, x: -50},
		visible: {opacity: 1, x: 0, transition: {duration: 1}},
	}

	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: {opacity: 1, y: 0, transition: {duration: 0.7, delay: 0.2}},
	}

	// the job openings
	const jobOpenings = [
		{
			title: "",
			location: "",
			experience: "",
			skills: "Python, APIs, Frameworks",
		},
		{
			title: "FPGA Developer",
			location: "Specify Location",
			experience: "Specify years of experience or entry-level",
			skills: "VHDL/Verilog, FPGA Design Tools, Embedded Systems",
		},
		{
			title: "AI Algorithm Developer",
			location: "Specify Location",
			experience: "Specify years of experience or entry-level",
			skills: "Machine Learning, Neural Networks, Python, TensorFlow/PyTorch",
		},
	]

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
		<div className="relative bg-[#fefff2] dark:bg-[#111827] min-h-screen">
			{/* Background Image */}
			{/* <div className="absolute inset-0 h-[85vh]">
				<img
					src={careers1}
					alt="People walking and discussing"
					className="w-full h-full object-cover opacity-80"
				/>
			</div> */}

			{/* Overlay with Text Content */}
			{/* <div className="relative z-2 flex items-center justify-start h-[85vh] px-6 md:px-12 lg:px-20 py-10 md:py-20">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={textVariants}
					className="bg-white bg-opacity-90 p-6 md:p-10 lg:p-16 rounded-lg max-w-lg sm:max-w-xl md:max-w-2xl dark:bg-blue-300 dark:bg-opacity-90"
				>
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
						Careers at Logiicdev
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4 md:mt-6">
						Innovate Your Future With Us
					</p>
					
				</motion.div>
			</div> */}
			<motion.div
				initial={{opacity: 0, y: 50}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1}}
				className="flex flex-col lg:flex-row lg:gap-8 items-center bg-[#fefff2] dark:bg-[#111827] py-8 px-4 md:py-16 md:px-8"
			>
				{/* Image Section */}
				<div className="relative w-full max-w-5xl h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg shadow-lg">
					<img
						src={careers1}
						alt="People walking and discussing"
						className="w-full h-full object-cover opacity-80"
					/>
				</div>

				{/* Overlay Content */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, ease: "easeOut"}}
					className="w-full max-w-3xl mt-8  dark:bg-blue-300 bg-opacity-90 dark:bg-opacity-90 p-6 md:p-10 lg:p-16 rounded-lg text-center"
				>
					{/* Title */}
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-900 mb-4">
						Careers at Logiicdev
					</h1>

					{/* Subtitle */}
					<p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-800">
						Innovate Your Future With Us
					</p>
				</motion.div>
			</motion.div>

			{/* Why Choose Logiicdev Section */}
			<motion.section
				ref={textRef2}
				initial="hidden"
				animate={isTextInView2 ? "visible" : "hidden"}
				variants={textVariants}
				className="py-16 px-6 md:px-16 bg-white dark:bg-slate-800"
			>
				<div className="max-w-7xl mx-auto text-center space-y-10">
					<h2 className="text-4xl font-bold text-gray-800 dark:text-white">
						Brilliance Today, Impact Tomorrow
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						"The Logiicdev team creates pioneering technologies that enhance the
						connected world, making it safer, smarter, and more secure. We're
						looking for innovative, passionate, and talented individuals like
						you to join us in shaping the future."
					</p>
				</div>

				{/* <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Career Areas",
							description:
								"Explore our diverse business segments and collaborative functional areas, offering insight into how we work together to drive innovation.",
							icon: <FaBriefcase className="text-3xl text-yellow-500" />,
						},
						{
							title: "Team Member Development and Growth",
							description:
								"Learn about our commitment to skill development through a range of learning opportunities designed to enhance your growth and expand your capabilities.",
							icon: <FaUserGraduate className="text-3xl text-yellow-500" />,
						},
						{
							title: "Compensation and Benefits",
							description:
								"Discover competitive programs aimed at attracting top talent, driving performance, and advancing your career.",
							icon: <FaMoneyBillWave className="text-3xl text-yellow-500" />,
						},
						{
							title: "Corporate Values and Team Member Engagement",
							description:
								"An introduction to our core values, which serve as the foundation of our exceptional company culture.",
							icon: <FaHeart className="text-3xl text-yellow-500" />,
						},
						{
							title: "Team Member Demographics",
							description:
								"A transparent look at our workforce demographics, including insights into management diversity, gender representation, age distribution, and recent hires.",
							icon: <FaUsers className="text-3xl text-yellow-500" />,
						},
						{
							title: "Innovative Projects",
							description:
								"Join us in working on cutting-edge projects that push the boundaries of technology and create lasting impact.",
							icon: <FaLightbulb className="text-3xl text-yellow-500" />,
						},
					].map((item, index) => (
						<motion.div
							key={index}
							className="p-6 bg-gray-50 dark:bg-slate-700 shadow-lg rounded-lg text-center"
							initial="hidden"
							animate={isTextInView2 ? "visible" : "hidden"}
							variants={cardVariants}
						>
							<div className="flex justify-center mb-4">{item.icon}</div>
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
								{item.title}
							</h3>
							<p className="mt-4 text-gray-600 dark:text-gray-300">
								{item.description}
							</p>
						</motion.div>
					))}
				</div> */}
				<section className="bg-gray-100 p-8 dark:bg-gray-800 ">
					{/* Careers Heading */}
					<motion.div
						initial={{opacity: 0, y: -50}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.8}}
						className="text-center mb-10"
					>
						<h1 className="text-4xl font-bold text-yellow-600">Careers</h1>
						<p className="mt-4 text-gray-600 dark:text-gray-300">
							Join us to shape the technologies of tomorrow!
						</p>
					</motion.div>

					{/* Job Openings */}
					<motion.div
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						viewport={{once: true}}
						transition={{duration: 1}}
						className="mb-12"
					>
						<h2 className="text-2xl font-semibold mb-6 text-yellow-600">
							Current Job Openings
						</h2>

						<div className="flex flex-col gap-4">
							<Link
								to="/searchJobs"
								onClick={() => {
									window.scrollTo(0, 0)
								}}
							>
								<motion.div
									whileHover={{scale: 1.02}}
									className="flex flex-col gap-4 p-6 bg-white dark:bg-[#97c4f6] shadow-lg rounded-xl transition-transform duration-300"
								>
									<h3 className="text-2xl font-semibold text-gray-800">
										Python Developer
									</h3>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaMapMarkerAlt className="text-blue-500 w-6 h-6" />
										<p>
											<span className="font-bold">Location: </span>
											Graz, Austria
										</p>
									</div>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaBriefcase className="text-green-500 w-6 h-6" />
										<p>
											<span className="font-bold">Experience: </span>
											Specify years of experience or entry-level
										</p>
									</div>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaTools className="text-yellow-500 w-6 h-6" />
										<p>
											<span className="font-bold">Skills: </span>
											Python, APIs, Frameworks
										</p>
									</div>
								</motion.div>
							</Link>
							<Link
								to="/searchJobs"
								onClick={() => {
									window.scrollTo(0, 0)
								}}
							>
								<motion.div
									whileHover={{scale: 1.02}}
									className="flex flex-col gap-4 p-6 bg-white dark:bg-[#97c4f6] shadow-lg rounded-xl transition-transform duration-300"
								>
									<h3 className="text-2xl font-semibold text-gray-800">
										FPGA Developer
									</h3>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaMapMarkerAlt className="text-blue-500 w-6 h-6" />
										<p>
											<span className="font-bold">Location: </span>
											Graz, Austria
										</p>
									</div>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaBriefcase className="text-green-500 w-6 h-6" />
										<p>
											<span className="font-bold">Experience: </span>
											Specify years of experience or entry-level
										</p>
									</div>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaTools className="text-yellow-500 w-6 h-6" />
										<p>
											<span className="font-bold">Skills: </span>
											VHDL/Verilog, FPGA Design Tools, Embedded Systems
										</p>
									</div>
								</motion.div>
							</Link>
							<Link
								to="/searchJobs"
								onClick={() => {
									window.scrollTo(0, 0)
								}}
							>
								<motion.div
									whileHover={{scale: 1.02}}
									className="flex flex-col gap-4 p-6 bg-white dark:bg-[#97c4f6] shadow-lg rounded-xl transition-transform duration-300"
								>
									<h3 className="text-2xl font-semibold text-gray-800">
										AI Algorithm Developer
									</h3>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaMapMarkerAlt className="text-blue-500 w-6 h-6" />
										<p>
											<span className="font-bold">Location: </span>
											Graz, Austria
										</p>
									</div>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaBriefcase className="text-green-500 w-6 h-6" />
										<p>
											<span className="font-bold">Experience: </span>
											Specify years of experience or entry-level
										</p>
									</div>
									<div className="flex items-center gap-2 text-base text-gray-600">
										<FaTools className="text-yellow-500 w-6 h-6" />
										<p>
											<span className="font-bold">Skills: </span>
											Machine Learning, Neural Networks, Python,
											TensorFlow/PyTorch
										</p>
									</div>
								</motion.div>
							</Link>
						</div>
					</motion.div>
				</section>
			</motion.section>
			<Opportunities />

			{/* Students and New Graduates Section */}
			<motion.div
				ref={textRef3}
				initial="hidden"
				animate={isTextInView3 ? "visible" : "hidden"}
				variants={textVariants}
				className="flex flex-col md:flex-row items-start bg-gray-50 p-6 md:p-12 lg:p-16 space-y-6 md:space-y-0 md:space-x-10 dark:bg-slate-700"
			>
				<div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5">
					<img
						src={careers3}
						alt="Students working together"
						className="w-full h-auto rounded-lg object-cover"
					/>
				</div>

				<div className="w-full md:w-1/2 lg:w-3/5 space-y-4">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
						Students and New Graduates
					</h2>
					<p className="text-gray-600 text-lg dark:text-gray-200">
						Discover the real-world opportunities and hands-on experiences
						offers to students, recent graduates, and early-career
						professionals. Collaborate with industry and innovators, working on
						cutting-edge technologies that drive the future."
					</p>
				</div>
			</motion.div>
			<div className="mb-4 dark:bg-[#1e293b]">
				{/* Team Member Testimonial - Vertical Card */}
				<div className="text-center py-16 dark:bg-[#1e293b] ">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
						Team Member Reviews
					</h1>
					<p className="text-lg text-gray-600 mt-4 dark:text-gray-200">
						Honest Insights from Team Collaborations
					</p>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[100px]">
					<div className="flex justify-center items-center -gap-8">
						<motion.div
							ref={cardRefs[5]}
							variants={fadeInVariant}
							initial="hidden"
							animate={isCardInView[5] ? "visible" : "hidden"}
							className="max-w-sm mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg text-center dark:bg-[#87b4e8] mb-4"
						>
							<img src={BoardWriting} alt="" />
							<h3 className="text-xl dark:text-[#111827] font-semibold text-gray-800 my-2">
								Team Member
							</h3>
							<p className="text-gray-600 dark:text-[#111827] italic">
								"I have gained experiences and growth at Logiicdev. The
								collaborative environment, continuous learning opportunities,
								and innovative projects have helped me develop both personally
								and professionally. These experiences reflect the supportive
								culture and dynamic challenges that make Logiicdev an inspiring
								place to work."
							</p>
						</motion.div>
					</div>
					<div className="flex justify-center items-center -gap-8">
						<motion.div
							ref={cardRefs[5]}
							variants={fadeInVariant}
							initial="hidden"
							animate={isCardInView[5] ? "visible" : "hidden"}
							className="max-w-sm mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg text-center dark:bg-[#87b4e8] mb-4"
						>
							<img src={AO} alt="" />
							<h3 className="text-xl dark:text-[#111827] font-semibold text-gray-800 my-2">
								AO
							</h3>
							<p className="text-gray-600 dark:text-[#111827] italic">
								"Logiicdev fosters a high-performance environment. Strong team
								synergy and a focus on cutting-edge technologies create a
								dynamic and rewarding work experience. Individual contributions
								are amplified, leading to innovative solutions and continuous
								professional growth."
							</p>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Careers
