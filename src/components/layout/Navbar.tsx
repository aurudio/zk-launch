import Image from 'next/image'
import Logo from '@/logo.svg'
import burger from '@/burger.svg'
import { useState } from 'react'
import closeBtn from '@/close-btn.svg'

const Navbar = () => {
	const navs = [
		{ id: 1, title: 'About' },
		{ id: 2, title: 'Tokenomics' },
		{ id: 3, title: 'Roadmap' },
		{ id: 4, title: 'FAQ' },
	]

	const [vis, setVis] = useState(false)

	return (
		<>
			<nav className=' w-full shadow-[0_1px_0_#292A2B]'>
				<div className='max-w-7xl px-5 w-full flex items-center mx-auto justify-between'>
					<Image src={Logo} alt='' />
					<ul className='md:flex max-[850px]:text-sm hidden'>
						{navs.map(item => (
							<li className='p-5 cursor-pointer' key={item.id}>
								{item.title}
							</li>
						))}
					</ul>
					<button className='bg-[#1E69FF] md:block hidden max-[850px]:text-sm max-[850px]: hover:btn-hover active:ring-4 active:ring-[#0055FF59] active:duration-200 duration-200 hover:duration-200 px-6 py-[14.5px] rounded-lg font-medium font'>
						Connect wallet
					</button>
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
					vis ? 'h-[100vh] pb-5' : 'h-0'
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
						{navs.map(item => (
							<li
								className='p-5 text-left cursor-pointer font-bold shadow-[0_1px_0_#292A2B]'
								key={item.id}
							>
								{item.title}
							</li>
						))}
					</ul>
					<button className='bg-[#1E69FF] max-[530px]:w-4/5 absolute bottom-0 hover:btn-hover active:ring-4 active:ring-[#0055FF59] active:duration-200 duration-200 hover:duration-200 px-6 py-[14.5px] rounded-lg font-medium font'>
						Connect wallet
					</button>
				</div>
			</div>
		</>
	)
}

export default Navbar
