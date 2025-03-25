import React from 'react'

import './Dots.scss'

/**
 * Props for the Dots preloader.
 */
export interface DotsProps {
	/**
	 * Color of the dots (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Size (diameter) of each dot in pixels (default: `12`)
	 */
	size?: number
	/**
	 * Gap between the dots in pixels (default: `10`)
	 */
	gap?: number
	/**
	 * Duration of the bounce animation in seconds (default: `0.7`)
	 */
	duration?: number
	/**
	 * Number of dots to display (default: `4`)
	 */
	count?: number
	/**
	 * Whether the loader fills the full screen (default: `false`)
	 */
	fullScreen?: boolean
	/**
	 * Additional class names for the container
	 */
	className?: string
}

/**
 * Animated dots preloader.
 * Dots bounce in a sequence. You can control their count, size, spacing and speed.
 *
 * @example
 * <Dots color="#f0f" size={16} count={6} gap={12} duration={1} />
 */
export const Dots = ({ color = '#2D2D2D', size = 12, gap = 10, duration = 0.7, count = 4, fullScreen = false, className = '' }: DotsProps): React.ReactElement => {
	return (
		<div className={`dots ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--dot-size': `${size}px`, '--dot-gap': `${gap}px`, '--dot-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className='dot' style={{ animationDelay: `${i * 0.1}s` }} />)}
		</div>
	)
}
