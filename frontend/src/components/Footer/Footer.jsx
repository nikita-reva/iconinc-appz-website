import React from 'react'
import Scroll from 'react-scroll'

import {
	IconicFooterContainer,
	IconicScrollToTopButton,
} from './styles/Footer.styles'

const Footer = () => {
	var scroll = Scroll.animateScroll
	return (
		<IconicFooterContainer>
			<IconicScrollToTopButton onClick={() => scroll.scrollToTop()}>
				Scroll To Top
			</IconicScrollToTopButton>
		</IconicFooterContainer>
	)
}

export default Footer
