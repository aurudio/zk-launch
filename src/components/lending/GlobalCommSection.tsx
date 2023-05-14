import discord from '@/icon-discord.svg'
import twitter from '@/icon-twitter.svg'
import medium from '@/icon-medium.svg'
import github from '@/icon-github.svg'
import Image from 'next/image'

const cards = [
	{
		site: 'https://discord.gg/zklaunch',
		id: 1,
		icon: discord,
		title: 'Discord',
		color: '#6947F6',
		desc: 'Chat with like-minded people, dive into DeFi world.',
	},
	{
		site: '	https://twitter.com/zk_launch',
		id: 2,
		icon: twitter,
		title: 'Twitter',
		color: '#1DA1F2',
		desc: 'Follow updates and news on @zkLaunch and participate in giveaways',
	},
	{
		site: 'https://zklaunch.medium.com',
		id: 3,
		icon: medium,
		title: 'Medium',
		color: '#FFC017',
		desc: 'Get insights from zkLaunch news, progress and industry analysis',
	},
	{
		site: 'https://github.com/zklaunch-app',
		id: 4,
		icon: github,
		title: 'GitHub',
		color: '#6947F6',
		desc: 'Watch for tech updates to the code base and participate in the Bug Bounty program',
	},
]

const GlobalCommunity = () => {
	return (
		<section
			id='Community'
			className='z-[1] flex flex-col items-start max-w-7xl mx-auto my-[8.875rem] px-5 max-[850px]:mt-[0rem] max-[677px]:mb-[4rem]'
		>
			<h2 className='max-[640px]:text-[2rem] text-4xl lg:text-5xl font-semibold mb-6'>
				Global Community
			</h2>
			<p className='text-[1.375rem] max-[640px]:text-lg font-normal mb-8 text-[#A5A9AD]'>
				Learn more about zkLaunch, talk to the team, other community members, or
				just{' '}
				<span
					className='text-blue-600 shadow-[0_1px_0_blue] cursor-pointer'
					onClick={() =>
						window.open(
							'http://mintsquare.io/collection/zksync/0xcb5d99e8b5d626f882e1fb4067d37759d67595a6'
						)
					}
				>
					buy zkPunks
				</span>
			</p>
			<div className='flex w-full justify-between max-[768px]:gap-y-8 flex-wrap gap-y-6 min-[1189px]:flex-row flex-col'>
				{cards.map(item => (
					<div
						onClick={() => window.open(item.site)}
						key={item.id}
						className={`global-community-cards ${item.title.toLowerCase()} max-[1190px]:w-[90vw] cursor-pointer p-[1.5vw] max-[1190px]:p-8 rounded-2xl border bg-[#0F0F0F] border-[#0F0F0F]`}
					>
						<div className='flex flex-col'>
							<Image src={item.icon} className='mb-4' alt='' />
							<div className='flex flex-col gap-y-2 w-[228px]'>
								<h5 className='font-bold text-[22px]'>{item.title}</h5>
								<p className=''>{item.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default GlobalCommunity
