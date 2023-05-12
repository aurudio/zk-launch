/* eslint-disable no-mixed-spaces-and-tabs */
import Image from 'next/image'
import Logo from '@/logo.svg'
import burger from '@/burger.svg'
import { useEffect, useState } from 'react'
import closeBtn from '@/close-btn.svg'
import { useRouter } from 'next/router'

const Navbar = () => {
	const navs = [
		{ id: 1, title: 'About' },
		{ id: 2, title: 'Tokenomics' },
		{ id: 3, title: 'Roadmap' },
		{ id: 4, title: 'Community' },
	]
	const navszkLaunch = [
		{ id: 2, title: 'Tokenomics' },
		{ id: 4, title: 'Community' },
	]

	interface INav {
		id: number
		title: string
	}

	const [vis, setVis] = useState(false)

	const { push } = useRouter()

	const router = useRouter()

	return (
		<>
			<nav className=' w-full shadow-[0_1px_0_#292A2B] z-100'>
				<div className='max-w-7xl px-5 w-full flex items-center mx-auto justify-between'>
					<Image
						src={Logo}
						alt=''
						onClick={() => push('/')}
						className='cursor-pointer'
					/>
					<ul className='md:flex max-[850px]:text-sm hidden'>
						{navs.map(item => (
							<li className='p-5 cursor-pointer font-light' key={item.id}>
								<a href={`#${item.title}`}>{item.title}</a>
							</li>
						))}
					</ul>
					<Image
						src={burger}
						onClick={() => setVis(true)}
						alt=''
						className='md:hidden cursor-pointer'
					/>
				</div>
			</nav>
			<div
				className={` ${
					vis ? 'h-[100vh] pb-5' : 'h-0 duration-200'
				} text-right overflow-hidden duration-500 fixed z-20 bg-black w-full`}
			>
				<div className='flex justify-between px-5'>
					<Image src={Logo} alt='' />
					<Image
						src={closeBtn}
						onClick={() => setVis(false)}
						alt=''
						className='opacity-50 cursor-pointer'
					/>
				</div>
				<div className='relative flex justify-center w-full h-[90%]'>
					<ul className='flex flex-col mb-6 w-full shadow-[inset0_-1px_0_#292A2B]'>
						{router.pathname === '/pre-sale'
							? navszkLaunch.map(item => (
									<li
										onClick={() => setVis(false)}
										className='p-5 text-left cursor-pointer font-bold shadow-[0_1px_0_#292A2B]'
										key={item.id}
									>
										<a href={`#${item.title}`}>{item.title}</a>
									</li>
									// eslint-disable-next-line no-mixed-spaces-and-tabs
							  ))
							: navs.map(item => (
									<li
										onClick={() => setVis(false)}
										className='p-5 text-left cursor-pointer font-bold shadow-[0_1px_0_#292A2B]'
										key={item.id}
									>
										<a href={`#${item.title}`}>{item.title}</a>
									</li>
									// eslint-disable-next-line no-mixed-spaces-and-tabs
							  ))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar
