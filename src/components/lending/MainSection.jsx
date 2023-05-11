import Image from 'next/image'
import arrow from '../../../public/arrow-right.svg'
import donut from '../../../public/1-.png'
import rocket from '../../../public/3-.png'
import donut50 from '../../../public/2.png'
import stars from '../../../public/zkLaunch-stars-bg 1.png'

const MainSection = () => {
	return (
		<section className='flex flex-col items-start relative overflow-hidden w-full'>
			<div className='w-full max-w-7xl px-5 mx-auto z-[1]'>
				<div className='relative flex justify-start'>
					<div className='flex flex-col gap-y-6 items-start mt-28 w-[719px]'>
						<h1 className='font-semibold text-[64px]'>
							BUILT TO LAUNCH THE MOST ANTICIPATED BLOCKCHAIN PROJECTS IN ZKSYNC
							ERA
						</h1>
						<p className='text-[22px]'>
							zkLaunch is the ultimate decentralized fundraising and marketing
							platform for teams from all over the world
						</p>
						<button className='py-5 pl-6 pr-4 bg-[#1E69FF] rounded-lg flex items-center gap-x-28 hover:btn-hover active:ring-4 active:ring-[#0055FF59] active:duration-200 duration-200 hover:duration-200'>
							<p className='text-xl'>Launch App</p>
							<Image src={arrow} />
						</button>
					</div>
				</div>
				<div className='rounded-2xl  w-full relative gap-x-4 bg-black/50 mt-60 border border-[#1E69FF] backdrop-blur-[5px] mb-24'>
					<p className='uppercase absolute right-12 -top-5 py-[10.5px] px-2 border border-[#1E69FF] rounded-md bg-black'>
						zklaunch pre sale
					</p>
					<div className='relative flex justify-end overflow-hidden'>
						<Image src={rocket} className='absolute -left-10 -top-24' />
						<div className='flex flex-col gap-y-6 w-[55%] py-[52px] mr-14'>
							<h3 className='font-semibold text-5xl'>
								Discover new projects or launch your own{' '}
							</h3>
							<p className='text-[22px]'>
								zkLaunch is built on zkSync Era and offers a cheap and trustless
								way to launch innovative projects and participate in exciting
								presales while maintaining user safety
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex mx-auto items-center max-w-7xl px-5'>
				<div className='flex flex-col w-[600px] pt-14 gap-y-6'>
					<h3 className='font-semibold text-5xl'>What do we do?</h3>
					<p className='text-[22px]'>
						We bring together the most talented teams in crypto with retail
						investors, early users and testers in a transparent and efficient
						way. No more insider dumping!
					</p>
				</div>

				<Image src={donut50} className='' />
			</div>
			<Image src={stars} className='absolute top-0 right-0 z-0' />
			<Image src={donut} className='absolute -right-32 -top-5' />
		</section>
	)
}

export default MainSection
