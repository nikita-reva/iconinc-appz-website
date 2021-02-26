import React from 'react'

import { BgColorContainer, CenterContentContainer } from '../../containers'
import { Accordion } from '../../components'

const ComponentTestPage = () => {
	return (
		<BgColorContainer bgcolor="var(--iconic-blue)">
			<CenterContentContainer>
				<Accordion />
			</CenterContentContainer>
		</BgColorContainer>
	)
}

export default ComponentTestPage
