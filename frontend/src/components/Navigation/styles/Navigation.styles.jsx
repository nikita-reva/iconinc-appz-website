import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const IconicNavContainer = styled.div`
	width: 100%;
	z-index: 1000;
	position: sticky;
	top: 0;
`

export const IconicNav = styled(motion.nav)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	width: 100%;
	height: 100px;
	background: var(--iconic-darkblue);
	padding: 0 10%;
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
	background: var(--iconic-red);
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

export const IconicNavLinksContainer = styled.div`
	width: 100%;
	position: relative;
`

export const IconicNavLinks = styled(motion.ul)`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--iconic-yellow);
`
export const IconicNavLinkWrapper = styled(motion.li)`
	width: 200px;
	list-style: none;
`
export const IconicNavLink = styled(Link)`
	width: 100%;
	font-family: 'Courgette', sans-serif;
	font-size: 3rem;
	color: var(--iconic-darkblue);
	text-decoration: none;
`

export const IconicSocialLinks = styled(motion.div)`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
	background: var(--iconic-darkorange);
`

export const IconicSocialIcon = styled(motion.a)`
	font-size: 30px;
	line-height: 0.5;
	color: var(--iconic-darkblue);
`
