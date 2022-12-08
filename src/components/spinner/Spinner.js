const Spinner = () => {
	
	return(
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: '20px auto 0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			<circle cx="50" cy="50" r="21" strokeWidth="5" stroke="#9f0013" strokeDasharray="32.98672286269283 32.98672286269283" fill="none" strokeLinecap="round">
			<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.25s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
			</circle>
		</svg>
	)
}

export default Spinner;