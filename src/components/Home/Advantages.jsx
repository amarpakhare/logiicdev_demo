import React from "react"
import {
	FaBatteryFull,
	FaMicrochip,
	FaProjectDiagram,
	FaBolt,
	FaMicrophone,
	FaCheckCircle,
} from "react-icons/fa"
import SIMULATION from "../../assets/AdvantagesIcons/simulation.png"
import BATTERY from "../../assets/AdvantagesIcons/energy.png"
import NETWORKING from "../../assets/AdvantagesIcons/networking.png"
import POWER from "../../assets/AdvantagesIcons/energy-system.png"
import FPGA from "../../assets/AdvantagesIcons/processor.png"
import VALIDATION from "../../assets/AdvantagesIcons/reliability.png"
// import {GiCircuitry} from "react-icons/gi"

import {motion} from "framer-motion"

const Advantages = () => {
	const cards = [
		{
			// icon: <FaMicrochip size={30} />,
			icon: <img src={SIMULATION} alt="simulation" className="w-8" />,
			title: "Simulation",
			description:
				"Logiicdev excels in cell-level design, package optimisation, co-simulation, and ensuring signal and power integrity, as well as verifying analogue and mixed-signal blocks.",
		},
		{
			icon: <img src={BATTERY} alt="battery" className="w-8" />,
			title: "AI Battery Management",
			description:
				"Our cutting-edge AI Battery IP offers a real-time virtual environment for testing control algorithms, eliminating the need for physical prototypes. Experience enhanced efficiency and innovation in battery management as you optimise performance and accelerate development with our advanced technology!",
		},
		{
			icon: <img src={NETWORKING} alt="NETWORKING" className="w-8" />,
			title: "Project Coordination & Consultancy",
			description:
				"With our profound semiconductor expertise, we empower clients to fast-track their business objectives by converting technical knowledge into impactful, practical solutions. Let us guide you in navigating complex projects and achieving your goals efficiently!",
		},
		{
			icon: <img src={POWER} alt="power" className="w-8" />,
			title: "Hi-Speed Power Electronics",
			description:
				"Our GaN FETs provide exceptional switching speeds and minimise losses, making them perfect for battery management, rapid switching, and load handling applications. Unlock unmatched performance and efficiency with our state-of-the-art power electronics solutions!",
		},
		{
			icon: <img src={FPGA} alt="fpga" className="w-8" />,
			title: "FPGA & IP",
			description:
				"At Logiicdev, we provide bespoke FPGA solutions that serve as cost-effective and efficient alternatives to ASICs. Our approach minimises hidden costs and production delays, ensuring you achieve your project goals on time and within budget. Transform your designs with our innovative FPGA technology today!",
		},
		{
			icon: <img src={VALIDATION} alt="validation" className="w-8" />,
			title: "Verification & Validation",
			description:
				"We ensure optimal hardware performance with advanced testing strategies for mixed signals, high-speed tech, and power modes, preventing costly redesigns.",
		},
	]

	// Motion variant for card animations
	const cardVariants = {
		hidden: {opacity: 0, y: 50},
		visible: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.2,
				duration: 0.5,
			},
		}),
	}
	// bg-gradient-to-br from-[#e0bf3f] to-[#89762e]
	return (
		<section className="bg-[#a159ff0d] text-black py-12 px-4 sm:px-8 md:px-16 lg:px-24">
			<div className="container mx-auto text-center">
				{/* Section Heading */}
				<motion.div
					className="flex flex-col lg:flex-row justify-between items-start mb-10"
					initial={{opacity: 0, y: -50}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}} // Animation triggers only once when in view
					transition={{duration: 0.7}}
				>
					{/* Left Side: Heading */}
					<div className="text-center">
						<h2 className="text-3xl sm:text-4xl lg:text-4xl text-green-500 dark:text-[#48d4d2] font-poppins tracking-wide mb-4">
							Unlock your potential with our unparalleled advantages and let us
							help you thrive!{" "}
						</h2>
					</div>
				</motion.div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 px-4 md:px-8 lg:px-0">
					{cards.map((card, index) => (
						<motion.div
							key={index}
							className="bg-white text-black p-6 rounded-lg shadow-md h-auto dark:bg-[#d4f0f0]"
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{once: true}} // Trigger animation when card comes into view
							variants={cardVariants}
						>
							<div className="flex flex-col items-start">
								{/* Icon */}
								<div className="text-black bg-transparent p-2 rounded-md">
									{card.icon}
								</div>

								{/* Card Title */}
								<h3 className="text-lg sm:text-xl font-semibold mb-2">
									{card.title}
								</h3>

								{/* Card Description */}
								<p className="text-sm sm:text-base text-start">
									{card.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Advantages
