import React from 'react'
import {
	GlassButtonContainer,
	GlassButtonLink,
	GlassButtonBtn,
} from './styles/GlassButton.styles'

const GlassButton = ({ onClick, linkTo, btnsize, glimColor }) => {
	return (
		<GlassButtonContainer glimColor={glimColor} btnsize={btnsize}>
			{linkTo ? (
				<GlassButtonLink to={linkTo} btnsize={btnsize}>
					Read More
				</GlassButtonLink>
			) : (
				<GlassButtonBtn onClick={onClick}>Scroll To Top</GlassButtonBtn>
			)}
		</GlassButtonContainer>
	)
}

export default GlassButton
