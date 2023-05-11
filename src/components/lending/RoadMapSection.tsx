import Image from 'next/image'
import checked from '../../../public/Ellipse 2.svg'
import unchecked from '../../../public/Ellipse 2 (1).svg'

const april = [
	{ id: 1, title: 'GitHub application', status: true },
	{ id: 2, title: 'Whitelist announcement', status: true },
	{ id: 3, title: 'Whitelist announcement', status: true },
]

const may = [
	{ id: 1, title: 'Finalized contracts & tokenomics', status: true },
	{ id: 2, title: '$ZKL whitelisted presale & airdrop', status: true },
	{ id: 3, title: 'Liquidity generation event', status: false },
	{
		id: 4,
		title: 'v1 Launch & initial project selection by he team',
		status: false,
	},
]

const june = [
	{ id: 1, title: 'Governance Forum', status: false },
	{ id: 2, title: 'Staking for $ZKL holders', status: false },
	{ id: 3, title: 'Fee distribution to stakers', status: false },
	{ id: 4, title: 'Treasury', status: false },
	{ id: 5, title: 'Bug Bounty with prizes', status: false },
]

const quartal = [
	{
		id: 1,
		title: 'v2 Launch, expansion of functionality, NFT auctions',
		status: false,
	},
	{ id: 2, title: 'Open hackathon', status: false },
	{ id: 3, title: 'Audits', status: false },
	{
		id: 4,
		title: 'Pro tools & analytics for launchpad projects',
		status: false,
	},
	{
		id: 5,
		title: 'Collaborations with DEXes and ecosystem projects',
		status: false,
	},
]

const year = [
	{
		id: 1,
		title: 'Expansion to other networks (Starkware, Cosmos, Solana)',
		status: false,
	},
	{
		id: 2,
		title: 'Cross-chain interoperability & aggregation',
		status: false,
	},
	{ id: 3, title: 'Leverage & Lending', status: false },
	{ id: 4, title: 'No-code launch functionality', status: false },
	{ id: 5, title: 'Whitelist announcement', status: false },
]

const RoadMap = () => {
	const lists = [
		{ id: 1, title: 'April', list: april },
		{ id: 2, title: 'May', list: may },
		{ id: 3, title: 'Lune', list: june },
		{ id: 4, title: 'Q3-Q4', list: quartal },
		{ id: 5, title: '2024', list: year },
	]

	return (
		<section className='flex flex-col gap-y-8 max-w-7xl px-5 mx-auto my-[190px]'>
			<h2 className='text-5xl font-semibold'>Roadmap</h2>
			<div className='relative max-[805px]:hidden border flex gap-x-[1.375rem] gap-y-12 border-[#0066FF] rounded-2xl p-12 flex-wrap'>
				<p className='uppercase absolute right-12 -bottom-5 py-[10.5px] px-2 border border-[#1E69FF] rounded-md bg-black'>
					and more...
				</p>
				{lists.map(item => (
					<div key={item.id} className='flex flex-col'>
						<h4 className='roadmap__list-title mb-4'>{item.title}:</h4>
						<ul className='flex flex-col w-52 gap-y-3'>
							{item.list.map(elem => (
								<li key={elem.id} className='flex items-start'>
									<Image
										src={elem.status ? checked : unchecked}
										className={`${
											!elem.status ? 'mr-2 ml-[6px] mt-2' : 'mt-1 '
										} `}
										alt=''
									/>
									<p className='text-lg'>{elem.title}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='relative mb-[3.1875rem] overflow-hidden'>
				<div className='roadmap-list flex overflow-scroll snap-x min-[805px]:hidden gap-x-5 items-start '>
					{lists.map(item => (
						<div
							key={item.id}
							className='flex flex-col border border-[#1E69FF] rounded-lg p-6 snap-start'
						>
							<h4 className='roadmap__list-title mb-4'>{item.title}:</h4>
							<ul className='flex flex-col w-52 gap-y-3'>
								{item.list.map(elem => (
									<li key={elem.id} className='flex items-start'>
										<Image
											src={elem.status ? checked : unchecked}
											className={`${
												!elem.status ? 'mr-2 ml-[6px] mt-2' : 'mt-1 '
											} `}
											alt=''
										/>
										<p className='text-lg'>{elem.title}</p>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<p className='uppercase mx-auto py-[10.5px] px-2 border border-[#1E69FF] rounded-md bg-black'>
				and more...
			</p>
		</section>
	)
}

export default RoadMap
