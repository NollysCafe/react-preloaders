import React from 'react'

// Components
import { Preloader } from './lib/Preloader'
import { Dots } from './preloaders/Dots/Dots'
import { Lines } from './preloaders/Lines/Lines'

export default function App(): React.ReactElement {
	return (
		<main>
			<h1>React Preloaders Demo</h1>
			<Preloader />
			<br />
			<Dots fullScreen count={5} color='deeppink' />
			<br />
			<Lines fullScreen count={6} color='#00ffff' barWidth={5} gap={10} duration={0.8} />
		</main>
	)
}
