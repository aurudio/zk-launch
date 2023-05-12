import Navbar from './Navbar'
import arrow from '../../../public/arrow-right.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
// import { useRouter } from 'next/router'

const Header = () => {
	const news = [
		{ id: 1, title: 'NEW LISTING' },
		{ id: 2, title: 'Pre-sale is now LIVE' },
		{ id: 3, title: 'NEW LISTING' },
		{ id: 4, title: 'Pre-sale is now LIVE' },
		{ id: 5, title: 'NEW LISTING' },
		{ id: 6, title: 'Pre-sale is now LIVE' },
		{ id: 7, title: 'NEW LISTING' },
		{ id: 8, title: 'Pre-sale is now LIVE' },
		{ id: 9, title: 'NEW LISTING' },
	]

	// const { pathname } = useRouter()

	return (
		<header className='flex flex-col'>
			{/* <div
				className='overflow-hidden bg-gradient-to-r max-[640px]:hidden from-[#FF8A00] to-[#D449F7] py-3'
				// className={`${
				// 	pathname === '/' ? 'block' : 'hidden'
				// } overflow-hidden bg-gradient-to-r max-[640px]:hidden from-[#FF8A00] to-[#D449F7] py-3`}
			>
				<Marquee direction='left' speed={50}>
					<div className='flex gap-16'>
						{news.map(item => (
							<p key={item.id}>{item.title}</p>
						))}
					</div>
				</Marquee>
			</div> */}
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
			<Navbar />
		</header>
	)
}

export default Header
