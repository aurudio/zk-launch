import React from 'react'
import Layout from '@/components/layout/layout'
import MainSection from '@/components/pre-sale/MainSection'
import Image from 'next/image'
import stars from '@/zkLaunch-stars-bg 1.png'
import Tokenomics from '@/components/lending/TokenomicsSection'
import Investors from '@/components/lending/InvestorsSection'
import GlobalCommunity from '@/components/lending/GlobalCommSection'
const PreSale = () => {
	return (
		<Layout>
			<div className='relative'>
				<Image
					className='absolute w-[70vw] top-0 right-0 10'
					src={stars}
					alt='stars'
				/>
				<div className='absolute w-[1317px] h-[1317px] left-[-977px] top-[1355px] bg-[#DE01F4] opacity-[0.3] blur-[300px]'></div>
				{/* <div className='absolute w-[20vw] h-[20vw] bg-[#003EB9] left-[1763px] top-[329px] opacity-[0.3] blur-[300px]'></div> */}
				<MainSection />
				<Tokenomics />
				<Investors />
				<GlobalCommunity />
			</div>
		</Layout>
	)
}

export default PreSale
