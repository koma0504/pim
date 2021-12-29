import React, { useContext, memo } from "react";
import { cursorHoverAction } from "../../pages/_app";

export const HoverLink = memo(({ children }) => {
	const { setHover } = useContext(cursorHoverAction);
	return (
		<span
			className="hover"
			onMouseEnter={() => setHover("click")}
			onMouseLeave={() => setHover()}
		>
			{children}
		</span>
	);
});
