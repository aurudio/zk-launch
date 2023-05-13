import '@/styles/globals.css'
import { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'
import {
	RainbowKitProvider,
	getDefaultWallets,
	connectorsForWallets,
	darkTheme,
	Theme,
} from '@rainbow-me/rainbowkit'
import {
	argentWallet,
	trustWallet,
	ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, zkSync, goerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import HeadMeta from '@/components/Head/Head'
import merge from 'lodash.merge'

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[
		mainnet,
		zkSync,
		...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
	],
	[publicProvider()]
)

const projectId = 'YOUR_PROJECT_ID'

const { wallets } = getDefaultWallets({
	appName: 'RainbowKit demo',
	projectId,
	chains,
})

const demoAppInfo = {
	appName: 'Rainbowkit Demo',
}

const connectors = connectorsForWallets([
	...wallets,
	{
		groupName: 'Other',
		wallets: [
			argentWallet({ projectId, chains }),
			trustWallet({ projectId, chains }),
			ledgerWallet({ projectId, chains }),
		],
	},
])

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
})

const myTheme = merge(darkTheme(), {
	colors: {
		accentColor: '#07296d',
	},
} as Theme)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='font-GR'>
			<HeadMeta />
			<WagmiConfig config={wagmiConfig}>
				<RainbowKitProvider
					theme={myTheme}
					appInfo={demoAppInfo}
					chains={chains}
				>
					<Component {...pageProps} />
				</RainbowKitProvider>
			</WagmiConfig>
		</div>
	)
}
