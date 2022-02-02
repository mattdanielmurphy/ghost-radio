import { useEffect, useState } from 'react'

import Loader from '../../components/loader'
import { PlayButton } from './playButton'
import { RadioCoPlayer } from './radioCoPlayer'

export function Player() {
	const [muted, setMuted] = useState(true)
	const [loaded, setLoaded] = useState(false)
	const [waitingForLoad, setWaitingForLoad] = useState(false)
	const [playing, setPlaying] = useState(false)
	useEffect(() => {
		const audio = document.querySelector('audio')
		if (audio) {
			audio.addEventListener('playing', () => {
				console.log('loaded')
				setLoaded(true)
				if (!muted) setPlaying(true)
				setWaitingForLoad(false)
				if (waitingForLoad) {
					setPlaying(true)
				}
			})
		}
		return () => {}
	}, [muted, waitingForLoad])
	return (
		<div>
			<div style={{ marginTop: '1.3em', height: 50, display: 'flex' }}>
				{waitingForLoad && !playing ? (
					<Loader></Loader>
				) : (
					<PlayButton
						muted={muted}
						onClick={(e) => {
							console.log('clicked play button')
							const audio = document.querySelector('#radioco-radioplayer')
							const muteState = !muted
							audio.muted = muteState
							setMuted(muteState)
							if (!muteState && !loaded) setWaitingForLoad(true)
						}}
					></PlayButton>
				)}
			</div>
			<RadioCoPlayer></RadioCoPlayer>
		</div>
	)
}
