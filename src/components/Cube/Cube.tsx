import React from 'react'
import { definePreloaderMeta } from '../../utils/definePreloaderMeta'

import './Cube.scss'

/**
 * Props for the Cube preloader.
 */
export interface CubeProps {
	/**
	 * Color of all cube faces (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Width/height of the cube (default: `64`)
	 */
	size?: number
	/**
	 * Duration of one full rotation in seconds (default: `3`)
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
 * Cube preloader:
 * A 3D cube that spins on both X and Y axes using CSS perspective.
 *
 * @example
 * <Cube size={80} color="#ff69b4" duration={2.5} />
 */
export const Cube = ({ color = '#2D2D2D', size = 64, duration = 3, fullScreen = false, className = '' }: CubeProps): React.ReactElement => {
	return (
		<div className={`cube ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ '--cube-size': `${size}px`, '--cube-color': color, '--cube-duration': `${duration}s` } as React.CSSProperties}>
			<div className='scene'>
				<div className='cube'>
					<div className='face front' />
					<div className='face back' />
					<div className='face right' />
					<div className='face left' />
					<div className='face top' />
					<div className='face bottom' />
				</div>
			</div>
		</div>
	)
}

export const cubeMeta = definePreloaderMeta({
	name: 'Cube',
	description: 'A 3D cube that spins on both X and Y axes using CSS perspective.',
	example: `<Cube size={80} color="#ff69b4" duration={2.5} />`,
	props: [
		{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Color of all cube faces.' },
		{ name: 'size', type: 'number', default: '64', desc: 'Width/height of the cube.' },
		{ name: 'duration', type: 'number', default: '3', desc: 'Duration of one full rotation in seconds.' },
		{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Whether the loader fills the full screen.' },
		{ name: 'className', type: 'string', default: '', desc: 'Optional additional class names' },
	],
}, Cube)
