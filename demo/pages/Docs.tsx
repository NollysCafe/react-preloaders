import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { preloaders } from '../utils/collectPreloaders'
import { getRandomColor } from '../utils/colors'

import '../styles/pages/docs.scss'

// Components
import { Preloader } from '@/'

export default function Docs(): React.ReactElement {
	const { component } = useParams()
	const navigate = useNavigate()

	const [search, setSearch] = React.useState('')

	if (!component) {
		return (
			<main className='page docs'>
				<h1>All Preloaders</h1>
				<input
					className='search'
					placeholder='Search a loader...'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>

				<div className='grid'>
					{Object.entries(preloaders).filter(([key]) => key.toLowerCase().includes(search.toLowerCase())).map(([key, { name, component: PreloaderComponent }]) => (
						<div className='card' key={key} onClick={() => navigate(`/docs/${key}`)}>
							<h3>{name}</h3>
							<div className='preview'>
								<PreloaderComponent color={getRandomColor()} />
							</div>
						</div>
					))}
				</div>
			</main>
		)
	}

	if (!preloaders[component.toLowerCase()]) {
		return (
			<main className='page docs'>
				<h1>Component Not Found</h1>
				<p>We couldn't find a preloader named "{component}" 😢</p>
			</main>
		)
	}

	const { name, description, component: PreloaderComponent, props, example } = preloaders[component.toLowerCase()]
	const filteredProps = props.filter((prop: any) => prop.name !== 'className').filter((prop: any) => prop.name !== 'fullScreen')

	const [values, setValues] = React.useState<{ [key: string]: any }>(() => {
		const object: Record<string, any> = {}
		filteredProps.forEach((prop: any) => {
			if (prop.type === 'number') object[prop.name] = Number(prop.default)
			else if (prop.type === 'boolean') object[prop.name] = prop.default === 'true'
			else object[prop.name] = prop.default
		})
		return object
	})
	const handleChange = (name: string, value: any) => setValues(prev => ({ ...prev, [name]: value }))

	const [showFullscreen, setShowFullscreen] = React.useState<boolean>(false)
	const [fullscreenValues, setFullscreenValues] = React.useState<{ [key: string]: any }>({
		time: 2000,
		background: '#000000',
		animation: 'fade',
		useBlur: true
	})
	const handleFChange = (name: string, value: any) => setFullscreenValues(prev => ({ ...prev, [name]: value }))
	const handleFullscreen = () => {
		setShowFullscreen(true)
		setTimeout(() => setShowFullscreen(false), fullscreenValues['time'])
	}

	return (
		<main className='page docs'>
			<h1>{name}</h1>
			<p className='description'>{description}</p>

			<div className='live-preview'>
				<PreloaderComponent {...values} />
			</div>

			<div className='prop-controls'>
				<h3>Props</h3>
				<div className='inputs'>
					{filteredProps.map(({ name, type }: { name: string; type: string | number | boolean }) => (
						<div className='prop-input' key={name}>
							<label>{name}</label>
							{name === 'color'
								? <input type='color' value={values[name]} onChange={e => handleChange(name, e.target.value)} />
								: type === 'boolean'
									? <input type='checkbox' checked={values[name]} onChange={e => handleChange(name, e.target.checked)} />
									: <input type={type === 'number' ? 'number' : 'text'} value={values[name]} onChange={e => handleChange(name, type === 'number' ? +e.target.value : e.target.value)} step={name === 'duration' ? 0.1 : undefined} />
							}
						</div>
					))}
				</div>
			</div>

			<div className='preview-controls'>
				<h3>Fullscreen Preview</h3>
				<div className='inputs'>
					<div className='preview-input'>
						<label>time</label>
						<input type='number' value={fullscreenValues['time']} onChange={e => handleFChange('time', +e.target.value)} step={1} />
					</div>
					<div className='preview-input'>
						<label>use blur ?</label>
						<input type='checkbox' checked={fullscreenValues['useBlur']} onChange={e => handleFChange('useBlur', e.target.checked)} />
					</div>
					{!fullscreenValues['useBlur'] && (
						<div className='preview-input'>
							<label>background</label>
							<input type='color' value={fullscreenValues['background']} onChange={e => handleFChange('background', e.target.value)} />
						</div>
					)}
					<div className='preview-input'>
						<label>animation</label>
						<select value={fullscreenValues['animation']} onChange={e => handleFChange('animation', e.target.value)}>
							<option value='fade'>fade</option>
							<option value='slide'>slide</option>
							<option value='slide-up'>slide-up</option>
							<option value='slide-down'>slide-down</option>
							<option value='slide-left'>slide-left</option>
							<option value='slide-right'>slide-right</option>
							<option value='zoom'>zoom</option>
							<option value='none'>none</option>
						</select>
					</div>
				</div>
				<button className='preview-btn' onClick={handleFullscreen}>Preview Fullscreen</button>
			</div>
			{showFullscreen && (
				<Preloader customLoading={showFullscreen} time={fullscreenValues['time']} animation={fullscreenValues['animation']} background={fullscreenValues['useBlur'] ? 'blur' : fullscreenValues['background']}>
					<PreloaderComponent {...values} fullScreen />
				</Preloader>
			)}

			<h2>Props</h2>
			<table className='props-table'>
				<thead>
					<tr>
						<th>Prop</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{props.map(({ name, type, default: def, desc }: any) => (
						<tr key={name}>
							<td><code>{name}</code></td>
							<td><code>{type}</code></td>
							<td><code>{def}</code></td>
							<td>{desc}</td>
						</tr>
					))}
				</tbody>
			</table>

			<h2>Usage</h2>
			<pre className='example'>
				<code>{example}</code>
			</pre>
		</main>
	)
}
