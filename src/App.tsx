import React from 'react'

// Components
import { Preloader } from './lib/Preloader'

export default function App(): React.ReactElement {
	return (
		<main>
			<h1>React Preloaders Demo</h1>
			<Preloader />
		</main>
	)
}
