import React from 'react'

import './Ripple.scss'

/**
 * Props for the Ripple preloader.
 */
export interface RippleProps {
	/**
	 * Color of the ripple rings (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Diameter of each ripple circle in pixels (default: `90`)
	 */
	size?: number
	/**
	 * Thickness of each ripple ring border (default: `5`)
	 */
	borderWidth?: number
	/**
	 * Duration of the ripple animation in seconds (default: `1.5`)
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
 * Ripple preloader:
 * Two concentric rings expand and fade like water ripples.
 *
 * @example
 * <Ripple size={100} borderWidth={6} duration={2} />
 */
export const Ripple = ({ color = '#2D2D2D', size = 90, borderWidth = 5, duration = 1.5, fullScreen = false, className = '' }: RippleProps): React.ReactElement => {
	return (
		<div className={`ripple ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--ripple-size': `${size}px`, '--ripple-border': `${borderWidth}px`, '--ripple-duration': `${duration}s` } as React.CSSProperties}>
			<div className='circle' />
			<div className='circle' />
		</div>
	)
}
