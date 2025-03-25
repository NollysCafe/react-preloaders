import React from 'react'

import './Sugar.scss'

export interface SugarProps {
	color?: string
	size?: number
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Sugar preloader: bouncing dot with soft shadow.
 */
export const Sugar = ({ color = '#2D2D2D', size = 50, duration = 2.5, fullScreen = false, className = '' }: SugarProps): React.ReactElement => {
	return (
		<div className={`sugar ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--sugar-size': `${size}px`, '--sugar-duration': `${duration}s` } as React.CSSProperties}>
			<span className='dot-container'>
				<span className='dot' />
				<span className='shadow' />
			</span>
		</div>
	)
}
