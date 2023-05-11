import '@/styles/globals.css'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='font-GR'>
			<Component {...pageProps} />
		</div>
	)
}
