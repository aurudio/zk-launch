import React from 'react'
import Layout from '@/components/layout/layout'
import MainSection from '@/components/pre-sale/MainSection'
import Image from 'next/image'
import stars from '@/zkLaunch-stars-bg 1.png'
import Tokenomics from '@/components/lending/TokenomicsSection'
// import Investors from '@/components/lending/InvestorsSection'
import GlobalCommunity from '@/components/lending/GlobalCommSection'
const PreSale = () => {
	return (
		<Layout>
			<div className='relative'>
				<Image
					className='absolute top-0 right-0 -z-10'
					src={stars}
					alt='stars'
				/>
				<MainSection />
				<Tokenomics />
				{/* <Investors /> */}
				<GlobalCommunity />
			</div>
		</Layout>
	)
}

export default PreSale
