import type { ComponentType } from 'react'

export type PreloaderProp = {
	name: string
	type: string
	default: string
	desc: string
}

export type PreloaderMeta = {
	name: string
	description: string
	example: string
	props: PreloaderProp[]
	component: ComponentType<any>
}

export const definePreloaderMeta = (meta: Omit<PreloaderMeta, 'component'>, component: ComponentType<any>): PreloaderMeta => ({ ...meta, component })
