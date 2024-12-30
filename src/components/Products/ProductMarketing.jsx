import {React, useState} from "react"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
// import {section} from "framer-motion/client"
import OP2 from "../../assets/products/OP2.png"
import OP1 from "../../assets/products/OP1.png"
import KIANA1 from "../../assets/KIANA/KIANA1.jpg"
import KIANA2 from "../../assets/KIANA/KIANA2.jpg"
import INAS1 from "../../assets/KIANA/INAS.jpg"
import INAS2 from "../../assets/KIANA/INAS2.jpg"
import KARVI from "../../assets/KIANA/Karvi.jpg"
import KARVI2 from "../../assets/KIANA/Karvi2.jpg"
const ProductMarketingPage = () => {
	const products = [
		{
			title: "Omnipower",
			description:
				"To reshape the future of battery testing and mobility through cutting-edge AI and promote long-term sustainability for circular value chain",
			image: OP2, // Replace with the actual image URL
			hoverImage: OP1,
			path: "/product1",
		},
		{
			title: "KIANA",
			description:
				"On-module power supplies for efficient power management Linux BSP and Root filesystem enable seamless integration Customized carrier boards for rapid prototyping",
			image: KIANA1, // Replace with the actual image URL
			hoverImage: KIANA2,
			path: "/product2",
		},
		{
			title: "InAS",
			description:
				"A compact, industrial-grade system-on-module. It supports multiple Zynq devices and offers FPGA configurability, efficient power management",
			image: INAS1, // Replace with the actual image URL
			hoverImage: INAS2,
			path: "/product3",
		},
		{
			title: "KARVi",
			description:
				"It supports multiple Zynq devices and offers FPGA configurability, efficient power management and customizable carrier boards for rapid prototyping and seamless integration.",
			image: KARVI, // Replace with the actual image URL
			hoverImage: KARVI2,
			path: "/product4",
		},
	]

	const cardVariants = {
		hidden: {opacity: 0},
		visible: (index) => ({
			opacity: 1,
			transition: {
				delay: index * 0.2, // Delays based on card index
				duration: 0.5, // Smooth transition duration
				ease: "easeIn", // Ease-out animation for a smooth finish
			},
		}),
	}

	const [hoveredIndex, setHoveredIndex] = useState(null)
	return (
		// <div >
		//   {/* Hero Section */}
		//   {/* <section
		//     className="bg-gradient-to-r  from-gray-700 via-gray-900 to-black text-white py-20"
		//   >
		//     <div className="container mx-auto px-4 text-center">
		//       <h2 className="text-4xl sm:text-5xl font-bold mb-4 animate-fadeIn">
		//         Elevate Your Experience
		//       </h2>
		//       <p className="text-lg sm:text-xl mb-6 animate-slideIn">
		//         A revolutionary product crafted for excellence and innovation.
		//       </p>
		//     </div>
		//   </section> */}
		//    <section
		//     className="bg-gradient-to-br flex flex-col justify-center items-center min-h-96 from-[#68d9e1] via-white to-[#f2dd3a] text-gray-900 py-20 relative overflow-hidden"
		//   >
		//     <div className="container mx-auto px-4 text-center relative z-10">
		//       <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 animate-fadeIn font-sans">
		//       Elevate Your Experience
		//       </h2>
		//       <p className="text-lg sm:text-2xl mb-6 leading-relaxed animate-slideIn">
		//        Revolutionary products crafted for excellence and innovation.
		//       </p>

		//     </div>
		//   </section>

		//   {/* Pricing Section */}
		//   <section id="pricing" className="bg-gray-50 py-16">
		//     <div className="container mx-auto px-4 text-center">
		//       <h3 className="text-3xl font-bold mb-10">Pricing</h3>
		//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
		//         <div
		//           className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 border-t-4 border-yellow-400"
		//         >
		//           <h4 className="text-xl font-semibold mb-3">Basic Plan</h4>
		//           <p className="text-4xl font-bold mb-4">$10</p>
		//           <p className="text-gray-700 mb-6">Perfect for individuals.</p>
		//           <a
		//             href="#contact"
		//             className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition"
		//           >
		//             Get Started
		//           </a>
		//         </div>
		//         <div
		//           className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 border-t-4 border-yellow-400"
		//         >
		//           <h4 className="text-xl font-semibold mb-3">Pro Plan</h4>
		//           <p className="text-4xl font-bold mb-4">$30</p>
		//           <p className="text-gray-700 mb-6">Ideal for small teams.</p>
		//           <a
		//             href="#contact"
		//             className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition"
		//           >
		//             Get Started
		//           </a>
		//         </div>
		//         <div
		//           className="p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105 border-t-4 border-yellow-400"
		//         >
		//           <h4 className="text-xl font-semibold mb-3">Enterprise Plan</h4>
		//           <p className="text-4xl font-bold mb-4">$50</p>
		//           <p className="text-gray-700 mb-6">Designed for enterprises.</p>
		//           <a
		//             href="#contact"
		//             className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition"
		//           >
		//             Get Started
		//           </a>
		//         </div>
		//       </div>
		//     </div>
		//   </section>
		// </div>
		<section>
			<motion.div
				className=" flex flex-col text-center items-center justify-center min-h-80 md:min-h-96 bg-gradient-to-br from-[#8ff3fa] via-white to-[#f4e150] md:py-32 sm:p-10 rounded-lg md:m-10 dark:bg-[#D4F0F0]"
				initial={{opacity: 0, y: -50}} // Initial state
				animate={{opacity: 1, y: 0}} // Animation on mount
				exit={{opacity: 0, y: 50}} // Animation on unmount
				transition={{duration: 0.5}} // Transition timing
			>
				{/* Title Section */}
				<div className="flex flex-col text-center items-center justify-center">
					<motion.h2
						className="text-5xl sm:text-6xl font-extrabold mb-4"
						initial={{opacity: 0, scale: 0.9}}
						animate={{opacity: 1, scale: 1}}
						transition={{duration: 0.7, delay: 0.2}}
					>
						Elevate Your Experience
					</motion.h2>
					<p className="text-lg sm:text-2xl mb-6 leading-relaxed animate-slideIn">
						Revolutionary products crafted for excellence and innovation.
					</p>
				</div>
			</motion.div>

			{/* Our products */}
			<section id="pricing" className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h3 className="text-4xl font-bold mb-10 dark:text-white">
						Our Products
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{products.map((product, index) => (
							<motion.div
								key={index}
								className="p-8 bg-white dark:bg-slate-800 shadow-xl rounded-lg hover:shadow-xl transition-transform transform hover:scale-105 border-t-4 border-yellow-400 dark:border-yellow-500"
								custom={index} // Pass index to the variants
								initial="hidden"
								whileInView="visible"
								viewport={{once: true, amount: 0.1}} // Ensures animation triggers when 10% of the card is in view
								variants={cardVariants}
							>
								<img
									src={
										hoveredIndex === index ? product.hoverImage : product.image
									}
									alt={product.title}
									className="w-full lg:h-80 mb-4 rounded-lg transition-transform duration-500 ease-in-out"
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
								/>
								<h4 className="text-2xl font-bold mb-3 dark:text-yellow-400">
									{product.title}
								</h4>
								<p className="text-gray-700 mb-6 dark:text-gray-300">
									{product.description}
								</p>
								<Link
									to={product.path}
									className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-black hover:text-yellow-400 transition"
								>
									Read More &gt;
								</Link>
							</motion.div>
						))}
					</div>
					;
				</div>
			</section>
		</section>
	)
}

export default ProductMarketingPage
