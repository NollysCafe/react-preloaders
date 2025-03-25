import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { docsMeta } from '../data/docs'

import '../styles/pages/docs.scss'

const allKeys = Object.keys(docsMeta)

export default function Docs(): React.ReactElement {
	const { component } = useParams()
	const navigate = useNavigate()
	const [search, setSearch] = React.useState('')

	if (!component) {
		const filtered = allKeys.filter(k => k.includes(search.toLowerCase()))

		return (
			<main className='page docs'>
				<h1>All Preloaders</h1>
				<input className='search' placeholder='Search a loader...' value={search} onChange={e => setSearch(e.target.value)} />

				<div className='grid'>
					{filtered.map(key => {
						const { name, component: Comp } = docsMeta[key]
						return (
							<div className='card' key={key} onClick={() => navigate(`/docs/${key}`)}>
								<h3>{name}</h3>
								<div className='preview'>
									<Comp />
								</div>
							</div>
						)
					})}
				</div>
			</main>
		)
	}

	const meta = docsMeta[component.toLowerCase()]
	if (!meta) {
		return (
			<main className='page docs'>
				<h1>Component Not Found</h1>
				<p>We couldn't find a preloader named "{component}" 😢</p>
			</main>
		)
	}

	const { name, description, component: PreloaderComponent, props, example } = meta

	return (
		<main className='page docs'>
			<h1>{name}</h1>
			<p className='description'>{description}</p>

			<div className='live-preview'>
				<PreloaderComponent />
			</div>

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
					{props.map(({ name, type, default: def, desc }) => (
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
