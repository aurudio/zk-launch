import GlobalCommunity from './GlobalCommSection'
import Investors from './InvestorsSection'
import MainSection from './MainSection'
import RoadMap from './RoadMapSection'
import Tokenomics from './TokenomicsSection'

const Lending = () => {
	return (
		<div className='relative overflow-hidden z-10'>
			<MainSection />
			<Tokenomics />
			<RoadMap />
			<Investors />
			<GlobalCommunity />
		</div>
	)
}

export default Lending
