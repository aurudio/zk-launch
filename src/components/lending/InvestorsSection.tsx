import Image from 'next/image'
import abstract from '@/abstract.svg'
import grid from '@/grid.svg'
import blue from '@/blue-icon.png'
import green from '@/green-icon.png'
import purple from '@/purple-icon.png'
import yellow from '@/yellow-icon.png'

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

	return (
		<div className='flex flex-col gap-y-8 max-w-7xl px-5 mx-auto my-[190px]'>
			<div className='flex flex-col gap-y-[7.5rem]'>
				{blocks.map(item => (
					<div
						className={`${
							item.title === 'For investors' ? 'flex-row-reverse' : 'flex-row'
						} flex justify-between`}
						key={item.id}
					>
						<Image src={item.vector} alt='' />
						<div className='flex flex-col gap-y-8'>
							<h5 className='text-5xl font-semibold'>{item.title}:</h5>
							<div className='flex flex-wrap w-[29rem] gap-x-16 gap-y-[2.875rem]'>
								{item.block.map(elem => (
									<div
										className='flex gap-3 w-[12.5rem] items-start'
										key={elem.id}
									>
										<Image src={elem.icon} className='w-12 h-12' alt='' />
										<h5 className='text-[1.375rem] font-bold'>{elem.title}</h5>
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
