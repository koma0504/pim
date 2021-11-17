import Link from "next/link";
import Image from "next/image";
import { HoverLink } from "../components/hoverLink/hoverLink";
import { Nav } from "../components/nav/nav";
import { client } from "../lib/client";
import { Controller, Scene } from "react-scrollmagic";

export default function gallery({ gallery }) {
	return (
		<>
			<Nav />
			<Controller>
				<Scene vertical={false}>
					<div>sss</div>
				</Scene>
			</Controller>

			<main className="gallery">
				<ul className="image_list">
					{gallery.map((gallery) => (
						<HoverLink>
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
						</HoverLink>
					))}
				</ul>
			</main>
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
