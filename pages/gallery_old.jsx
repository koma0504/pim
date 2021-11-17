import { client } from "../lib/client";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/nav/nav";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function gallery({ gallery }) {
	const { scroll } = useLocomotiveScroll();
	const containerRef = useRef(null);
	const route = useRouter();
	console.log(route);
	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				direction: "horizontal",
			}}
			watch={[route.asPath]}
			containerRef={containerRef}
		>
			<Nav />
			<main className="gallery" data-scroll-container ref={containerRef}>
				<ul className="image_list">
					{gallery.map((gallery) => (
						<Link href={`/gallery/${gallery.id}`} key={gallery.id}>
							<a className="image_item">
								<li>
									<Image
										src={gallery.photo.url}
										alt={gallery.title}
										width={gallery.photo.width}
										height={gallery.photo.height}
									/>
								</li>
							</a>
						</Link>
					))}
				</ul>
			</main>
		</LocomotiveScrollProvider>
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
