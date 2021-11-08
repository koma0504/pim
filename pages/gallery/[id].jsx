import { client } from "../../lib/client";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../../components/nav/nav";
import { useState } from "react";

export default function GalleryId({ gallery }) {
	const [width, setWidth] = useState(gallery.photo.width);
	const [height, setheight] = useState(gallery.photo.height);

	return (
		<>
			<Nav />
			<main className={`detail ${width > height ? "vertical" : "beside"}`}>
				<div className="photo">
					<Image
						src={gallery.photo.url}
						alt={gallery.title}
						width={gallery.photo.width}
						height={gallery.photo.height}
						layout="responsive"
					/>
				</div>
				<div className="text">
					<h1>{gallery.title}</h1>
					<p>{gallery.statement}</p>
					<p>{gallery.category.name}</p>
				</div>
			</main>
		</>
	);
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: "gallery" });

	const paths = data.contents.map((content) => `/gallery/${content.id}`);
	return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({ endpoint: "gallery", contentId: id });
	return {
		props: {
			gallery: data,
		},
	};
};
