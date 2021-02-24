import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const IconicNav = styled(motion.nav)`
	position: sticky;
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	width: 100%;
	height: 100px;
	background: var(--logo-darkblue);
	padding: 0 10%;
	z-index: 1000;
`

export const IconicHamburger = styled(motion.div)`
	display: flex;
	width: 40px;
	height: 35px;
	padding: 5px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
	cursor: pointer;
`

export const IconicBar = styled(motion.div)`
	width: 100%;
	height: 5px;
	background: var(--logo-red);
`

export const IconicLink = styled(Link)`
	display: grid;
	place-items: center;
`

export const IconicLogo = styled(motion.img)`
	width: 80px;
	height: auto;
	border-radius: 50%;
	box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3);
`

export const IconicNavLinksContainer = styled(motion.div)`
	width: 100%;
	background: var(--logo-lightblue);
`
