import React from 'react'
import {
	GlassButtonContainer,
	GlassButtonLink,
} from './styles/GlassButton.styles'

const GlassButton = ({ linkTo, btnsize, glimColor }) => {
	return (
		<GlassButtonContainer glimColor={glimColor} btnsize={btnsize}>
			<GlassButtonLink to={linkTo} btnsize={btnsize}>
				Read More
			</GlassButtonLink>
		</GlassButtonContainer>
	)
}

export default GlassButton
