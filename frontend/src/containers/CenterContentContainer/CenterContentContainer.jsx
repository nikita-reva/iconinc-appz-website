import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

const TestContainer = ({ children }) => {
	return <Container>{children}</Container>
}

export default TestContainer
