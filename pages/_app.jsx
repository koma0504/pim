import "../styles/global.scss";
import "../styles/locomotive-scroll.css";
import React from "react";
import ReactDOM from "react-dom";

export default function App({ Component, pageProps }) {
	return (
		<React.StrictMode>
			<Component {...pageProps} />
		</React.StrictMode>
	);
}
