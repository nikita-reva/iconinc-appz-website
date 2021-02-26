import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const GlassButtonContainer = styled.div`
	position: relative;
	width: ${({ btnsize }) => (btnsize === 'big' ? '155px' : '105px')};
	height: ${({ btnsize }) => (btnsize === 'big' ? '50px' : '30px')};
	font-size: ${({ btnsize }) => (btnsize === 'big' ? '16px' : '12px')};

	&:before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: ${({ btnsize }) => (btnsize === 'big' ? '-5px' : '-3px')};
		width: ${({ btnsize }) => (btnsize === 'big' ? '30px' : '20px')};
		height: ${({ btnsize }) => (btnsize === 'big' ? '10px' : '6px')};
		border-radius: 10px;
		transition: 0.5s;
		background: ${({ glimColor }) => (glimColor ? glimColor : '#f00')};
		box-shadow: 0 0 ${({ btnsize }) => (btnsize === 'big' ? '5px' : '3px')}
				${({ glimColor }) => (glimColor ? glimColor : '#f00')},
			0 0 ${({ btnsize }) => (btnsize === 'big' ? '15px' : '10px')}
				${({ glimColor }) => (glimColor ? glimColor : '#f00')},
			0 0 ${({ btnsize }) => (btnsize === 'big' ? '30px' : '20px')}
				${({ glimColor }) => (glimColor ? glimColor : '#f00')},
			0 0 60px ${({ glimColor }) => (glimColor ? glimColor : '#f00')};
	}

	&:after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: ${({ btnsize }) => (btnsize === 'big' ? '-5px' : '-3px')};
		width: ${({ btnsize }) => (btnsize === 'big' ? '30px' : '20px')};
		height: ${({ btnsize }) => (btnsize === 'big' ? '10px' : '6px')};
		border-radius: 10px;
		transition: 0.5s;
		background: ${({ glimColor }) => (glimColor ? glimColor : '#f00')};
		box-shadow: 0 0 5px
				${({ glimColor }) => (glimColor ? glimColor : '#f00')},
			0 0 15px ${({ glimColor }) => (glimColor ? glimColor : '#f00')},
			0 0 30px ${({ glimColor }) => (glimColor ? glimColor : '#f00')},
			0 0 60px ${({ glimColor }) => (glimColor ? glimColor : '#f00')};
	}

	&:hover {
		&:before {
			bottom: 0;
			height: 50%;
			width: 80%;
			border-radius: 30px;
			transition-delay: 0.5s;
		}
		&:after {
			top: 0;
			height: 50%;
			width: 80%;
			border-radius: 30px;
			transition-delay: 0.5s;
		}
	}
`

export const GlassButtonLink = styled(Link)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.05);
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 30px;
	color: #fff;
	z-index: 1;
	font-weight: 400;
	letter-spacing: 1px;
	text-decoration: none;
	overflow: hidden;
	transition: 0.5s;
	backdrop-filter: blur(15px);

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: linear-gradient(
			to left,
			rgba(255, 255, 255, 0.15),
			transparent
		);
		transform: skewX(45deg) translateX(0);
		transition: 0.5s;
	}

	&:hover {
		letter-spacing: ${({ btnsize }) => (btnsize === 'big' ? '3px' : '2px')};

		&:before {
			transform: skewX(45deg) translateX(200%);
		}
	}
`

export const GlassButtonBtn = styled.button`
	position: absolute;
	cursor: pointer;
	border: none;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.05);
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 30px;
	color: #fff;
	z-index: 1;
	font-weight: 400;
	letter-spacing: 1px;
	text-decoration: none;
	overflow: hidden;
	transition: 0.5s;
	backdrop-filter: blur(15px);

	&:focus {
		outline: none;
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: linear-gradient(
			to left,
			rgba(255, 255, 255, 0.15),
			transparent
		);
		transform: skewX(45deg) translateX(0);
		transition: 0.5s;
	}

	&:hover {
		letter-spacing: ${({ btnsize }) => (btnsize === 'big' ? '3px' : '2px')};

		&:before {
			transform: skewX(45deg) translateX(200%);
		}
	}
`
