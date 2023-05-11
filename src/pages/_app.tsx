import '@/styles/globals.css'
import { AppProps } from 'next/app'
<<<<<<< HEAD
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='font-GR bg-black text-white'>
			<Head>
				<title>zkLaucnh</title>
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
			</Head>
=======

export default function App({ Component, pageProps }: AppProps) {
	return (
<<<<<<< HEAD
		<div className='font-GR'>
>>>>>>> 0c23346 (presale add)
=======
		<div className='font-GR bg-black text-white'>
>>>>>>> e5ed28c (commit)
			<Component {...pageProps} />
		</div>
	)
}
