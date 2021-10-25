import Link from "next/link";
import { Nav } from "../components/nav/nav";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Home({ portfolio }) {
	console.log(portfolio);
	return (
		<>
			<Nav />
			<main className="top">
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
