import React from 'react'

import '../styles/pages/home.scss'

// Components
import { Link } from 'react-router-dom'
import {
	Dots, Lines, Zoom, Square, Ripple,
	Sugar, Planets, Cube, Spinner3D, Tunnel
} from '../../src/'

export default function Home(): React.ReactElement {
	return (
		<main className='page home'>
			<section className='home-hero'>
				<h1>🌀 The cleanest React preloaders you'll ever use</h1>
				<p>Zero-config components, fully customizable with SCSS & TypeScript. Made for speed, beauty, and dev happiness.</p>
				<div className='buttons'>
					<Link to='/docs'>View Docs</Link>
					<a href='https://github.com/nollyscafe/react-preloaders' target='_blank' rel='noreferrer noopener' className='alt'>GitHub</a>
				</div>
			</section>

			<section className='features'>
				<h2>✨ Why React Preloaders?</h2>
				<div className='grid'>
					<div className='card'>
						<div className='emoji'>⚡</div>
						<h3>Lightning Fast</h3>
						<p>No external deps, no runtime config — just drop in and go.</p>
					</div>
					<div className='card'>
						<div className='emoji'>🎨</div>
						<h3>Fully Customizable</h3>
						<p>Tweak color, size, speed, gaps, counts... you name it.</p>
					</div>
					<div className='card'>
						<div className='emoji'>🧠</div>
						<h3>100% TypeScript</h3>
						<p>Enjoy smart auto-complete and full intellisense docs.</p>
					</div>
					<div className='card'>
						<div className='emoji'>🔧</div>
						<h3>Developer Friendly</h3>
						<p>Consistent props, clean structure, readable SCSS files.</p>
					</div>
					<div className='card'>
						<div className='emoji'>🪄</div>
						<h3>10+ Unique Animations</h3>
						<p>From minimal to fancy. Choose your style or build your own.</p>
					</div>
					<div className='card'>
						<div className='emoji'>🌐</div>
						<h3>SSR & Vite Ready</h3>
						<p>Works out of the box with Vite, Next, CRA, Webpack, etc.</p>
					</div>
				</div>
			</section>

			<section className='showcase'>
				<h2>🧪 Preloader Showcase</h2>
				<div className='grid'>
					{[
						{ name: 'Dots', component: <Dots count={4} color='#f0f' /> },
						{ name: 'Lines', component: <Lines count={5} color='#0ff' /> },
						{ name: 'Zoom', component: <Zoom count={4} color='lime' /> },
						{ name: 'Square', component: <Square color='hotpink' /> },
						{ name: 'Ripple', component: <Ripple color='#61dafb' /> },
						{ name: 'Sugar', component: <Sugar color='#f39c12' /> },
						{ name: 'Planets', component: <Planets color='turquoise' duration={8} /> },
						{ name: 'Cube', component: <Cube color='goldenrod' /> },
						{ name: 'Spinner3D', component: <Spinner3D color='#00bcd4' /> },
						{ name: 'Tunnel', component: <Tunnel color='violet' count={4} /> }
					].map(({ name, component }) => (
						<div key={name} className='card'>
							<h3>{name}</h3>
							<div className='loader'>{component}</div>
							<Link to={`/docs/${name.toLowerCase()}`}>View docs</Link>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
