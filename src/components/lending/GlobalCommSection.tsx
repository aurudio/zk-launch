import discord from '../../../public/icon-discord.svg'
import twitter from '../../../public/icon-twitter.svg'
import medium from '../../../public/icon-medium.svg'
import github from '../../../public/icon-github.svg'
import Image from 'next/image'
import Link from 'next/link'

const GlobalCommunity = () => {
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
	return (
		<section className='flex flex-col items-start max-w-7xl mx-auto my-[190px] px-5'>
			<h2 className='text-5xl font-semibold mb-6'>Global Community</h2>
			<p className='text-[22px] font-normal mb-8 text-[#A5A9AD]'>
				Learn more about zkLaunch, talk to the team, other community members, or
				just{' '}
				<Link href={'#'} className='text-blue-600 shadow-[0_1px_0_blue]'>
					buy zkPunks
				</Link>
			</p>
			<div className='flex gap-x-6 w-full'>
				{cards.map(item => (
					<div
						style={{ border: `1px ${item.color} solid` }}
						key={item.id}
						className='cursor-pointer p-8 rounded-2xl border bg-[#0F0F0F]'
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
