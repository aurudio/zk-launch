import Image from 'next/image'
import twitter from '@/gray-icon-twitter.svg'
import discord from '@/gray-icon-discord.svg'
import github from '@/gray-icon-github.svg'
import medium from '@/gray-icon-medium.svg'
import logo from '@/logo.svg'
import { useRouter } from 'next/router'

const Footer = () => {
	const icons = [
		{ id: 1, icon: twitter, site: '	https://twitter.com/zk_launch' },
		{ id: 2, icon: discord, site: '	https://discord.gg/zklaunch' },
		{ id: 3, icon: github, site: '	https://github.com/zklaunch-app' },
		{ id: 4, icon: medium, site: '	https://zklaunch.medium.com' },
	]

	const list = [
		{ id: 1, title: 'About' },
		{ id: 2, title: 'Tokenomics' },
		{ id: 3, title: 'Roadmap' },
		{ id: 4, title: 'Community' },
	]

	const listzkLaunch = [
		{ id: 2, title: 'Tokenomics' },
		{ id: 4, title: 'Community' },
	]

	const { pathname } = useRouter()

	return (
		<div className='sm:py-[69px] pt-9 pb-8 flex flex-col items-center shadow-[0_-1px_0_#292A2B]'>
			<div className='flex justify-between items-end max-w-7xl w-full px-5 mb-[2.875rem] sm:mb-[6.375rem]'>
				<div className='flex flex-col gap-y-4 mb-[1.125rem]'>
					<Image src={logo} alt='' />
					<p className='text-[#686A6D] font-normal'>
						Built zkPunks, the first NFT collection and auction on @zkSync
					</p>
				</div>
				<ul className='flex max-[1150px]:hidden'>
					{pathname === '/presale'
						? listzkLaunch.map(item => (
								<li
									key={item.id}
									className='text-[#686A6D] p-5 text-lg font-normal cursor-pointer'
								>
									{item.title}
								</li>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
						: list.map(item => (
								<li
									key={item.id}
									className='text-[#686A6D] p-5 text-lg font-normal cursor-pointer'
								>
									{item.title}
								</li>
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))}
				</ul>
			</div>
			<div className='flex items-center sm:justify-between sm:flex-row flex-col-reverse gap-y-12 max-w-7xl w-full px-5'>
				<p className='font-normal opacity-40'>
					© 2023 zkLaunch | All rights reserved
				</p>
				<ul className='flex gap-x-4 mr-5'>
					{icons.map(item => (
						<li
							key={item.id}
							className='cursor-pointer'
							onClick={() => window.open(item.site)}
						>
							<Image src={item.icon} alt='' />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Footer
