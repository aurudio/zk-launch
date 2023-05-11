import Navbar from './Navbar'
import arrow from '../../../public/arrow-right.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

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

	const { pathname } = useRouter()

	return (
		<header className='flex flex-col'>
			<div
				className={`${
					pathname === '/' ? 'block' : 'hidden'
				} overflow-hidden bg-gradient-to-r max-[640px]:hidden from-[#FF8A00] to-[#D449F7] py-3`}
			>
				<div className='w-[2454px] flex gap-x-[60px] mx-auto -translate-x-6'>
					{news.map(item => (
						<p className='lg:text-lg text-xs md:text-sm font-GR' key={item.id}>
							{item.title}
						</p>
					))}
				</div>
			</div>
			<div className='flex max-[640px]:hidden cursor-pointer justify-center py-[15px] bg-[#1E69FF] font-semibold text-xs sm:text-base'>
				<p>
					🎉 zkLaunch just became more affordable! Check out our new pricing
					plans! 🎉
				</p>
				<Image src={arrow} alt='' />
			</div>
			<Navbar />
		</header>
	)
}

export default Header
