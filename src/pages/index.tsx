import Layout from '@/components/layout/layout'
import Lending from '@/components/lending/Lending'

export default function Home() {
	return (
		<Layout>
			<div className='overflow-hidden relative'>
				<Lending />
				<div className='bg-[#1E69FF] w-[772px] top-[800px] blur-[300px] -left-[700px] absolute h-[772px] rounded-full z-0]'></div>
				<div className='bg-[#FF3D00] w-[1317px] top-[1800px] blur-[300px] -right-[1500px] h-[1317px] rounded-full absolute '></div>
			</div>
		</Layout>
	)
}
