import React, { useState, useEffect } from 'react'
import { statistic } from '../lending/TokenomicsSection'
import ConnectBtn from '../rainbow/ConnectButton'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const MainSection = () => {
	const [eth, setEth] = useState('')
	const [ZKL, setZKL] = useState('')
	const [usd, setUsd] = useState(null)
	const [blur, setBlur] = useState(true)

	function handleConvert(value) {
		const usd = value * 1808.91
		const convert = usd.toFixed(2)

		setUsd(convert)
	}

	function convertZKLtoETH(zklAmount) {
		if (!zklAmount) {
			setEth(null)
		}
		const ethRate = 0.000055
		const ethAmount = zklAmount * ethRate
		return ethAmount
	}

	function convertETHtoZKL(ethAmount) {
		if (!ethAmount) {
			setZKL(null)
		}
		const zklRate = 18181.82
		const zklAmount = ethAmount * zklRate
		return zklAmount
	}

	function handleEthChange(eth) {
		if (isNaN(eth)) {
			setEth(null)
			setZKL(null)
		} else {
			const zkl = convertETHtoZKL(eth)
			setEth(eth)
			setZKL(Math.floor(zkl))
		}
	}

	function handleZklChange(zkl) {
		if (isNaN(zkl)) {
			setEth(null)
			setZKL(null)
		} else {
			const eth = convertZKLtoETH(zkl)
			setZKL(Math.floor(zkl))
			setEth(eth)
		}
	}

	useEffect(() => {
		if (!ZKL) {
			setEth(null)
			setZKL(null)
		}
		if (!eth) {
			setEth(null)
			setZKL(null)
		}
	}, [ZKL, eth])

	const [balanceUI, setBalanceUI] = useState(0)
	console.log(balanceUI)

	return (
		<div className='mt-[120px] max-[678px]:mt-[50px] flex flex-col items-center mb-[10rem] max-[893px]:mb-[6rem]'>
			<div className='flex max-w-7xl px-5 mb-[7.875rem] w-full justify-between max-[1150px]:flex-col items-center gap-y-8'>
				<div className='flex flex-col gap-y-6 w-[38rem] max-[640px]:w-full'>
					<h1 className='text-[4rem] min-[500px]:hidden max-[1150px]:text-[48px] font-semibold leading-[4rem]'>
						<span className='text-[#0870FF]'>Invest</span> in the future of{' '}
						<span className='text-[#0870FF]'>ZK</span> technology.
					</h1>
					<h1 className='text-[4rem] max-[500px]:hidden max-[1150px]:text-[48px] font-semibold leading-[4rem]'>
						<span className='text-[#0870FF]'>Invest in the future</span> <br />
						of Zero Knowledge technology.
					</h1>
					<p className='font-normal text-2xl max-[1150px]:text-[22px] leading-8'>
						zkLaunch offers a simple way to fundraise and get initial traction
						for new exciting projects.
					</p>
				</div>
				<div className='flex relative flex-col min-[1150px]:py-8 max-[1150px]:bg-transparent max-[1150px]:w-full min-[1150px]:px-6 min-[1150px]:border border-[#0870FF] rounded-xl bg-black'>
					{/* <div
						className={`absolute z-[1] ${
							!blur ? 'hidden' : ''
						} top-0 left-0 backdrop-blur-[4px] rounded-xl h-full w-full`}
					></div> */}
					<div className='flex justify-between mb-6 max-[1150px]:hidden'>
						<h4 className='font-bold text-[1.75rem]'>Buy $ZKL</h4>
						<div className=' h-[30px]  flex items-center  justify-center gap-x-2 bg-[#FFFFFF1A] rounded-lg px-2 py-1 max-[850px]:hidden'>
							<div className='w-[12px] h-[12px] rounded-full z-0 live-ind bg-[#14FF00] max-[539px]:w-[8px] max-[539px]:h-[8px]'></div>
							<p className='max-[539px]:text-[10px]'>LIVE</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 items-center '>
						<div className='flex flex-col gap-y-4 max-[1150px]:w-full'>
							<div className='flex min-[1150px]:min-w-[492px] flex-col border border-[#0870FF] rounded-lg py-3 pl-4 pr-6'>
								<div className='max-[1150px]:hidden flex justify-between flex-row'>
									<p className='font-bold '>You Pay</p>

									{/* <p className='font-bold'>
										Balance:{' '}
										<span className='text-[#0870FF]'>
											{user?.displayBalance}
										</span>
									</p> */}
								</div>
								<div>
									<div className=' flex justify-between items-start'>
										<input
											maxLength={8}
											value={eth}
											placeholder='0 ETH'
											onChange={e => {
												const value = e.target.value.replace(
													/[^0-9.]|(\.(?=[^.]*\.))/g,
													''
												)
												if (value[0] === '.') {
													setEth(`0${value}`)
													handleEthChange(`0${value}`)
													handleConvert(`0${value}`)
												} else {
													setEth(value)
													handleEthChange(value)
													handleConvert(value)
												}

												if (e.target.value === '') {
													handleConvert(0)
													setEth('')
												}
											}}
											type='text'
											className='w-[13.125rem] mb-[7px] pl-2 rounded-[0.25rem] py-[0.625rem] bg-transparent text-4xl font-bold placeholder:text-[#4C4C5A] text-[#4C4C5A]'
										/>
										{/* <button
											onClick={() => setEth()}
											className='bg-[#0870FF] max-[1150px]:hidden font-medium mt-2 py-[8.5px] rounded-[0.25rem] px-3'
										>
											MAX
										</button> */}
									</div>
									<p className='text-lg font-medium text-[#0870FF]'>
										$ {usd === null ? 0 : usd}
									</p>
								</div>
								{/* <p className='min-[1150px]:hidden text-[#0870FF] font-medium'>
									{ZKL} ZKL
								</p> */}
							</div>
							<div className='flex flex-col border min-[1150px]:min-w-[492px] border-[#0870FF] rounded-lg py-3 pl-4 pr-6 '>
								<div className='max-[1150px]:hidden flex justify-between flex-row'>
									<p className='font-bold '>You Receive</p>

									{/* <p className='font-bold'>
										Balance:{' '}
										<span className='text-[#0870FF]'>
											{ZKL === '' ? 0 : 0}{' '}
										</span>
										$ZKL
									</p> */}
								</div>
								<div className=''>
									<input
										maxLength={10}
										value={ZKL}
										placeholder='0 ZKL'
										onChange={e => {
											const value = e.target.value.replace(
												/[^0-9.]|(\.(?=[^.]*\.))/g,
												''
											)

											if (value[0] === '.') {
												setZKL(`0${value}`)
												handleZklChange(`0${value}`)
											} else {
												handleZklChange(value)
												setZKL(value)
											}

											if (e.target.value === '') {
												handleZklChange('')
												setZKL('')
											}
										}}
										type='text'
										className='w-[13.125rem] mb-[7px] pl-2 rounded-[0.25rem] py-[0.625rem] bg-transparent text-4xl font-bold placeholder:text-[#4C4C5A] text-[#4C4C5A]'
									/>
									<p className='text-lg font-medium'>1 ZKL = $0.1</p>
								</div>
								{/* <p className='min-[1150px]:hidden text-[#0870FF] font-medium'>
									{ZKL} ZKL
								</p> */}
							</div>
						</div>
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
								return (
									<ConnectBtn
										eth={eth}
										zkl={ZKL}
										account={account}
										chain={chain}
										openAccountModal={openAccountModal}
										openChainModal={openChainModal}
										openConnectModal={openConnectModal}
										authenticationStatus={authenticationStatus}
										mounted={mounted}
										setEth={setEth}
										setZKL={setZKL}
										setBlur={setBlur}
										setBalanceUI={setBalanceUI}
									/>
								)
							}}
						</ConnectButton.Custom>
					</div>
				</div>
			</div>
			<div
				className={`w-[80%] max-[439px]:w-[90%] border border-[#0066FF] rounded-2xl py-[60px] backdrop-blur-[10px] flex flex-col items-center relative max-w-[924px] max-[510px]:py-[42px]`}
			>
				<div className='flex flex-col w-full px-[118px] max-[900px]:px-[70px] max-[510px]:p-[20px]'>
					<div className='flex w-full justify-between max-[850px]:justify-center'>
						<div className='max-[850px]:hidden'></div>
						<h3 className='font-bold text-[32px] mb-[37px] max-[600px]:text-[28px] ml-11 max-[850px]:ml-0 max-[510px]:mb-[21px]'>
							<span className='text-[#0066FF] mr-2'>{balanceUI}</span>/ 400 ETH
						</h3>
						<div className=' h-[30px]  flex items-center  justify-center gap-x-2 bg-[#FFFFFF1A] rounded-lg px-2 py-1 max-[850px]:hidden'>
							<div className='w-[12px] h-[12px] rounded-full z-0 live-ind bg-[#14FF00] max-[539px]:w-[8px] max-[539px]:h-[8px]'></div>
							<p className='max-[539px]:text-[10px]'>LIVE</p>
						</div>
					</div>
					<progress className='w-full mb-3' value={balanceUI} max={800} />
					<div className='flex justify-between w-full mb-20 max-[510px]:mb-6 max-[604px]:mb-8'>
						<p className='text-[22px] max-[539px]:text-base ml-[5%] max-[850px]:text-[19px] max-[510px]:ml-0 max-[510px]:text-[18px]'>
							Start
						</p>
						<div className='text-[22px] max-[539px]:text-base max-[850px]:text-[19px] max-[510px]:text-[20px] ml-[1.2rem] max-[900px]:ml-[1.4rem] max-[510px]:ml-[3rem]'>
							<p className='text-[#0066FF] text-center text-[20px] font-semibold '>
								400 ETH
							</p>
							<p className='text-[18px] '>Soft Cap</p>
						</div>
						<div className='text-[22px] max-[539px]:text-base max-[850px]:text-[19px] max-[510px]:text-[20px] text-center'>
							<p className='text-[#0066FF] font-semibold text-center '>
								800 ETH
							</p>
							<p className=''>Hard Cap</p>
						</div>
					</div>
				</div>

				<div className='flex w-[90%] justify-between flex-wrap max-[900px]:gap-x-20 max-[811px]:gap-x-10 max-[900px]:gap-y-10 max-[524px]:gap-7  max-[900px]:w-[70%]  static-items max-[668px]:gap-x-0 max-[668px]:gap-y-5 max-[510px]:w-[90%] max-[391px]:gap-x-3 max-[354px]:gap-x-1'>
					{statistic.map(item => (
						<>
							<div className='flex justify-center max-[524px]:w-28 w-36 flex-col  items-center max-[668px]:w-30'>
								<h5 className='text-[22px]  max-[631px]:text-[1.2rem] max-[524px]:text-base max-[990px]:text-[18px] max-[900px]:text-[22px] max-[668px]:text-[18px] '>
									{item.desc}
								</h5>
								<h6 className='text-[#0066FF] text-[32px] font-bold max-[631px]:text-[1.3rem] max-[990px]:text-[1.3rem]'>
									{item.title}
								</h6>
							</div>
							<hr className='h-[53px] max-[900px]:first:hidden last:hidden  border-2  border-[#0166FF] m-auto max-[510px]:border-1' />
						</>
					))}
				</div>
			</div>
		</div>
	)
}

export default MainSection
