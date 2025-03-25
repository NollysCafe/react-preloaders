import React from 'react'
import { definePreloaderMeta } from '../../utils/definePreloaderMeta'

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

export const rippleMeta = definePreloaderMeta({
	name: 'Ripple',
	description: 'Two concentric rings expand and fade like water ripples.',
	example: `<Ripple size={100} borderWidth={6} duration={2} />`,
	props: [
		{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Color of the ripple rings.' },
		{ name: 'size', type: 'number', default: '90', desc: 'Diameter of each ripple circle in pixels.' },
		{ name: 'borderWidth', type: 'number', default: '5', desc: 'Thickness of each ripple ring border' },
		{ name: 'duration', type: 'number', default: '1.5', desc: 'Duration of the ripple animation in seconds.' },
		{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Whether the loader fills the full screen.' },
		{ name: 'className', type: 'string', default: '', desc: 'Optional additional class names' },
	],
}, Ripple)
