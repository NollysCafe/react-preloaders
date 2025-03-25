import React from 'react'
import './Cube.scss'

export interface CubeProps {
	color?: string
	size?: number
	borderWidth?: number
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Rotating cube with fill effect.
 */
export const Cube = ({ color = '#2D2D2D', size = 30, borderWidth = 4, duration = 2, fullScreen = false, className = '' }: CubeProps): React.ReactElement => {
	return (
		<div className={`cube ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--cube-size': `${size}px`, '--cube-border': `${borderWidth}px`, '--cube-duration': `${duration}s` } as React.CSSProperties}>
			<div className='box'>
				<div className='fill' />
			</div>
		</div>
	)
}
