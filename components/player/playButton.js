export const PlayButton = ({ onClick, muted }) => (
	<button
		onClick={onClick}
		style={{
			background: 'none',
			color: 'black',
			padding: '.4em .8em',
			fontSize: '1em',
			fontFamily: 'sans-serif',
			fontStyle: 'italic',
			letterSpacing: '.03em',
			border: 'none',
		}}
		className={`button button--play ${!muted && 'button--active'}`}
	>
		<div className='button__shape button__shape--one'></div>
		<div className='button__shape button__shape--two'></div>
	</button>
)
