import React from 'react'
import { definePreloaderMeta } from '../../utils/definePreloaderMeta'

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

export const zoomMeta = definePreloaderMeta({
	name: 'Zoom',
	description: 'Bars pulse by scaling vertically in a rhythmic sequence.',
	example: `<Zoom count={6} barHeight={60} barWidth={8} gap={12} duration={1.5} />`,
	props: [
		{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Main color of the bars.' },
		{ name: 'count', type: 'number', default: '5', desc: 'Number of bars.' },
		{ name: 'barWidth', type: 'number', default: '6', desc: 'Width of each bar in pixels.' },
		{ name: 'barHeight', type: 'number', default: '50', desc: 'Height of each bar in pixels.' },
		{ name: 'gap', type: 'number', default: '6', desc: 'Gap between bars in pixels.' },
		{ name: 'duration', type: 'number', default: '1.2', desc: 'Duration of the animation loop in seconds.' },
		{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Whether to take up the full screen.' },
		{ name: 'className', type: 'string', default: '', desc: 'Optional additional class names' },
	],
}, Zoom)
