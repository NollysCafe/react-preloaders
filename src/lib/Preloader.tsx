import React from 'react'

import './preloader.scss'

export interface PreloaderProps {
	color?: string
	background?: string
	animation?: 'fade' | 'slide' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
	time?: number
	customLoading?: boolean
}

export const Preloader = ({ color = '#2d2d2d' }: PreloaderProps): React.ReactElement => <div className='preloader' style={{ color }}>Loading...</div>
