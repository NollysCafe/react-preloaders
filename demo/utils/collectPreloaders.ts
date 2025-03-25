import { dotsMeta } from '@/components/Dots/Dots'
import { linesMeta } from '@/components/Lines/Lines'
import { zoomMeta } from '@/components/Zoom/Zoom'
import { squareMeta } from '@/components/Square/Square'
import { rippleMeta } from '@/components/Ripple/Ripple'
import { sugarMeta } from '@/components/Sugar/Sugar'
import { planetsMeta } from '@/components/Planets/Planets'
import { cubeMeta } from '@/components/Cube/Cube'
import { spinner3DMeta } from '@/components/Spinner3D/Spinner3D'
import { tunnelMeta } from '@/components/Tunnel/Tunnel'

export const preloaders = {
	dots: dotsMeta,
	lines: linesMeta,
	zoom: zoomMeta,
	square: squareMeta,
	ripple: rippleMeta,
	sugar: sugarMeta,
	planets: planetsMeta,
	cube: cubeMeta,
	spinner3d: spinner3DMeta,
	tunnel: tunnelMeta,
} as { [key: string]: any }
