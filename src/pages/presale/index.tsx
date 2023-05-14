import React from 'react'
import Layout from '@/components/layout/layout'
import Image from 'next/image'
import stars from '@/zkLaunch-stars-bg 1.png'
import Tokenomics from '@/components/lending/TokenomicsSection'
// import Investors from '@/components/lending/InvestorsSection'
import GlobalCommunity from '@/components/lending/GlobalCommSection'
import { NextPage } from 'next'
import MainSection from '@/components/presale/MainSection'
import dynamic from 'next/dynamic'

const DynamicSidebarWithNoSSR = dynamic(
	() => import('@/components/presale/MainSection'),
	{
		ssr: false,
	}
)

const PreSale: NextPage = () => {
	return (
		<Layout>
			<div className='relative'>
				<Image
					className='absolute w-[70vw] -top-[200px] right-0 10 max-[900px]:w-[90vw] max-[900px]:-top-[100px] -z-10'
					src={stars}
					alt='stars'
				/>
				<div className='absolute w-[1317px] h-[1317px] left-[-977px] top-[1355px] bg-[#DE01F4] opacity-[0.3] blur-[300px] max-[600px]:top-[900px]'></div>
				{/* <div className='absolute w-[20vw] h-[20vw] bg-[#003EB9] left-[1763px] top-[329px] opacity-[0.3] blur-[300px]'></div> */}
				<DynamicSidebarWithNoSSR />
				<Tokenomics />
				{/* <Investors /> */}
				<GlobalCommunity />
			</div>
		</Layout>
	)
}

export default PreSale
