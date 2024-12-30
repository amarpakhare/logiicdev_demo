import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const AdvantagesCarousel = () => {
	const data = [
		{
			title: "Tailored Solutions",
			description:
				"We provide customised strategies that align with your unique needs and goals.",
		},
		{
			title: "Expertise You Can Trust",
			description:
				"Our team of seasoned professionals brings extensive industry knowledge and experience.",
		},
		{
			title: "Innovative Technology",
			description:
				"Leverage cutting-edge tools and techniques to stay ahead of the competition.",
		},
		{
			title: "Enhanced Efficiency",
			description:
				"Streamline your processes and maximise productivity with our proven methodologies.",
		},
		{
			title: "Collaborative Approach",
			description:
				"We work closely with you to ensure your vision is realised every step of the way.",
		},
		{
			title: "Comprehensive Support",
			description:
				"From initial consultation to final implementation, we’re with you at every stage.",
		},
		{
			title: "Sustainable Practices",
			description:
				"We prioritise eco-friendly solutions that contribute to a better future for all.",
		},
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
	}

	return (
		<div className="flex flex-col items-center justify-center bg-[#a159ff0d] px-4 py-8">
			<div className="w-full max-w-3xl">
				<h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-8 dark:text-[#fff]">
					Unlock Your Potential: Discover the Advantages We Offer!
				</h2>
				<Slider {...settings}>
					{data.map((item, index) => (
						<div
							key={index}
							className="bg-gradient-to-r from-orange-100 to-yellow-50 p-6 md:p-8 rounded-lg flex flex-col items-center justify-center text-center mx-auto"
						>
							<h3 className="text-lg md:text-xl font-semibold text-orange-700 mb-2 md:mb-4">
								{item.title}
							</h3>
							<p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
								{item.description}
							</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default AdvantagesCarousel
