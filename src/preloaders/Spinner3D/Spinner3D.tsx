import React from 'react'

import './Spinner3D.scss'

export interface Spinner3DProps {
	color?: string
	size?: number
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Spinner3D: a rotating disc (coin/CD) in 3D space.
 */
export const Spinner3D = ({ color = '#2D2D2D', size = 60, duration = 1.5, fullScreen = false, className = '' }: Spinner3DProps): React.ReactElement => {
	return (
		<div className={`spinner3d ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--spinner-size': `${size}px`, '--spinner-duration': `${duration}s` } as React.CSSProperties}>
			<div className='disc' />
		</div>
	)
}
