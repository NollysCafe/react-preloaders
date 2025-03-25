import React from 'react'

import './Tunnel.scss'

/**
 * Props for the Tunnel preloader.
 */
export interface TunnelProps {
	/**
	 * Color of the expanding rings (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Size of the initial ring in pixels (default: `120`)
	 */
	size?: number
	/**
	 * Duration of one ring's animation loop in seconds (default: `1.6`)
	 */
	duration?: number
	/**
	 * Number of concentric rings (default: `5`)
	 */
	count?: number
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
 * Tunnel preloader:
 * Expanding rings that simulate a hyperspace warp or tunnel view.
 *
 * @example
 * <Tunnel size={150} count={6} duration={2} />
 */
export const Tunnel = ({ color = '#2D2D2D', size = 120, duration = 1.6, count = 5, fullScreen = false, className = '' }: TunnelProps): React.ReactElement => {
	return (
		<div className={`tunnel ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--tunnel-size': `${size}px`, '--tunnel-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className='ring' style={{ animationDelay: `${(i * duration) / count}s` }} />)}
		</div>
	)
}
