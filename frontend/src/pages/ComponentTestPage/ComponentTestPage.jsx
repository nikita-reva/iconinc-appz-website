import React from 'react'

import { BgColorContainer, CenterContentContainer } from '../../containers'
import { GlassButton } from '../../components'
import { Accordion } from '../../components'

const ComponentTestPage = () => {
	return (
		<BgColorContainer bgcolor="#e94949">
			<CenterContentContainer>
				{/* <GlassButton linkTo="/" btnsize="big" glimColor="#55a4ee" />
				<GlassButton linkTo="/" btnsize="big" glimColor="#e96f37" />
				<GlassButton linkTo="/" btnsize="big" glimColor="#db235a" /> */}
				<Accordion />
			</CenterContentContainer>
		</BgColorContainer>
	)
}

export default ComponentTestPage
