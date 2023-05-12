import Image from 'next/image'
import arrow from '@/arrow-right.svg'
import donut from '@/1-.png'
import rocket from '@/3-.png'
import donut50 from '@/2.png'
import stars from '@/zkLaunch-stars-bg 1.png'
import { useRouter } from 'next/router'

const MainSection = () => {
	const { push } = useRouter()

	return (
		<section className='flex flex-col items-start relative overflow-hidden w-full'>
			<div className='w-full max-w-7xl px-5 mx-auto z-[1] pb-[11.875rem] max-[983px]:pb-[6rem]'>
				<div className='mb-[5.625rem] md:mb-60 relative flex justify-start'>
					<div className='flex flex-col gap-y-6 items-start mt-28 w-[719px] z-[1]'>
						<h1 className='font-semibold text-5xl md:text-[3.5rem] uppercase lg:text-[4rem]'>
							Focus on building. We will handle everything else
						</h1>
						<p className='text-[22px] text-[#F3F5F8]'>
							zkLaunch is the ultimate decentralized fundraising and marketing
							platform for teams from all over the world
						</p>
						<button
							onClick={() => push('/presale')}
							className='py-[8.5px] pl-6 pr-4 bg-[#1E69FF] rounded-lg flex items-center gap-x-28 hover:btn-hover active:ring-4 active:ring-[#0055FF59] active:duration-200 duration-200 hover:duration-200 max-[640px]:justify-between max-[640px]:w-full'
						>
							<p className='text-xl'>Private Sale</p>
							<Image src={arrow} alt='' />
						</button>
					</div>
					<Image
						src={donut}
						alt=''
						className='absolute  sm:-right-96 sm:-top-[170px] md:-right-[270px] w-[900px] -rotate-12  z-0 max-[786px]:hidden'
					/>
				</div>
				<div
					id='About'
					className='rounded-2xl  w-full relative gap-x-4 bg-black/50 max-[1115px]:my-16 my-[11.875rem] border border-[#1E69FF] backdrop-blur-[5px]'
				>
					<p className='uppercase absolute right-12 -top-5 py-[6.5px] px-2 border max-[980px]:hidden border-[#1E69FF] rounded-md bg-black'>
						zklaunch pre sale
					</p>
					<div className='relative flex justify-end overflow-hidden max-[980px]:pt-10 max-[980px]:items-center max-[980px]:flex-col '>
						<Image
							src={rocket}
							alt=''
							className='absolute -left-10 max-[980px]:left-0 max-[980px]:hidden -top-24 max-[1115px]:-left-28 '
						/>
						<div className='relative w-[15.875rem] h-[17.75rem]  hidden max-[980px]:block'>
							<Image src={rocket} alt='' className='absolute scale-[2.5]' />
						</div>
						<div className='flex flex-col gap-y-6 max-[980px]:text-center max-[980px]:-translate-y-8 max-[980px]:mx-auto max-[980px]:px-4 min-[980px]:w-[55%] py-8 md:py-[52px] md:mr-14'>
							<h3 className='font-semibold text-[2rem] md:text-4xl lg:text-5xl max-[572px]:text-start'>
								Discover new projects or launch your own{' '}
							</h3>
							<p className='text-lg lg:text-[1.375rem] max-[572px]:text-start'>
								zkLaunch is built on zkSync Era and offers a cheap and trustless
								way to launch innovative projects and participate in exciting
								presales while maintaining user safety
							</p>
						</div>
					</div>
				</div>
				<div className='flex mx-auto items-center max-w-7xl w-full mt-[11.875rem] max-[900px]:mt-16 z-[2]'>
					<div className='flex flex-col w-[600px] pt-14 gap-y-6'>
						<h3 className='font-semibold md:text-4xl lg:text-5xl text-[2rem]'>
							What do we do?
						</h3>
						<p className='text-lg lg:text-[1.375rem] '>
							We bring together the most talented teams in crypto with retail
							investors, early users and testers in a transparent and efficient
							way. No more insider dumping!
						</p>
					</div>
				</div>
				<Image
					src={donut50}
					alt=''
					className='absolute min-[980px]:top-[59rem] sm:top-[60rem] sm:-right-44 top-[70rem] -right-48 object-cover max-[580px]:-right-32 max-[580px]:top-[60rem] max-[56px]:top-[65rem] max-[550px]:top-[70rem] md:top-[68rem] lg:top-[68rem] z-[-1] md:right-0 lg:right-12 min-[684px]:top-[50rem] max-[639px]:top-[55rem] max-[440px]:top-[75rem]'
				/>
			</div>

			<Image src={stars} alt='' className='absolute top-0 right-0 ' />
		</section>
	)
}

export default MainSection
