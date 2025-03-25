import React from 'react'

import '../styles/components/navbar.scss'

// Components
import { NavLink, Link } from 'react-router-dom'

export default function Navbar(): React.ReactElement {
	return (
		<header className='navbar'>
			<div>
				<Link to='/' className='logo'>🌀 React Preloaders</Link>

				<nav>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/docs'>Docs</NavLink>
					<a href='https://github.com/nollyscafe/react-preloaders' target='_blank' rel='noreferrer noopener'>GitHub</a>
				</nav>
			</div>
		</header>
	)
}
