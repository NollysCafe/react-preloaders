import React from 'react'

import './Planets.scss'

export interface PlanetsProps {
	color?: string
	duration?: number
	fullScreen?: boolean
	className?: string
}

/**
 * Planet orbit animation (solar system style).
 */
export const Planets = ({ color = '#2D2D2D', duration = 12, fullScreen = false, className = '' }: PlanetsProps): React.ReactElement => {
	return (
		<div className={`planets ${className} ${fullScreen ? 'full-screen' : ''}`} style={{ color, '--orbit-duration': `${duration}s` } as React.CSSProperties}>
			<div className='orbit earth'>
				<div className='planet earth-planet' />
				<div className='orbit venus'>
					<div className='planet venus-planet' />
					<div className='orbit mercury'>
						<div className='planet mercury-planet' />
						<div className='sun' />
					</div>
				</div>
			</div>
		</div>
	)
}
