import React from 'react'
import Scroll from 'react-scroll'
import GlassButton from '../GlassButton/GlassButton'

import {
	IconicFooterContainer,
	IconicScrollToTopButton,
} from './styles/Footer.styles'

const Footer = () => {
	var scroll = Scroll.animateScroll
	return (
		<IconicFooterContainer>
			<GlassButton
				glimColor="var(--iconic-turquoise)"
				btnsize="big"
				onClick={() =>
					scroll.scrollToTop({
						delay: 50,
						duration: 1000,
						smooth: 'easeInOutQuad',
					})
				}
			/>
		</IconicFooterContainer>
	)
}

export default Footer
