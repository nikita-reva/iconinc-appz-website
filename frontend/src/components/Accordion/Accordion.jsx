import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { useClickOutside } from '../../hooks'

import { AccordionData } from './Data'
import {
	AccordionSection,
	Container,
	Dropdown,
	Wrap,
} from './styles/Accordion.styles'

const Accordion = () => {
	const [clicked, setClicked] = useState(undefined)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(undefined)
		}

		setClicked(index)
	}

	const refObject = useClickOutside(() => setClicked(undefined))

	return (
		<IconContext.Provider value={{ color: '#00ffb9', size: '25px' }}>
			<AccordionSection>
				<Container ref={refObject}>
					{AccordionData.map((item, index) => {
						return (
							<div key={index}>
								<Wrap onClick={() => toggle(index)} key={index}>
									<h1>{item.question}</h1>
									<span>
										{clicked === index ? (
											<FiMinus />
										) : (
											<FiPlus />
										)}
									</span>
								</Wrap>
								<Dropdown
									style={{
										height:
											clicked === index ? '100px' : '0px',
									}}
								>
									<p
										style={{
											opacity:
												clicked === index ? '1' : '0',
										}}
									>
										{item.answer}
									</p>
								</Dropdown>
							</div>
						)
					})}
				</Container>
			</AccordionSection>
		</IconContext.Provider>
	)
}

export default Accordion
