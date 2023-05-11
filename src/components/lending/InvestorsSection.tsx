import Image from 'next/image'
import abstract from '@/abstract.svg'
import grid from '@/grid.svg'
import blue from '@/blue-icon.png'
import green from '@/green-icon.png'
import purple from '@/purple-icon.png'
import yellow from '@/yellow-icon.png'
import { useState } from 'react'

const Investors = () => {
	const investors = [
		{ id: 1, title: 'Larger allocation', icon: blue },
		{ id: 2, title: 'POAPs, NFTs, special drops', icon: green },
		{ id: 3, title: 'Alpha bot', icon: purple },
		{ id: 4, title: 'Early access', icon: yellow },
	]

	const teams = [
		{ id: 1, title: 'Pro dashboards', icon: blue },
		{ id: 2, title: 'Detailing statistics', icon: green },
		{ id: 3, title: 'Landing page design', icon: purple },
		{ id: 4, title: 'Early users chat', icon: yellow },
	]

	const blocks = [
		{ id: 1, title: 'For investors', block: investors, vector: abstract },
		{ id: 2, title: 'For teams', block: teams, vector: grid },
	]

	const [state, setState] = useState('For investors')

	return (
		<div className='flex flex-col gap-y-8 max-w-7xl px-5 mx-auto my-[190px]'>
			<div className='hidden p-[0.375rem] max-[640px]:flex mx-auto border border-[#292A2B] rounded-full'>
				{blocks.map(item => (
					<button
						className={`${
							state == item.title ? 'bg-[#0075FF]' : 'bg-transparent'
						} duration-300 px-7 py-[14.5px] rounded-full font-semibold`}
						onClick={() => setState(item.title)}
					>
						{item.title}
					</button>
				))}
			</div>
			<div className='flex flex-col gap-y-[7.5rem] gap-1'>
				{blocks.map(item => (
					<div
						className={`${
							item.title === 'For investors'
								? 'flex-row-reverse max-[980px]:items-end'
								: 'flex-row max-[980px]:items-start'
						} sm:flex justify-between max-[980px]:flex-col-reverse max-[980px]:w-full  px-14 relative max-[640px]:items-center  ${
							state == item.title ? 'max-[640px]:flex' : 'max-[640px]:hidden'
						}`}
						key={item.id}
					>
						<Image
							src={item.vector}
							alt=''
							className='max-[1060px]:w-[28.375rem] max-[980px]:-rotate-[60deg] z-0 max-[640px]:translate-y-0 max-[640px]:absolute'
						/>
						<div className='flex flex-col gap-y-8 z-[1] max-[640px]:w-full'>
							<h5 className='lg:text-5xl md:text-4xl text-3xl font-semibold max-[640px]:hidden'>
								{item.title}:
							</h5>
							<div className='flex flex-wrap sm:w-[29rem] gap-x-16 gap-y-[2.875rem] max-[640px]:flex-col'>
								{item.block.map(elem => (
									<div
										className='flex gap-3 sm:w-[12.5rem] items-start'
										key={elem.id}
									>
										<Image src={elem.icon} className='w-12 h-12' alt='' />
										<h5 className='lg:text-[1.375rem] text-xl  font-bold'>
											{elem.title}
										</h5>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Investors
