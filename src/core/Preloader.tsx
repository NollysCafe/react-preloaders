import React from 'react'

import './preloader.scss'

/**
 * Props for the main wrapper Preloader.
 */
export interface PreloaderProps {
	/**
	 * Main color passed to children (CSS `color`)
	 */
	color?: string
	/**
	 * Background behind the loader
	 * @example `#fff`, `rgba(0,0,0,0.5)`, `transparent`, `blur`
	 */
	background?: string
	/**
	 * Exit animation style
	 * @default 'fade'
	 */
	animation?: 'fade' | 'slide' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right'
	/**
	 * Time before automatically hiding the preloader (ms)
	 * @default 1300
	 */
	time?: number
	/**
	 * External loading control (e.g. `true` while data loads)
	 */
	customLoading?: boolean
	/**
	 * Preloader content (your animation)
	 */
	children?: React.ReactNode
	/**
	 * Additional class names
	 */
	className?: string
}

/**
 * Universal Preloader wrapper:
 * Can be used standalone or to wrap custom loaders.
 *
 * @example
 * <Preloader><Dots /></Preloader>
 */
export const Preloader = ({ color = '#2d2d2d', background = '#ffffff', animation = 'fade', time = 1300, customLoading, children, className = '' }: PreloaderProps): React.ReactElement => {
	const [visible, setVisible] = React.useState<boolean>(true)

	React.useEffect(() => {
		if (customLoading === undefined) {
			const timer = setTimeout(() => setVisible(false), time)
			return () => clearTimeout(timer)
		} else {
			setVisible(customLoading)
		}
	}, [customLoading, time])

	if (!visible) return <></>

	return (
		<div className={`preloader-wrapper ${visible ? `preloader-${animation}` : `preloader-${animation}-exit`} ${className}`} style={{ background: background === 'blur' ? 'rgba(255,255,255,0.6)' : background, color }}>
			{children ?? 'Loading...'}
		</div>
	)
}
