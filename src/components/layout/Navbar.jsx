import Image from 'next/image'
import Logo from '../../../public/logo.svg'

const Navbar = () => {
	const navs = [
		{ id: 1, title: 'About' },
		{ id: 2, title: 'Tokenomics' },
		{ id: 3, title: 'Roadmap' },
		{ id: 4, title: 'FAQ' },
	]
	return (
		<nav className='max-w-7xl px-5 w-full flex items-center justify-between mx-auto'>
			<Image src={Logo} />
			<ul className='flex'>
				{navs.map(item => (
					<li className='p-5 cursor-pointer' key={item.id}>
						{item.title}
					</li>
				))}
			</ul>
			<button className='bg-[#1E69FF] hover:btn-hover active:ring-4 active:ring-[#0055FF59] active:duration-200 duration-200 hover:duration-200 px-6 py-[14.5px] rounded-lg font-medium font'>
				Connect wallet
			</button>
		</nav>
	)
}

export default Navbar
