import React from 'react'

import './Square.scss'

export interface SquareProps {
	color?: string
	size?: number
	borderWidth?: number
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Rotating square with fill effect.
 */
export const Square = ({ color = '#2D2D2D', size = 30, borderWidth = 4, duration = 2, fullScreen = false, className = '' }: SquareProps): React.ReactElement => {
	return (
		<div className={`square ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--square-size': `${size}px`, '--square-border': `${borderWidth}px`, '--square-duration': `${duration}s` } as React.CSSProperties}>
			<div className='box'>
				<div className='fill' />
			</div>
		</div>
	)
}
