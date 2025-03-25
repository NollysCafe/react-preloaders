import React from 'react'

import './Tunnel.scss'

export interface TunnelProps {
	color?: string
	size?: number
	duration?: number
	count?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Tunnel preloader: expanding tunnel illusion with concentric rings.
 */
export const Tunnel = ({ color = '#2D2D2D', size = 120, duration = 1.6, count = 5, fullScreen = false, className = '' }: TunnelProps): React.ReactElement => {
	return (
		<div className={`tunnel ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--tunnel-size': `${size}px`, '--tunnel-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className='ring' style={{ animationDelay: `${(i * duration) / count}s` }} />)}
		</div>
	)
}
