import React from 'react'

import './Lines.scss'

export interface LinesProps {
	color?: string
	count?: number
	barWidth?: number
	barHeight?: number
	gap?: number
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Vertical bar loading animation (like equalizer).
 */
export const Lines = ({ color = '#2D2D2D', count = 6, barWidth = 4, barHeight = 30, gap = 8, duration = 1, fullScreen = false, className = '' }: LinesProps): React.ReactElement => {
	return (
		<div className={`lines ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--line-width': `${barWidth}px`, '--line-height': `${barHeight}px`, '--line-gap': `${gap}px`, '--line-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className='line' style={{ animationDelay: `${i * 0.1}s` }} />)}
		</div>
	)
}
