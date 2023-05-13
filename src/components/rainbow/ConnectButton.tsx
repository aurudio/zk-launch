import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import React from 'react'
import wallet from '@/wallet.svg'

const ConnectBtn = () => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				// Note: If your app doesn't use authentication, you
				// can remove all 'authenticationStatus' checks
				const ready = mounted && authenticationStatus !== 'loading'
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus || authenticationStatus === 'authenticated')

				return (
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
									<button onClick={openChainModal} type='button'>
										Wrong network
									</button>
								)
							}

							return (
								<div className='flex flex-col gap-y-4'>
									<button
										// onClick={openConnectModal}
										className='flex w-full justify-center relative bg-gradient-to-r from-[#0038FF] via-purple-500 to-pink-500 py-[16px] rounded-lg text-xl font-medium shadow-[0_0_20px_#0066FF] mb-2'
									>
										<Image src={wallet} alt='wallet' className='mr-[8px]' />
										Buy
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
											<Image
												src='/arrow-right.svg'
												alt=''
												className='rounded-full'
												width={20}
												height={20}
											/>
											{account.displayBalance}
											<p className='px-3 py-0.5 bg-slate-50 rounded-md ml-1 shadow-[inset_0_5px_15px_rgb(150,0,125,.4)]'>
												{account.displayName}
											</p>
										</button>
									</div>
								</div>
							)
						})()}
					</div>
				)
			}}
		</ConnectButton.Custom>
	)
}

export default ConnectBtn
