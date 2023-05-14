import arrow from '../../../public/arrow-right.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const DynamicSidebarWithNoSSR = dynamic(() => import('./Navbar'), {
	ssr: false,
})

const Header = () => {
	const news = [
		{ id: 1, title: 'ZKL Private Sale is Live!' },
		{ id: 2, title: 'ZKL Private Sale is Live!' },
		{ id: 3, title: 'ZKL Private Sale is Live!' },
		{ id: 4, title: 'ZKL Private Sale is Live!' },
		{ id: 5, title: 'ZKL Private Sale is Live!' },
		{ id: 6, title: 'ZKL Private Sale is Live!' },
		{ id: 7, title: 'ZKL Private Sale is Live!' },
		{ id: 8, title: 'ZKL Private Sale is Live!' },
		{ id: 9, title: 'ZKL Private Sale is Live!' },
		// { id: 2, title: 'Presale is now LIVE' },
		// { id: 3, title: 'NEW LISTING' },
		// { id: 4, title: 'Presale is now LIVE' },
		// { id: 5, title: 'NEW LISTING' },
		// { id: 6, title: 'Presale is now LIVE' },
		// { id: 7, title: 'NEW LISTING' },
		// { id: 8, title: 'Presale is now LIVE' },
		// { id: 9, title: 'NEW LISTING' },
	]

	const { pathname } = useRouter()

	return (
		<header className='flex flex-col'>
			<div
				className={`${
					pathname === '/' ? '' : ''
				} overflow-hidden bg-gradient-to-r max-[640px]:hidde from-[#FF8A00] to-[#D449F7] py-3`}
			>
				<Marquee direction='left' className='flex gap-16' speed={50}>
					<div className='flex gap-16'>
						{news.map(item => (
							<p key={item.id}>{item.title}</p>
						))}
					</div>
				</Marquee>
			</div>
			<div className='flex cursor-pointer justify-center py-[15px] bg-[#1E69FF] font-thing text-xs sm:text-base max-[500px]:hidden'>
				<p
					onClick={() =>
						window.open(
							'https://twitter.com/zk_launch/status/1652523510290325505'
						)
					}
				>
					💻 We are giving away 3 x MacBook Pro!{' '}
					<span className='border-b-4 border-dotted'> Enter to win here </span>{' '}
					🚀
				</p>
				<Image src={arrow} alt='' />
			</div>
			<DynamicSidebarWithNoSSR />
		</header>
	)
}

export default Header
