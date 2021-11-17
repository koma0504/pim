import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HoverClick } from "../../pages/_app";
import { HoverLink } from "../hoverLink/hoverLink";

export const Nav = (props) => {
	const { route } = useRouter();
	const [menuFlag, setmenuFlag] = useState(false);
	const onClickMenu = () => {
		setmenuFlag(!menuFlag);
	};
	return (
		<>
			<nav className={menuFlag ? "nav opne" : "nav"} onClick={onClickMenu}>
				<HoverLink>
					<h1>
						{route === "/"
							? route.replace("/", "top")
							: route.match(/id/)
							? route.replace("/[id]", "").replace("/", "")
							: route.replace("/", "")}
					</h1>
				</HoverLink>
				<ul className="menu">
					<li>
						<HoverLink>
							<Link href="/">
								<a>top</a>
							</Link>
						</HoverLink>
					</li>
					<li>
						<HoverLink>
							<Link href="/gallery">
								<a>gallery</a>
							</Link>
						</HoverLink>
					</li>
					<li>
						<HoverLink>
							<Link href="/profile">
								<a>profile</a>
							</Link>
						</HoverLink>
					</li>
					<li>
						<HoverLink>
							<Link href="/contact">
								<a>contact</a>
							</Link>
						</HoverLink>
					</li>
					<HoverLink>
						<p>close</p>
					</HoverLink>
				</ul>
			</nav>
		</>
	);
};
