import dynamic from "next/dynamic";
const Cursor = dynamic(
	() => import("../components/Cursor/Cursor").then((mod) => mod.Cursor),
	{ ssr: false }
);
import "../styles/global.scss";
import "../styles/locomotive-scroll.css";
import React from "react";
import Head from "next/head";
export default function App({ Component, pageProps }) {
	return (
		<>
			<Cursor />
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="bg_noise"></div>
			<Component {...pageProps} />
		</>
	);
}
