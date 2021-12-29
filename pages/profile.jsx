import { Nav } from "../components/nav/nav";
import { PageTransition } from "../components/pageTransition/pageTransition";

export default function gallery({ gallery }) {
	return (
		<>
			<Nav />
			<main className="profile">
				<div className="profile_image">
					<img src="/images/profile.jpg" />
				</div>
				<div className="profile_text">
					<div className="name">
						<p>name</p>
						<p>pim</p>
					</div>
					<div className="camera">
						<p>camera</p>
						<p>fuji</p>
					</div>
					<div className="lens">
						<p>lenz</p>
						<p>fuji</p>
					</div>
					<div className="contect">
						<p>contect</p>
						<a href="">mail</a>
					</div>
				</div>
			</main>
			<PageTransition />
		</>
	);
}
