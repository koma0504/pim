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
				<div>
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
										{/* <div className="details">
										<p className="title">{gallery.title}</p>
										<p className="statement">{gallery.statement}</p>
									</div> */}
									</li>
								</a>
							</Link>
						))}
					</ul>
				</div>
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
