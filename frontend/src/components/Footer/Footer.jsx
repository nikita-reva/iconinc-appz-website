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
				glimColor="var(--iconic-yellow)"
				btnsize="big"
				onClick={() => scroll.scrollToTop()}
			/>
		</IconicFooterContainer>
	)
}

export default Footer
