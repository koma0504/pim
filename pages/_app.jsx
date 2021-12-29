import dynamic from "next/dynamic";
const Cursor = dynamic(
	() => import("../components/Cursor/Cursor").then((mod) => mod.Cursor),
	{ ssr: false }
);
import "../styles/destyle.css";
import "../styles/global.scss";
import "../styles/locomotive-scroll.css";
import React, { useState } from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Nav } from "../components/nav/nav";
export const cursorHoverAction = React.createContext();

export default function App({ Component, pageProps, router }) {
	const [hover, setHover] = useState();
	const HoverValue = {
		hover,
		setHover,
	};

	return (
		<>
			<cursorHoverAction.Provider value={HoverValue}>
				<Cursor />
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<div className="noise z_noise">
					<div className="bg_noise"></div>
				</div>
				<Nav />
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</cursorHoverAction.Provider>
		</>
	);
}
