import React, { useState } from 'react'
import plus from '@/Union.svg'
import Image from 'next/image'
import minus from '@/Rectangle 7.svg'
import wallet from '@/wallet.svg'
import { statistic } from '../lending/TokenomicsSection'

const MainSection = () => {
	const [number, setNumber] = useState(0)
	return (
		<div className='mt-[120px] max-[678px]:mt-[50px] flex flex-col items-center mb-[17.5rem]'>
			<div className='flex flex-col items-center text-center mb-[101px]'>
				<h2 className='font-semibold md:text-[4rem] sm:text-[3rem] w-3/5 leading-[100%] mb-6 max-[647px]: text-[2.5rem] max-[647px]:w-4/5 max-[439px]:text-left max-[439px]:w-[90%] max-[900px]:w-[80%]'>
					Invest in the future of zero knowledge technology
				</h2>
				<p className='text-2xl w-[44%] mb-12 max-[712px]:text-xl max-[439px]:w-[90%] max-[439px]:text-left max-[900px]:w-[80%]'>
					zkLaunch offers a simple way to fundraise and get initial traction for
					new exciting projects
				</p>
				<div className='relative w-[360px] flex items-center justify-between mb-4'>
					<button
						className='absolute left-1.5  w-[40px] h-[40px] rounded-[6px] bg-[#FFFFFF1A] flex justify-center items-center'
						onClick={() => setNumber(number - 1)}
					>
						<Image src={minus} alt='minus' />
					</button>
					<input
						className='bg-black border border-[#FFFFFF1A] w-full h-[52px]  rounded-[8px] text-center'
						type='number'
						onChange={(e: any) => setNumber(+e.target.value)}
						value={number}
					/>
					<button
						className='absolute right-1.5  w-[40px] h-[40px] rounded-[6px] bg-[#FFFFFF1A] flex justify-center items-center'
						onClick={() => setNumber(number + 1)}
					>
						<Image src={plus} alt='plus' />
					</button>
				</div>
				<button className='flex w-[360px] justify-center bg-gradient-to-r from-[#0038FF] via-purple-500 to-pink-500 py-[16px] rounded-lg text-xl font-medium shadow-[0_0_20px_#0066FF] mb-2'>
					<Image src={wallet} alt='wallet' className='mr-[8px]' />
					Connect Wallet
				</button>
				<p>
					Pre-Sale Price: <span className='font-semibold'>$0.05</span>
				</p>
			</div>
			<div className='w-[80%]  border border-[#0066FF] rounded-2xl py-[60px] backdrop-blur-[10px] flex flex-col items-center relative'>
				<h3 className='font-extrabold text-[32px] mb-[37px] max-[600px]:text-[24px]'>
					<span className='text-[#0066FF]'>513</span>/1000 ETH
				</h3>
				<progress className='w-[80%] mb-3' value={number} max={1000} />
				<div className='flex justify-between w-[75%] mb-20 max-[604px]:mb-8'>
					<p className='text-[22px] max-[539px]:text-base'>Start</p>
					<div className='text-[22px] max-[539px]:text-base'>
						<p className='text-[#0066FF]'>500 ETH</p>
						<p>Soft Cap</p>
					</div>
					<div className='text-[22px] max-[539px]:text-base'>
						<p className='text-[#0066FF]'>1000 ETH</p>
						<p>Hard Cap</p>
					</div>
				</div>
				<div className='flex w-[90%] justify-between flex-wrap max-[747px]:gap-20 max-[900px]:gap-24 max-[524px]:gap-7 max-[747px]:justify-center max-[900px]:w-[80%]'>
					{statistic.map(item => (
						<>
							<div className='flex justify-center max-[524px]:w-28  max-[900px]:w-40 w-36 flex-col max-[631px]:w-28 '>
								<h5 className='text-[22px] max-[747px]:text-3xl max-[631px]:text-[1.2rem] max-[524px]:text-base max-[900px]:text-[28px]'>
									{item.desc}
								</h5>
								<h6 className='text-[#0066FF] text-[32px] font-bold max-[631px]:text-[1.3rem]'>
									{item.title}
								</h6>
							</div>
							<hr className='h-[53px] last:hidden max-[900px]:even:hidden border-2  border-[#0166FF] m-auto' />
						</>
					))}
				</div>
				<div className='absolute top-50 lg:right-36 flex items-center right-20 justify-center gap-x-2 bg-[#FFFFFF1A] rounded-lg px-2 py-1 max-[704px]:right-[50px] [600px]:right-[40px] max-[475px]:right-[30px] max-[439px]:hidden'>
					<div className='w-[12px] h-[12px] rounded-full bg-[#14FF00] max-[539px]:w-[8px] max-[539px]:h-[8px]'></div>
					<p className='max-[539px]:text-[10px]'>LIVE</p>
				</div>
			</div>
		</div>
	)
}

export default MainSection
