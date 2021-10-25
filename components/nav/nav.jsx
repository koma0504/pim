import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export const Nav = () => {
	const { route } = useRouter();
	const [menuFlag, setmenuFlag] = useState(false);
	const onClickMenu = () => {
		setmenuFlag(!menuFlag);
		console.log(menuFlag);
	};
	return (
		<nav className={menuFlag ? "nav opne" : "nav"} onClick={onClickMenu}>
			<h1>{route === "/" ? route.replace("/", "top") : route.replace("/", "")}</h1>
			<ul className="menu">
				<li>
					<Link href="/">
						<a>top</a>
					</Link>
				</li>
				<li>
					<Link href="/gallery">
						<a>gallery</a>
					</Link>
				</li>
				<li>
					<Link href="/profile">
						<a>profile</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
