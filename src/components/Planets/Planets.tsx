import React from 'react'
import { definePreloaderMeta } from '../../utils/definePreloaderMeta'

import './Planets.scss'

/**
 * Props for the Planets preloader.
 */
export interface PlanetsProps {
	/**
	 * Color of the planets and orbits (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Duration of the outermost orbit cycle in seconds (default: `12`)
	 */
	duration?: number
	/**
	 * Whether the loader fills the full screen (default: `false`)
	 */
	fullScreen?: boolean
	/**
	 * Optional additional class names
	 */
	className?: string
}

/**
 * Planets preloader:
 * Three orbiting planets circling a central sun — solar system style.
 *
 * @example
 * <Planets color="#00bcd4" duration={10} />
 */
export const Planets = ({ color = '#2D2D2D', duration = 12, fullScreen = false, className = '' }: PlanetsProps): React.ReactElement => {
	return (
		<div className={`planets ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--orbit-duration': `${duration}s` } as React.CSSProperties}>
			<div className='orbit earth'>
				<div className='planet earth-planet' />
				<div className='orbit venus'>
					<div className='planet venus-planet' />
					<div className='orbit mercury'>
						<div className='planet mercury-planet' />
						<div className='sun' />
					</div>
				</div>
			</div>
		</div>
	)
}

export const planetsMeta = definePreloaderMeta({
	name: 'Planets',
	description: 'Three orbiting planets circling a central sun — solar system style.',
	example: `<Planets color="#00bcd4" duration={10} />`,
	props: [
		{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Color of the planets and orbits.' },
		{ name: 'duration', type: 'number', default: '12', desc: 'Duration of the outermost orbit cycle in seconds.' },
		{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Whether the loader fills the full screen.' },
		{ name: 'className', type: 'string', default: '', desc: 'Optional additional class names' },
	],
}, Planets)
