import React from 'react'

import './Cube.scss'

export interface CubeProps {
	color?: string
	size?: number
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Real 3D rotating cube preloader using perspective and transforms.
 */
export const Cube = ({ color = '#2D2D2D', size = 64, duration = 3, fullScreen = false, className = '' }: CubeProps): React.ReactElement => {
	return (
		<div className={`cube ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ '--cube-size': `${size}px`, '--cube-color': color, '--cube-duration': `${duration}s` } as React.CSSProperties}>
			<div className='scene'>
				<div className='cube'>
					<div className='face front' />
					<div className='face back' />
					<div className='face right' />
					<div className='face left' />
					<div className='face top' />
					<div className='face bottom' />
				</div>
			</div>
		</div>
	)
}
