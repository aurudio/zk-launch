import discord from '@/icon-discord.svg'
import twitter from '@/icon-twitter.svg'
import medium from '@/icon-medium.svg'
import github from '@/icon-github.svg'
import Image from 'next/image'

const cards = [
	{
		id: 1,
		icon: discord,
		title: 'Discord',
		color: '#6947F6',
		desc: 'Chat with like-minded people, dive into DeFi world.',
	},
	{
		id: 2,
		icon: twitter,
		title: 'Twitter',
		color: '#1DA1F2',
		desc: 'Follow updates and news on @zkLaunch and participate in giveaways',
	},
	{
		id: 3,
		icon: medium,
		title: 'Medium',
		color: '#FFC017',
		desc: 'Get insights from zkLaunch news, progress and industry analysis',
	},
	{
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
			className='flex flex-col items-start max-w-7xl mx-auto my-[8.875rem] px-5 max-[850px]:mt-[0rem] max-[677px]:mb-[4rem]'
		>
			<h2 className='max-[640px]:text-[2rem] text-4xl lg:text-5xl font-semibold mb-6'>
				Global Community
			</h2>
			<p className='text-[1.375rem] max-[640px]:text-lg font-normal mb-8 text-[#A5A9AD]'>
				Learn more about zkLaunch, talk to the team, other community members, or
				just{' '}
				<span
					className='text-blue-600 shadow-[0_1px_0_blue]'
					onClick={() => window.open('https://punkszk.com/')}
				>
					buy zkPunks
				</span>
			</p>
			<div className='flex w-full justify-between max-[768px]:gap-y-8 flex-wrap gap-y-6 min-[1189px]:flex-row flex-col'>
				{cards.map(item => (
					<div
						style={{ border: `1px ${item.color} solid` }}
						key={item.id}
						className='global-community-cards max-[1190px]:w-[90vw] cursor-pointer p-[1.5vw] max-[1190px]:p-8 rounded-2xl border bg-[#0F0F0F]'
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
