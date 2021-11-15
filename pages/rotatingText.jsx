import { AdjustmentFilter } from "@pixi/filter-adjustment";
import { Container, Sprite, withFilters } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import { useTick } from "@inlet/react-pixi";
import { useState } from "react";

function RotatingText() {
	const Filters = withFilters(Container, {
		blur: PIXI.filters.BlurFilter,
		adjust: AdjustmentFilter,
		noise: PIXI.filters.NoiseFilter,
	});
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [rotation, setRotation] = useState(0);
	let i = 0;

	// custom ticker
	useTick((delta) => {
		i += 0.05 * delta;

		setX(Math.sin(i) * 100);
		setY(Math.sin(i / 1.5) * 100);
		setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
	});
	return (
		<Filters scale={1} noise={{ noise: 0.2 }} noise={{ seed: 0.1 }}>
			<Sprite
				scale={{ x: 0.5, y: 0.5 }}
				anchor={0.5}
				x={200}
				y={200}
				rotation={rotation}
				image="./images/image01.jpg"
			/>
		</Filters>
	);
}

export default RotatingText;
