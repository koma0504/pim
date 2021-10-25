import { useLocomotiveScroll } from "react-locomotive-scroll";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/nav/nav";
import styled from "styled-components";

export default function gallery({ gallery }) {
	const { scroll } = useLocomotiveScroll();

	console.log(gallery);
	return (
		<>
			<Nav />
			<section className="profile">profile</section>
		</>
	);
}
