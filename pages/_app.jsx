import dynamic from "next/dynamic";
const Cursor = dynamic(
	() => import("../components/Cursor/Cursor").then((mod) => mod.Cursor),
	{ ssr: false }
);
import "../styles/global.scss";
import "../styles/locomotive-scroll.css";
import React from "react";

export default function App({ Component, pageProps }) {
	return (
		<div>
			{/* <Cursor /> */}
			<Component {...pageProps} />
		</div>
	);
}
