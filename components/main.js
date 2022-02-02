import Image from 'next/image'
import { Player } from './player'
import styles from '../styles/Home.module.css'

export function Main() {
	return (
		<main className={styles.main}>
			<h1
				style={{
					fontWeight: 'normal',
					textTransform: 'uppercase',
					letterSpacing: '.2em',
				}}
			>
				Ghost Radio
			</h1>
			<Image
				src='/ghost.png'
				alt='Ghost of Frank Dukes ghost icon'
				width={350 / 2}
				height={350 / 2}
			></Image>
			<Player></Player>
		</main>
	)
}
