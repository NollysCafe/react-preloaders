import React from 'react'
import './Zoom.scss'

export interface ZoomProps {
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
 * Zooming bars animation (like volume bars pulsing).
 */
export const Zoom = ({ color = '#2D2D2D', count = 5, barWidth = 6, barHeight = 50, gap = 6, duration = 1.2, fullScreen = false, className = '' }: ZoomProps): React.ReactElement => {
	return (
		<div className={`zoom ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--zoom-width': `${barWidth}px`, '--zoom-height': `${barHeight}px`, '--zoom-gap': `${gap}px`, '--zoom-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className={`zoom-bar`} style={{ animationDelay: `${i * 0.1}s` }} />)}
		</div>
	)
}
