import React from 'react'

import '../styles/pages/home.scss'

// Components
import { Link } from 'react-router-dom'

export default function Home(): React.ReactElement {
	return (
		<section className='home-hero'>
			<h1>🌀 The cleanest React preloaders you'll ever use</h1>
			<p>Zero-config components, fully customizable with SCSS & TypeScript. Made for speed, beauty, and dev happiness.</p>
			<div className='buttons'>
				<Link to='/docs'>View Docs</Link>
				<a href='https://github.com/nollyscafe/react-preloaders' target='_blank' rel='noreferrer noopener' className='alt'>GitHub</a>
			</div>
		</section>
	)
}
