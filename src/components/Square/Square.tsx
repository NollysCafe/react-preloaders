import React from 'react'
import { definePreloaderMeta } from '../../utils/definePreloaderMeta'

import './Square.scss'

/**
 * Props for the Square preloader.
 */
export interface SquareProps {
	/**
	 * Border and fill color (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Width/height of the square (default: `30`)
	 */
	size?: number
	/**
	 * Border thickness in pixels (default: `4`)
	 */
	borderWidth?: number
	/**
	 * Duration of full spin/fill cycle in seconds (default: `2`)
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
 * Square preloader:
 * A 2D square spins while filling up and emptying.
 *
 * @example
 * <Square size={40} borderWidth={3} duration={1.8} />
 */
export const Square = ({ color = '#2D2D2D', size = 30, borderWidth = 4, duration = 2, fullScreen = false, className = '' }: SquareProps): React.ReactElement => {
	return (
		<div className={`square ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--square-size': `${size}px`, '--square-border': `${borderWidth}px`, '--square-duration': `${duration}s` } as React.CSSProperties}>
			<div className='box'>
				<div className='fill' />
			</div>
		</div>
	)
}

export const squareMeta = definePreloaderMeta({
	name: 'Square',
	description: 'A 2D square spins while filling up and emptying.',
	example: `<Square size={40} borderWidth={3} duration={1.8} />`,
	props: [
		{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Border and fill color.' },
		{ name: 'size', type: 'number', default: '30', desc: 'Width/height of the square.' },
		{ name: 'borderWidth', type: 'number', default: '4', desc: 'Border thickness in pixels.' },
		{ name: 'duration', type: 'number', default: '2', desc: 'Duration of full spin/fill cycle in seconds.' },
		{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Whether the loader fills the full screen.' },
		{ name: 'className', type: 'string', default: '', desc: 'Optional additional class names' },
	],
}, Square)
