import React from 'react'

// Components
import { Preloader } from './lib/Preloader'
import { Dots } from './preloaders/Dots/Dots'
import { Lines } from './preloaders/Lines/Lines'
import { Zoom } from './preloaders/Zoom/Zoom'
import { Cube } from './preloaders/Cube/Cube'
import { Ripple } from './preloaders/Ripple/Ripple'

export default function App(): React.ReactElement {
	return (
		<main>
			<h1>React Preloaders Demo</h1>

			<h2>Basic Preloader</h2>
			<Preloader />
			<br />

			<h2>Dots Preloader</h2>
			<Dots fullScreen count={5} color='deeppink' />
			<br />

			<h2>Lines Preloader</h2>
			<Lines fullScreen count={6} color='#00ffff' barWidth={5} gap={10} duration={0.8} />
			<br />

			<h2>Zoom Preloader</h2>
			<Zoom fullScreen count={5} color='lime' barHeight={40} />
			<br />

			<h2>Cube Preloader</h2>
			<Cube fullScreen color='hotpink' size={80} borderWidth={3} duration={1.8} />
			<br />

			<h2>Ripple Preloader</h2>
			<Ripple fullScreen color='#61dafb' size={80} borderWidth={4} duration={1.5} />
		</main>
	)
}
