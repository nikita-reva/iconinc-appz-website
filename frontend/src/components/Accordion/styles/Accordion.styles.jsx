import styled, { keyframes } from 'styled-components'

export const AccordionSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
`

export const Container = styled.div`
	box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`

export const Wrap = styled.div`
	background: #272727;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-align: center;
	cursor: pointer;

	h1 {
		padding: 2rem;
		font-size: 2rem;
	}

	span {
		margin-right: 1.5rem;
	}
`

export const Animate = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1;
  }
`

export const Dropdown = styled.div`
	background: #1c1c1c;
	color: #00ffb9;
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: height 1s ease;

	p {
		transition: opacity 0.2s ease 0.3s;
		font-size: 2rem;
	}
`
