import React from 'react'
import { useParams } from 'react-router-dom'

import '../styles/pages/docs.scss'

// Components
import {
	Dots, Lines, Zoom, Square, Ripple,
	Sugar, Planets, Cube, Spinner3D, Tunnel
} from '@/'

const componentsMap = {
	dots: Dots,
	lines: Lines,
	zoom: Zoom,
	square: Square,
	ripple: Ripple,
	sugar: Sugar,
	planets: Planets,
	cube: Cube,
	spinner3d: Spinner3D,
	tunnel: Tunnel
}

export default function Docs(): React.ReactElement {
	const { component } = useParams()

	const Component = component ? componentsMap[component.toLowerCase() as keyof typeof componentsMap] : null

	if (!Component) {
		return (
			<main className='page docs'>
				<h1>📚 Documentation</h1>
				<p>Select a component to see its documentation.</p>
			</main>
		)
	}

	return (
		<main className='page docs'>
			<h1>{component}</h1>
			<div className='live-preview'>
				<Component fullScreen={false} />
			</div>
		</main>
	)
}
