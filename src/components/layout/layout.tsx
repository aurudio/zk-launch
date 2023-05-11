import { FC, PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
