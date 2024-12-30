import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import GreenTwin from "../../assets/Testimonials/GreenTwin.png"
const Testimonials = () => {
	const testimonials = [
		{
			image: GreenTwin,
			name: "GreenTwin GmbH, Austria",
			feedback:
				"Logiicdev provided outstanding service in developing a seamless and efficient mobile app for our shared project. Their team was highly professional, responsive, and innovative. We highly recommend their expertise for any app development needs!",
		},
		{
			image: GreenTwin,
			name: "GreenTwin GmbH, Austria",
			feedback:
				"Logiicdev provided outstanding service in developing a seamless and efficient mobile app for our shared project. Their team was highly professional, responsive, and innovative. We highly recommend their expertise for any app development needs!",
		},
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	}

	return (
		<div className="max-w-5xl mx-auto px-6 py-12">
			<h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 dark:text-white">
				What Our Clients Say
			</h2>
			<Slider {...settings}>
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center bg-white p-10 rounded-lg dark:bg-gray-800 sm:flex-row sm:text-left sm:gap-6 sm:items-start"
					>
						<img
							src={testimonial.image}
							alt={testimonial.name}
							className="mb-4 "
						/>
						<div className="flex flex-col justify-center sm:justify-start">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
								{testimonial.name}
							</h3>
							<p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">
								{testimonial.feedback}
							</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Testimonials
