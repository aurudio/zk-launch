import React, { useState } from 'react'
import plus from '@/Union.svg'
import Image from 'next/image'
import minus from '@/Rectangle 7.svg'
import wallet from '@/wallet.svg'
import { statistic } from '../lending/TokenomicsSection'

const MainSection = () => {
	const [number, setNumber] = useState(0)
	return (
		<div className='mt-[120px] max-[678px]:mt-[50px] flex flex-col items-center mb-[10rem] max-[893px]:mb-[6rem] max-[390px]:p-5'>
			<div className='flex flex-col items-center text-center mb-[101px]'>
				<h2 className='font-semibold md:text-[4rem] sm:text-[3rem] w-3/5 leading-[100%] mb-6 max-[647px]:text-[2.5rem] max-[647px]:w-4/5 max-[439px]:text-left max-[439px]:w-[90%] max-[900px]:w-[80%] max-[500px]:mt-[32px] max-[600px]:leading-[52px]'>
					Invest in the future of zero knowledge technology
				</h2>
				<p className='text-2xl w-[44%] mb-12 max-[712px]:text-xl max-[439px]:w-[90%] max-[439px]:text-left max-[900px]:w-[80%] max-[445px]:mb-[23px] text-[#F3F5F8]'>
					zkLaunch offers a simple way to fundraise and get initial traction for
					new exciting projects
				</p>
				<div className='relative w-[360px] flex items-center justify-between mb-4 max-[390px]:w-[310px]'>
					<button
						className='absolute left-1.5  w-[40px] h-[40px] rounded-[6px] bg-[#FFFFFF1A] flex justify-center items-center'
						onClick={() => setNumber(number - 1)}
					>
						<Image src={minus} alt='minus' />
					</button>
					<input
						className='bg-black border border-[#FFFFFF1A] w-full h-[52px]  rounded-[8px] text-center text-2xl'
						type='text'
						onChange={e => {
							const value = e.target.value.replace(/\D/g, '')

							setNumber(+value)
						}}
						value={number}
					/>
					<button
						className='absolute right-1.5  w-[40px] h-[40px] rounded-[6px] bg-[#FFFFFF1A] flex justify-center items-center'
						onClick={() => setNumber(number + 1)}
					>
						<Image src={plus} alt='plus' />
					</button>
				</div>
				<button className='flex w-[360px] justify-center bg-gradient-to-r from-[#0038FF] via-purple-500 to-pink-500 py-[16px] rounded-lg text-xl font-medium shadow-[0_0_20px_#0066FF] mb-2 max-[390px]:w-[310px]'>
					<Image src={wallet} alt='wallet' className='mr-[8px]' />
					Connect Wallet
				</button>
				<p className='text-sm'>
					Pre-Sale Price: <span className='font-semibold'>$0.05</span>
				</p>
			</div>
			<div className='w-[80%] max-[439px]:w-[90%] border border-[#0066FF] rounded-2xl py-[60px]  backdrop-blur-[10px] flex flex-col items-center relative max-w-[924px] max-[510px]:py-[42px]'>
				<div className='flex flex-col w-full px-[118px] max-[900px]:px-[70px] max-[510px]:p-[20px]'>
					<div className='flex w-full justify-between max-[850px]:justify-center'>
						<div className='max-[850px]:hidden'></div>
						<h3 className='font-bold text-[32px] mb-[37px] max-[600px]:text-[28px] ml-11 max-[850px]:ml-0 max-[510px]:mb-[21px]'>
							<span className='text-[#0066FF] mr-2'>513</span>/ 1000 ETH
						</h3>
						<div className=' h-[30px]  flex items-center  justify-center gap-x-2 bg-[#FFFFFF1A] rounded-lg px-2 py-1 max-[850px]:hidden'>
							<div className='w-[12px] h-[12px] rounded-full bg-[#14FF00] max-[539px]:w-[8px] max-[539px]:h-[8px]'></div>
							<p className='max-[539px]:text-[10px]'>LIVE</p>
						</div>
					</div>
					<progress className='w-full mb-3' value={number} max={1000} />
					<div className='flex justify-between w-full mb-20 max-[510px]:mb-6 max-[604px]:mb-8'>
						<p className='text-[22px] max-[539px]:text-base ml-[5%] max-[850px]:text-[19px] max-[510px]:ml-0 max-[510px]:text-[18px]'>
							Start
						</p>
						<div className='text-[22px] max-[539px]:text-base max-[850px]:text-[19px] max-[510px]:text-[20px]'>
							<p className='text-[#0066FF] font-semibold '>500 ETH</p>
							<p className='max-[510px]:text-[18px] '>Soft Cap</p>
						</div>
						<div className='text-[22px] max-[539px]:text-base max-[850px]:text-[19px] max-[510px]:text-[20px]'>
							<p className='text-[#0066FF] font-semibold'>1000 ETH</p>
							<p className='max-[510px]:text-[18px]'>Hard Cap</p>
						</div>
					</div>
				</div>

				<div className='flex w-[90%] justify-between flex-wrap max-[900px]:gap-x-20 max-[811px]:gap-x-10 max-[900px]:gap-y-10 max-[524px]:gap-7  max-[900px]:w-[70%]  static-items max-[668px]:gap-x-0 max-[668px]:gap-y-5 max-[510px]:w-[90%]'>
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
