import Link from "next/link";
import Image from "next/image";
import { HoverLink } from "../components/hoverLink/hoverLink";
import { client } from "../lib/client";
import { PageTransition } from "../components/pageTransition/pageTransition";
import { motion } from "framer-motion";
import { useHorizontalScroll } from "../components/useHorizontalScroll/useHorizontalScroll";

export default function gallery({ gallery }) {
	const scrollRef = useHorizontalScroll();

	return (
		<>
			<main ref={scrollRef} className="gallery" id="gallery">
				<ul className="image_list" id="image_list">
					{gallery.map((gallery) => (
						<HoverLink key={gallery.id}>
							<Link href={`/gallery/${gallery.id}`}>
								<a className="image_item">
									<li>
										<Image
											src={gallery.photo.url}
											alt={gallery.title}
											width={gallery.photo.width}
											height={gallery.photo.height}
											layout="fixed"
										/>
									</li>
								</a>
							</Link>
						</HoverLink>
					))}
				</ul>
				<motion.div
					className="scroll_arrow z_scroll"
					viewport={{ margin: "0px -300px 0px 0px" }}
				>
					<p>scroll</p>
					<motion.p
						animate={{ translateX: [0, 8, 8, 16], opacity: [0, 1, 1, 0] }}
						transition={{ ease: "easeInOut", repeat: Infinity, duration: 1.2 }}
					>
						<span>→</span>
					</motion.p>
				</motion.div>
			</main>
			<PageTransition />
		</>
	);
}
export const getStaticProps = async () => {
	const data = await client.get({ endpoint: "gallery" });

	return {
		props: {
			gallery: data.contents,
		},
	};
};
