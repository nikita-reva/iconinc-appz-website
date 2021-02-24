import styled from 'styled-components'
import { motion } from 'framer-motion'

export const IconicNav = styled(motion.nav)`
	position: sticky;
	display: flex;
	align-items: center;
	top: 0;
	width: 100%;
	height: 100px;
	background: #1758ac;
	padding: 0 20%;
`

export const IconicHamburger = styled(motion.div)`
	display: flex;
	width: 35px;
	height: 35px;
	padding: 5px;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;
	border-radius: 5px;
	cursor: pointer;
`

export const IconicBar = styled(motion.div)`
	width: 100%;
	height: 5px;
	background: #fff;
`
