import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import wallet from '@/wallet.svg'
// import { ethers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import { async } from 'q'

const network = 'zkSyncMainnet'
const infuraId = '95e1350b6b94480db9d2aa96eb1caac4'
const contractAddress = '0xF1F70F838eF52CBCFf9E2f3f58E1397c6b72D4A8'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const abi = require('../../abi.json')

const ConnectBtn = ({
	setBalanceUI,
	setBlur,
	setZKL,
	setEth,
	zkl,
	eth,
	account,
	chain,
	openAccountModal,
	openChainModal,
	openConnectModal,
	authenticationStatus,
	mounted,
}) => {
	const ready = mounted && authenticationStatus !== 'loading'
	const connected =
		ready &&
		account &&
		chain &&
		(!authenticationStatus || authenticationStatus === 'authenticated')
	setBlur(!connected)
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { ethers } = require('ethers')

	const [web3Modal, setWeb3Modal] = useState(null)
	const [signer, setSigner] = useState(null)
	const [contract, setContract] = useState(null)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [fullfield, setFullfield] = useState(false)
	const [inject, setInject] = useState(false)

	useEffect(() => {
		const providerOptions = {
			walletconnect: {
				package: WalletConnectProvider,
				options: {
					infuraId,
				},
			},
		}
		const web3Modal = new Web3Modal({
			network,
			cacheProvider: true,
			providerOptions,
		})
		setWeb3Modal(web3Modal)
	}, [])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const value = localStorage.getItem('wagmi.wallet') || ''
			const v = localStorage.getItem('wagmi.metaMask.shimDisconnect') || ''
			const va = localStorage.getItem('rk-recent') || ''
			localStorage.setItem(
				'WEB3_CONNECT_CACHED_PROVIDER',
				JSON.stringify('injected')
			)
			if (value == '"metaMask"' || va == '["metaMask"]' || v == 'true') {
				// setInject(true)
			}
		}

		// if (inject == true) {
		// console.log(inject)
		// }
	}, [inject])

	useEffect(() => {
		getBalances()
	}, [web3Modal])

	const getBalances = async () => {
		try {
			const instance = await web3Modal?.connect?.()
			const provider = new ethers.providers.Web3Provider(instance)
			console.log(provider)
			provider
				.getBalance(contractAddress)
				.then(balance => {
					setBalanceUI(ethers.utils.formatEther(balance).slice(0, 4))
				})
				.catch(error => {
					console.error('Ошибка получения баланса:', error)
				})
			setBalanceUI(balance)
		} catch (e) {
			console.log(e)
		}
	}

	const buyTokens = async () => {
		try {
			const instance = await web3Modal?.connect?.()
			const provider = new ethers.providers.Web3Provider(instance)
			const signer = provider.getSigner()
			const contract = new ethers.Contract(contractAddress, abi, signer)
			const balance = await contract.getBalance(contractAddress)

			const value = ethers.utils.parseEther(eth + '') //eth
			const amount = zkl + '' // zkl
			const overrides = {
				value: value,
			}
			// const balance = await contract.balanceOf(contractAddress)
			// const balance = await contract.methods.balance().call()

			const tx = await contract.buyTokens(amount, overrides)
			await tx.wait()

			setZKL(null)
			setEth(null)

			setSuccess(true)
			setFullfield(true)
			setTimeout(() => {
				setSuccess(false)
				setFullfield(false)
			}, 1000)
		} catch (error) {
			console.error(error)
			setFullfield(true)
			setError(true)
			setTimeout(() => {
				setFullfield(false)
				setError(false)
			}, 1000)
		}
	}

	return (
		<>
			<div
				{...(!ready && {
					'aria-hidden': true,
					style: {
						opacity: 0,
						pointerEvents: 'none',
						userSelect: 'none',
					},
				})}
				className='w-full'
			>
				{(() => {
					if (!connected) {
						return (
							<button
								onClick={openConnectModal}
								className='flex w-full justify-center relative bg-gradient-to-r from-[#0038FF] via-purple-500 to-pink-500 py-[16px] rounded-lg text-xl font-medium shadow-[0_0_20px_#0066FF] mb-2'
							>
								<Image src={wallet} alt='wallet' className='mr-[8px]' />
								Connect Wallet
							</button>
						)
					}

					if (chain.unsupported) {
						return (
							<button
								onClick={openChainModal}
								type='button'
								className=' text-2xl text-center w-full flex justify-center'
							>
								<p className='border-b-4 border-dotted'>
									Wrong network. Switch to Era!
								</p>
							</button>
						)
					}

					return (
						<div className='flex flex-col gap-y-4'>
							<button
								onClick={buyTokens}
								className='flex w-full justify-center relative bg-gradient-to-r from-[#0038FF] via-purple-500 to-pink-500 py-[16px] rounded-lg text-xl font-medium shadow-[0_0_20px_#0066FF] mb-2 active:translate-y-[1px] hover:-translate-y-[1px] hover:duration-300 duration-300'
								style={
									success
										? { background: 'green' }
										: { background: '' } && error
										? { background: 'red' }
										: { background: '' }
								}
							>
								{fullfield ? '' : 'Buy'}
								{success ? 'Success' : ''}
								{error ? 'Error' : ''}
							</button>

							<div
								style={{ display: 'flex', gap: 12 }}
								className='w-full justify-center rounded-md text-black font-semibold py-2 text-lg'
							>
								<button
									onClick={openChainModal}
									type='button'
									className='flex items-center hover:scale-105 hover:duration-300 duration-300 active:scale-100 bg-slate-50 px-3 py-1 rounded-md'
								>
									{chain.hasIcon && (
										<div
											style={{
												background: chain.iconBackground,
												width: 12,
												height: 12,
												borderRadius: 999,
												overflow: 'hidden',
												marginRight: 4,
											}}
										>
											{chain.iconUrl && (
												<img
													alt={chain.name ?? 'Chain icon'}
													src={chain.iconUrl}
													style={{ width: 12, height: 12 }}
												/>
											)}
										</div>
									)}
									{chain.name}
								</button>

								<button
									onClick={openAccountModal}
									type='button'
									className='flex items-center hover:scale-105 hover:duration-300 duration-300 active:scale-100 bg-slate-50 px-3 py-1 rounded-md'
								>
									{account.ensAvatar ? (
										<Image
											src={account.ensAvatar ? account.ensAvatar : ''}
											alt=''
											className='rounded-full'
											width={20}
											height={20}
										/>
									) : null}
									{account.displayBalance}
									<p className='px-3 py-0.5 bg-slate-50 rounded-md ml-1 shadow-[inset_0_8px_15px_-10px_rgb(180,0,125)]'>
										{account.displayName}
									</p>
								</button>
							</div>
						</div>
					)
				})()}
			</div>
		</>
	)
}

export default ConnectBtn
