import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${({ bgcolor }) => (bgcolor ? bgcolor : 'none')};
`

const BgColorContainer = ({ children, bgcolor }) => {
	return <Container bgcolor={bgcolor}>{children}</Container>
}

export default BgColorContainer
