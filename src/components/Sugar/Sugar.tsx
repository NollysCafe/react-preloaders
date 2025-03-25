import React from 'react'
import { definePreloaderMeta } from '../../utils/definePreloaderMeta'

import './Sugar.scss'

/**
 * Props for the Sugar preloader.
 */
export interface SugarProps {
	/**
	 * Color of the bouncing dot (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Diameter of the dot (default: `50`)
	 */
	size?: number
	/**
	 * Duration of the bounce animation in seconds (default: `2.5`)
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
 * Sugar preloader:
 * A bouncing glossy dot with a stretching shadow — feels candy-like and soft.
 *
 * @example
 * <Sugar color="#f39c12" size={60} duration={1.8} />
 */
export const Sugar = ({ color = '#2D2D2D', size = 50, duration = 2.5, fullScreen = false, className = '' }: SugarProps): React.ReactElement => {
	return (
		<div className={`sugar ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--sugar-size': `${size}px`, '--sugar-duration': `${duration}s` } as React.CSSProperties}>
			<span className='dot-container'>
				<span className='dot' />
				<span className='shadow' />
			</span>
		</div>
	)
}

export const sugarMeta = definePreloaderMeta({
	name: 'Sugar',
	description: 'A bouncing glossy dot with a stretching shadow — feels candy-like and soft.',
	example: `<Sugar color="#f39c12" size={60} duration={1.8} />`,
	props: [
		{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Color of the bouncing dot.' },
		{ name: 'size', type: 'number', default: '50', desc: 'Diameter of the dot.' },
		{ name: 'duration', type: 'number', default: '2.5', desc: 'Duration of the bounce animation in seconds.' },
		{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Whether the loader fills the full screen.' },
		{ name: 'className', type: 'string', default: '', desc: 'Optional additional class names' },
	],
}, Sugar)
