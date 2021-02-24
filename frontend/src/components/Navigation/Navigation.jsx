import React, { useState } from 'react'
import {
	IconicBar,
	IconicHamburger,
	IconicNav,
} from './styles/Navigation.styles'

const Navigation = () => {
	const [isActive, setIsActive] = useState(false)
	const [hamburgerHovered, setHamburgerHovered] = useState(false)

	const bar1 = {
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
			},
		},
	}
	const bar2 = {
		notActive: {
			// rotateZ: 0,
			// x: 0,
			// transition: {
			// 	duration: 1.5,
			// },
			width: '100%',
			transition: {
				type: 'spring',
				duration: 0.6,
				bounce: 0.4,
				stiffness: 120,
			},
		},
		active: {
			// rotateZ: 1080,
			// x: '-30vw',
			// transition: {
			// 	duration: 1.2,
			// },
			width: 0,
			transition: {
				ease: 'linear',
				duration: 0.3,
			},
		},
	}
	const bar3 = {
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
			},
		},
	}

	return (
		<IconicNav>
			<IconicHamburger
				whileHover={{
					backgroundColor: 'var(--logo-color-yellowish)',

					scale: [1, 1.2, 1.1, 1.3, 1],
					rotate: [0, 15, -15, 10, 0],
					borderRadius: [10, 15, 5, 10, 5],
				}}
				transition={{
					type: 'spring',
					ease: 'easeIn',
					duration: 1,
				}}
				onClick={() => {
					setIsActive(!isActive)
					console.log(isActive)
				}}
			>
				<IconicBar
					variants={bar1}
					animate={isActive ? 'active' : 'notActive'}
				/>
				<IconicBar
					variants={bar2}
					animate={isActive ? 'active' : 'notActive'}
				/>
				<IconicBar
					variants={bar3}
					animate={isActive ? 'active' : 'notActive'}
				/>
			</IconicHamburger>
		</IconicNav>
	)
}

export default Navigation
