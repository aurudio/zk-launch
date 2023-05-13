import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Script src='https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js' />
				<Script src='https://cdn.jsdelivr.net/npm/ethers@5.0.5/dist/ethers.min.js'></Script>
				<Script src='https://unpkg.com/web3modal@0.10.0/dist/web3modal.min.js' />
				<Script src='https://unpkg.com/@walletconnect/web3-provider@1.7.3/dist/web3-provider.min.js' />
				<Script src='https://unpkg.com/rainbow-ui-kit@1.0.0-beta.5/dist/rainbow.min.js' />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
