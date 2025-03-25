import React from 'react'

import './Dots.scss'

export interface DotsProps {
	color?: string
	size?: number
	gap?: number
	duration?: number
	count?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Animated dots preloader.
 * Fully customizable: size, count, gap, duration, fullscreen, etc.
 */
export const Dots = ({ color = '#2D2D2D', size = 12, gap = 10, duration = 0.7, count = 4, fullScreen = false, className = '' }: DotsProps): React.ReactElement => {
	return (
		<div className={`dots ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--dot-size': `${size}px`, '--dot-gap': `${gap}px`, '--dot-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className='dot' style={{ animationDelay: `${i * 0.1}s` }} />)}
		</div>
	)
}
