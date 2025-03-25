import {
	Dots, Lines, Zoom, Square, Ripple,
	Sugar, Planets, Cube, Spinner3D, Tunnel
} from '@/'

export const docsMeta = {
	dots: {
		name: 'Dots',
		component: Dots,
		description: 'Bouncing dots in a sequence.',
		example: `<Dots color="#f0f" size={16} count={6} gap={12} duration={1} />`,
		props: [
			{ name: 'color', type: 'string', default: '#2D2D2D', desc: 'Color of the dots.' },
			{ name: 'size', type: 'number', default: '12', desc: 'Diameter of each dot (px).' },
			{ name: 'gap', type: 'number', default: '10', desc: 'Gap between dots (px).' },
			{ name: 'duration', type: 'number', default: '0.7', desc: 'Bounce animation duration (s).' },
			{ name: 'count', type: 'number', default: '4', desc: 'How many dots to display.' },
			{ name: 'fullScreen', type: 'boolean', default: 'false', desc: 'Take up full screen?' },
			{ name: 'className', type: 'string', default: "''", desc: 'Extra CSS class names.' }
		]
	},
} as const
