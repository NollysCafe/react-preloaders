import React from 'react'

import './Spinner3D.scss'

/**
 * Props for the Spinner3D preloader.
 */
export interface Spinner3DProps {
	/**
	 * Color of the spinning disc (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Diameter of the spinner in pixels (default: `60`)
	 */
	size?: number
	/**
	 * Duration of a full spin in seconds (default: `1.5`)
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
 * Spinner3D preloader:
 * A flat disc spins horizontally like a coin in 3D space.
 *
 * @example
 * <Spinner3D size={80} color="#00bcd4" duration={1.2} />
 */
export const Spinner3D = ({ color = '#2D2D2D', size = 60, duration = 1.5, fullScreen = false, className = '' }: Spinner3DProps): React.ReactElement => {
	return (
		<div className={`spinner3d ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--spinner-size': `${size}px`, '--spinner-duration': `${duration}s` } as React.CSSProperties}>
			<div className='disc' />
		</div>
	)
}
