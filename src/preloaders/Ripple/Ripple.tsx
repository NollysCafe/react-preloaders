import React from 'react'
import './Ripple.scss'

export interface RippleProps {
	color?: string
	size?: number
	borderWidth?: number
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Ripple circle animation.
 */
export const Ripple = ({ color = '#2D2D2D', size = 90, borderWidth = 5, duration = 1.5, fullScreen = false, className = '' }: RippleProps): React.ReactElement => {
	return (
		<div className={`ripple ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--ripple-size': `${size}px`, '--ripple-border': `${borderWidth}px`, '--ripple-duration': `${duration}s` } as React.CSSProperties}>
			<div className='circle' />
			<div className='circle' />
		</div>
	)
}
