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
	const [seed, setSeed] = useState(0);
	useTick((delta) => {
		setSeed(seed + 0.002);
	});
	return (
		<Filters scale={1} noise={{ noise: 0.2 }} noise={{ seed: 0.1 }}>
			<Sprite
				scale={{ x: 0.5, y: 0.5 }}
				anchor={0.5}
				x={300}
				y={300}
				image="./images/image01.jpg"
			/>
		</Filters>
	);
}

export default RotatingText;
