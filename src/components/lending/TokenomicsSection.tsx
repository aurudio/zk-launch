import Image from 'next/image'
import diagram from '../../../public/Tokenomics.svg'

const Tokenomics = () => {
	const tokens = [
		{ id: 1, title: 'DAO Treasury*', value: '50 000 000', color: '#C112FF' },
		{ id: 2, title: 'Liquidity', value: '30 000 000', color: '#0055FF' },
		{ id: 3, title: 'Community', value: '50 000 000', color: '#00FF59' },
		{ id: 4, title: 'Teams', value: '30 000 000', color: '#FFA012' },
	]

	const statistic = [
		{ id: 1, title: '$0.05', desc: 'Pre-Sale Price' },
		{ id: 2, title: '$0.1', desc: 'Listing Price' },
		{ id: 3, title: '100M', desc: '$ZKL supply' },
		{ id: 4, title: '$ZKL', desc: 'Ticker' },
	]

	return (
		<section className='flex flex-col items-start px-5 relative overflow-hidden w-full'>
			<div className='w-full max-w-7xl px-5 mx-auto z-[1]'>
				<div>
					<h2 className='text-5xl font-semibold mb-6'>Tokenomics</h2>
					<div className='flex items-center mb-20 gap-x-[66px]'>
						<Image src={diagram} alt='' />
						<div className='flex flex-col w-[520px]'>
							<div className='flex flex-col gap-y-2 items-start mb-10'>
								<h3 className='text-[32px] font-semibold'>$ZKL Token</h3>
								<p className='text-[22px] font-normal w-full text-[#949494]'>
									First token bringing real utility into launchpads by offering
									both professional customizable tools for builders and more
									allocations with special perks for investors
								</p>
							</div>
							<div className='flex flex-wrap gap-6 mb-3'>
								{tokens.map(item => (
									<div className='flex w-60 gap-x-2' key={item.id}>
										<hr
											style={{ background: item.color }}
											className={`w-2 h-[54px] border-0 rounded-xl`}
										/>
										<div className='flex flex-col'>
											<h5 className='text-2xl font-semibold'>{item.title}</h5>
											<p
												className={`text-lg font-normal`}
												style={{ color: item.color }}
											>
												{item.value} ZKL
											</p>
										</div>
									</div>
								))}
							</div>
							<p className='font-normal text-start text-white/50'>
								*DAO Treasury: bounty, marketing, ecosystem fund, etc
							</p>
						</div>
					</div>
					<div className='relative px-[92px] py-16 border border-[#1E69FF] rounded-2xl'>
						<p className='uppercase absolute right-12 -top-5 py-[10.5px] px-2 border border-[#1E69FF] rounded-md bg-black'>
							token
						</p>
						<div className='flex gap-x-10 justify-center'>
							{statistic.map(item => (
								<div className='flex items-center flex-col w-[23%] gap-y-3'>
									<h5 className='text-5xl font-semibold'>{item.title}</h5>
									<h6 className='text-[#0066FF] text-xl font-bold'>
										{item.desc}
									</h6>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Tokenomics
