import Image from 'next/image'
import diagram from '../../../public/Tokenomics.svg'
import { useRouter } from 'next/router'

export const statistic = [
	{ id: 1, title: '$0.05', desc: 'Pre-Sale Price' },
	{ id: 2, title: '$0.1', desc: 'Listing Price' },
	{ id: 3, title: '100M', desc: '$ZKL supply' },
	{ id: 4, title: '$ZKL', desc: 'Ticker' },
]

const Tokenomics = () => {
	const tokens = [
		{ id: 1, title: 'DAO Treasury*', value: '50', color: '#C112FF' },
		{ id: 2, title: 'Liquidity', value: '10', color: '#0055FF' },
		{ id: 3, title: 'Community', value: '30', color: '#00FF59' },
		{ id: 4, title: 'Teams', value: '10', color: '#FFA012' },
	]

	const { pathname } = useRouter()

	return (
		<section
			id='Tokenomics'
			className='flex flex-col items-start px-5 relative overflow-hidden w-full max-[503px]:px-1'
		>
			<div className='w-full max-w-7xl  mx-auto z-[1]'>
				<div>
					<h2 className='font-semibold mb-6 max-[640px]:text-[2rem] text-4xl lg:text-5xl max-[503px]:ml-4 px-5 max-[1314px]:px-0'>
						Tokenomics
					</h2>
					<div className='flex items-center mb-20 gap-x-[66px] max-[902px]:flex-col'>
						<Image
							src={diagram}
							className='w-[47vw] min-[1470px]:w-[690px] max-[902px]:w-[60vw] max-[902px]:mb-12 max-[503px]:w-[85vw]'
							alt=''
						/>
						<div className='flex flex-col w-[520px] max-[902px]:w-[90%]'>
							<div className='flex flex-col gap-y-2 items-start mb-10'>
								<h3 className='text-[32px] font-semibold max-[1046px]:text-[24px] max-[503px]:text-[32px]'>
									$ZKL Token
								</h3>
								<p className='text-[22px] font-normal w-full text-[#949494] max-[1046px]:text-[18px] max-[600px]:text-white'>
									First token bringing real utility into launchpads by offering
									both professional customizable tools for builders and more
									allocations with special perks for investors
								</p>
							</div>
							<div className='flex flex-wrap gap-6 mb-3 max-[1046px]:gap-3 max-[841px]:justify-between max-[841px]:gap-y-6 max-[409px]:gap-2'>
								{tokens.map(item => (
									<div
										className='flex xl:w-60 max-[1280px]:w-60 max-[1227px]:w-48 gap-x-2 max-[841px]:gap-y-20  max-[1046px]:w-40 max-[841px]:w-40 max-[503px]:w-44'
										key={item.id}
									>
										<hr
											style={{ background: item.color }}
											className={`w-2 h-[54px] border-0 rounded-xl`}
										/>
										<div className='flex flex-col'>
											<h5 className='text-2xl max-[1046px]:text-[14px] font-semibold max-[841px]:text-[25px] max-[503px]:text-[22px]'>
												{item.title}
											</h5>
											<p
												className={`text-lg font-normal max-[1046px]:text-[14px] max-[841px]:text-[18px]`}
												style={{ color: item.color }}
											>
												{item.value} 000 000 ZKL
											</p>
										</div>
									</div>
								))}
							</div>
							<p className='font-normal text-start text-white/50 max-[503px]:text-sm'>
								*DAO Treasury: bounty, marketing, ecosystem fund, etc
							</p>
						</div>
					</div>
					<div
						className={`relative px-[92px] max-[841px]:px-[80px] py-16 border border-[#1E69FF] rounded-2xl max-[503px]:${
							pathname !== '/' ? 'hidden' : ''
						} max-[850px]:hidden max-[503px]:mx-2 `}
					>
						<p className='uppercase absolute right-12 max-[640px]:hidden -top-5 py-[6.5px] px-2 border border-[#1E69FF] rounded-md bg-black'>
							token
						</p>
						<div className='flex max-[425px]:flex-wrap gap-10 justify-center '>
							{statistic.map(item => (
								<div
									className='flex items-center max-[425px]:w-4/12 flex-col w-[23%] gap-y-3'
									key={item.id}
								>
									<h5 className='text-5xl font-semibold max-[841px]:text-3xl'>
										{item.title}
									</h5>
									<h6 className='text-[#0066FF] text-xl text-center font-bold max-[841px]:text-sm'>
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
