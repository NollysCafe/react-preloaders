export const getRandomColor = (): string => {
	const colors = ['#f0f', '#0ff', 'lime', 'hotpink', '#61dafb', '#f39c12', 'goldenrod', '#00bcd4', 'violet']
	return colors[Math.floor(Math.random() * colors.length)]
}
