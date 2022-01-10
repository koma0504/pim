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
					<p>je ne sais quoi</p>
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
							<img src="./images/mv_01.jpg" alt="Image 1" />
						</SplideSlide>
						<SplideSlide>
							<img src="./images/mv_02.jpg" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src="./images/mv_03.jpg" alt="Image 3" />
						</SplideSlide>
						<SplideSlide>
							<img src="./images/mv_04.jpg" alt="Image 4" />
						</SplideSlide>
						<SplideSlide>
							<img src="./images/mv_05.jpg" alt="Image 5" />
						</SplideSlide>
					</Splide>
				</div>
			</main>
		</>
	);
}
