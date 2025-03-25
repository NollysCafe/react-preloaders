import React from 'react'

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
