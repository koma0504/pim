import React, { useContext } from "react";
import { HoverClick } from "../../pages/_app";

export const HoverLink = ({ children }) => {
	const { setHover } = useContext(HoverClick);

	return (
		<span
			className="hover"
			onMouseEnter={() => setHover("click")}
			onMouseLeave={() => setHover()}
		>
			{children}
		</span>
	);
};
