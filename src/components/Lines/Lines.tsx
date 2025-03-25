import React from 'react'
import { definePreloaderMeta } from '../../utils/definePreloaderMeta'

import './Lines.scss'

/**
 * Props for the Lines preloader.
 */
export interface LinesProps {
	/**
	 * Color of the lines (default: `#2D2D2D`)
	 */
	color?: string
	/**
	 * Number of vertical bars to show (default: `6`)
	 */
	count?: number
	/**
	 * Width of each line in pixels (default: `4`)
	 */
	barWidth?: number
	/**
	 * Height of each line in pixels (default: `30`)
	 */
	barHeight?: number
	/**
	 * Gap between lines in pixels (default: `8`)
	 */
	gap?: number
	/**
	 * Duration of one animation cycle in seconds (default: `1`)
	 */
	duration?: number
	/**
	 * Whether to center the loader full screen (default: `false`)
	 */
	fullScreen?: boolean
	/**
	 * Extra className(s) to apply to the wrapper
	 */
	className?: string
}

/**
 * Lines preloader:
 * Equalizer-style bars bounce up and down in a wave sequence.
 *
 * @example
 * <Lines count={8} barWidth={5} barHeight={40} gap={6} duration={0.9} color="#00bcd4" />
 */
export const Lines = ({ color = '#2D2D2D', count = 6, barWidth = 4, barHeight = 30, gap = 8, duration = 1, fullScreen = false, className = '' }: LinesProps): React.ReactElement => {
	return (
		<div className={`lines ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--line-width': `${barWidth}px`, '--line-height': `${barHeight}px`, '--line-gap': `${gap}px`, '--line-duration': `${duration}s` } as React.CSSProperties}>
			{Array.from({ length: count }).map((_, i) => <div key={i} className='line' style={{ animationDelay: `${i * 0.1}s` }} />)}
		</div>
	)
}

export const linesMeta = definePreloaderMeta({
	name: 'Lines',
	description: 'Equalizer-style bars bounce up and down in a wave sequence.',
	example: `<Lines count={8} barWidth={5} barHeight={40} gap={6} duration={0.9} color="#00bcd4" />`,
	props: [
		{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Color of the lines.' },
		{ name: 'count', type: 'number', default: '6', desc: 'Number of vertical bars to show.' },
		{ name: 'barWidth', type: 'number', default: '4', desc: 'Width of each line in pixels.' },
		{ name: 'barHeight', type: 'number', default: '30', desc: 'Height of each line in pixels.' },
		{ name: 'gap', type: 'number', default: '8', desc: 'Gap between lines in pixels.' },
		{ name: 'duration', type: 'number', default: '1', desc: 'Duration of one animation cycle in seconds.' },
		{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Whether to center the loader full screen.' },
		{ name: 'className', type: 'string', default: '', desc: 'Extra className(s) to apply to the wrapper.' },
	],
}, Lines)
