import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { motion, useAnimation } from "framer-motion";
import { PageTransition } from "../components/pageTransition/pageTransition";

export default function Home({ portfolio }) {
	return (
		<>
			<PageTransition />
			<main className="top">
				<div className="info z_info">
					<h1>pim's official site</h1>
					<p>I'm photographer</p>
					<p>giar : camera fuji X-4 lens　ZEISS </p>
					<p>giar : camera fuji X-4 lens　ZEISS </p>
				</div>
				<div className="slider">
					<Splide
						className="slide_list"
						options={{
							type: "loop",
							autoplay: true,
							arrows: false,
						}}
					>
						<SplideSlide>
							<img src="./images/image01.jpg" alt="Image 1" />
						</SplideSlide>
						<SplideSlide>
							<img src="./images/image01.jpg" alt="Image 1" />
						</SplideSlide>
						<SplideSlide>
							<img src="./images/image01.jpg" alt="Image 1" />
						</SplideSlide>
					</Splide>
				</div>
			</main>
		</>
	);
}
