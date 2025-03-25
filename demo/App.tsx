import React from 'react'

// Components
import { Preloader } from '@/core/Preloader'
import { Dots } from '@/components/Dots/Dots'
import { Lines } from '@/components/Lines/Lines'
import { Zoom } from '@/components/Zoom/Zoom'
import { Square } from '@/components/Square/Square'
import { Ripple } from '@/components/Ripple/Ripple'
import { Sugar } from '@/components/Sugar/Sugar'
import { Planets } from '@/components/Planets/Planets'
import { Cube } from '@/components/Cube/Cube'
import { Spinner3D } from '@/components/Spinner3D/Spinner3D'
import { Tunnel } from '@/components/Tunnel/Tunnel'

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
			<br />

			<h2>Tunnel</h2>
			<Tunnel fullScreen color='violet' size={120} duration={1.4} count={6} />
		</main>
	)
}
