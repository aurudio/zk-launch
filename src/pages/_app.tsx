import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='font-GR bg-black text-white'>
			<Head>
				<title>zkLaucnh</title>
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</div>
	)
}
