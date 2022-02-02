import Head from 'next/head'
import { Main } from '../components/main'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ghost Radio</title>
				<meta
					name='description'
					content='Listen to a 24/7 broadcast of ghosts from the Ghost of Frank Dukes NFT project (https://ghostofnft.io).'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Script
				strategy='beforeInteractive'
				src='https://code.jquery.com/jquery-1.11.3.min.js'
			/>
			<Script
				strategy='beforeInteractive'
				src='https://public.radio.co/playerapi/jquery.radiocoplayer.min.js'
			/>

			<Main></Main>

			<Script id='load-radio-player' strategy='lazyOnload'>
				{`
          $('.radioplayer').radiocoPlayer()
        `}
			</Script>

			<footer className={styles.footer}>
				<p>
					Audio from the{' '}
					<a href='https://ghostofnft.io'>Ghost of Frank Dukes NFT project</a>.
					&copy; 2022 Adam Feeney
				</p>
			</footer>
		</div>
	)
}
