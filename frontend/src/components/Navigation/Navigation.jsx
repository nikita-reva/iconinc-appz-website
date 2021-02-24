import React, { useState } from 'react'
import {
	IconicBar,
	IconicHamburger,
	IconicLink,
	IconicLogo,
	IconicNav,
	IconicNavLinksContainer,
} from './styles/Navigation.styles'

const Navigation = () => {
	const [isActive, setIsActive] = useState(false)

	const barOne = {
		notActive: {
			rotateZ: 0,
			y: 0,
			transition: {
				type: 'spring',
				duration: 0.5,
				bounce: 0.4,
				stiffness: 200,
			},
		},
		active: {
			rotateZ: 45,
			y: 10,
			transition: {
				type: 'spring',
				duration: 0.5,
				bounce: 0.4,
				stiffness: 200,
				delay: 0.2,
			},
		},
	}

	const barTwo = {
		notActive: {
			scaleX: 1,
			transition: {
				type: 'spring',
				duration: 0.6,
				bounce: 0.4,
				delay: 0.2,
				stiffness: 120,
			},
		},
		active: {
			scaleX: 0,
			transition: {
				ease: 'linear',
				duration: 0.3,
			},
		},
	}

	const barThree = {
		notActive: {
			rotateZ: 0,
			y: 0,
			transition: {
				type: 'spring',
				duration: 0.5,
				bounce: 0.4,
				stiffness: 200,
			},
		},
		active: {
			rotateZ: -45,
			y: -10,
			transition: {
				type: 'spring',
				duration: 0.5,
				bounce: 0.4,
				stiffness: 200,
				delay: 0.2,
			},
		},
	}

	const navLinks = {
		hidden: {
			height: 0,
		},
		visible: {
			height: 200,
			transition: {
				type: 'spring',
				duration: 0.5,
				ease: 'easeIn',
				stiffness: 160,
			},
		},
	}

	return (
		<>
			<IconicNav>
				<IconicLink to="/">
					<IconicLogo
						whileHover={{
							boxShadow: '0 0 6px 1px rgba(0, 0, 0, 0.3)',
							scale: 1.02,
						}}
						src={'/images/logo.png'}
						alt="Iconic Appz Logo"
					/>
				</IconicLink>
				<IconicHamburger
					whileHover={{
						backgroundColor: 'var(--logo-yellow)',
					}}
					transition={{
						type: 'spring',
						ease: 'easeIn',
						duration: 1,
					}}
					onClick={() => setIsActive(!isActive)}
				>
					<IconicBar
						variants={barOne}
						animate={isActive ? 'active' : 'notActive'}
					/>
					<IconicBar
						variants={barTwo}
						animate={isActive ? 'active' : 'notActive'}
					/>
					<IconicBar
						variants={barThree}
						animate={isActive ? 'active' : 'notActive'}
					/>
				</IconicHamburger>
			</IconicNav>
			<IconicNavLinksContainer
				variants={navLinks}
				animate={isActive ? 'visible' : 'hidden'}
			></IconicNavLinksContainer>
		</>
	)
}

export default Navigation
