import React from 'react'

// Components
import { Preloader } from './lib/Preloader'
import { Dots } from './preloaders/Dots/Dots'
import { Lines } from './preloaders/Lines/Lines'
import { Zoom } from './preloaders/Zoom/Zoom'
import { Square } from './preloaders/Square/Square'
import { Ripple } from './preloaders/Ripple/Ripple'
import { Sugar } from './preloaders/Sugar/Sugar'
import { Planets } from './preloaders/Planets/Planets'
import { Cube } from './preloaders/Cube/Cube'
import { Spinner3D } from './preloaders/Spinner3D/Spinner3D'

export default function App(): React.ReactElement {
	return (
		<main>
			<h1>React Preloaders Demo</h1>

			<h2>Basic Preloader</h2>
			<Preloader />
			<br />

			<h2>Dots</h2>
			<Dots fullScreen count={5} color='deeppink' />
			<br />

			<h2>Lines</h2>
			<Lines fullScreen count={6} color='#00ffff' barWidth={5} gap={10} duration={0.8} />
			<br />

			<h2>Zoom</h2>
			<Zoom fullScreen count={5} color='lime' barHeight={40} />
			<br />

			<h2>Cube</h2>
			<Square fullScreen color='hotpink' size={80} borderWidth={3} duration={1.8} />
			<br />

			<h2>Ripple</h2>
			<Ripple fullScreen color='#61dafb' size={80} borderWidth={4} duration={1.5} />
			<br />

			<h2>Sugar</h2>
			<Sugar fullScreen color='#f39c12' size={80} duration={1.2} />
			<br />

			<h2>Planets</h2>
			<Planets fullScreen color='turquoise' duration={10} />
			<br />

			<h2>Cube (3D)</h2>
			<Cube fullScreen color='goldenrod' size={80} duration={4} />
			<br />

			<h2>Spinner3D</h2>
			<Spinner3D fullScreen color='#00bcd4' size={100} duration={1.2} />
		</main>
	)
}
