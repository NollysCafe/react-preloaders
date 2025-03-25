import React from 'react'
import './Zoom.scss'

/**
 * Props for the Zoom preloader.
 */
export interface ZoomProps {
	/**
	 * Main color of the bars (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Number of bars (default: `5`)
	 */
	count?: number
	/**
	 * Width of each bar in pixels (default: `6`)
	 */
	barWidth?: number
	/**
	 * Height of each bar in pixels (default: `50`)
	 */
	barHeight?: number
	/**
	 * Gap between bars in pixels (default: `6`)
	 */
	gap?: number
	/**
	 * Duration of the animation loop in seconds (default: `1.2`)
	 */
	duration?: number
	/**
	 * Whether to take up the full screen (default: `false`)
	 */
	fullScreen?: boolean
	/**
	 * Optional additional class names
	 */
	className?: string
}

/**
 * Zoom preloader:
 * Bars pulse by scaling vertically in a rhythmic sequence.
 *
 * @example
 * <Zoom count={6} barHeight={60} barWidth={8} gap={12} duration={1.5} />
 */
export const Zoom = ({ color = '#2D2D2D', count = 5, barWidth = 6, barHeight = 50, gap = 6, duration = 1.2, fullScreen = false, className = '' }: ZoomProps): React.ReactElement => {
	return (
		<div className={`zoom ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--zoom-width': `${barWidth}px`, '--zoom-height': `${barHeight}px`, '--zoom-gap': `${gap}px`, '--zoom-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className={`zoom-bar`} style={{ animationDelay: `${i * 0.1}s` }} />)}
		</div>
	)
}
