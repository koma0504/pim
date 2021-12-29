import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState } from "react";
import { HoverLink } from "../hoverLink/hoverLink";
import { MenuList } from "./menuList";
export const Nav = memo((props) => {
	const { route } = useRouter();

	//アニメーションの状態を作る
	const navOpen = {
		open: {
			left: 0,
		},
		closed: {
			left: "-100vw",
		},
	};
	const menuOpen = {
		open: {
			x: 200,
		},
		closed: {
			x: -400,
		},
	};
	//メニューの状態を作る
	const [isOpne, setIsOpen] = useState(false);
	//クリックしてstateを変化させる場所
	//stateが変化したら見た目が変わる場所
	return (
		<>
			<nav className={isOpne ? "nav z_nav is_open" : "nav z_nav"}>
				<HoverLink>
					<h1 className="z_h1" onClick={() => setIsOpen(!isOpne)}>
						{route === "/"
							? route.replace("/", "top")
							: route.match(/id/)
							? route.replace("/[id]", "").replace("/", "")
							: route.replace("/", "")}
					</h1>
				</HoverLink>
				<motion.ul
					className="menu"
					variants={navOpen}
					animate={isOpne ? "open" : "closed"}
					transition={{ duration: 0.6 }}
				>
					{MenuList.map((menu) => (
						<motion.li
							key={menu}
							whileHover={{ translateX: 20 }}
							onClick={() => setIsOpen(!isOpne)}
						>
							<HoverLink>
								<Link href={menu === "top" ? "/" : `/${menu}`}>
									<a>{menu}</a>
								</Link>
							</HoverLink>
						</motion.li>
					))}
					<HoverLink>
						<p onClick={() => setIsOpen(!isOpne)}>close</p>
					</HoverLink>
				</motion.ul>
			</nav>
		</>
	);
});
