import React from 'react'
import Layout from '@/components/layout/layout'
import MainSection from '@/components/pre-sale/MainSection'
import Image from 'next/image'
import stars from '@/zkLaunch-stars-bg 1.png'
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
			</div>
		</Layout>
	)
}

export default PreSale
