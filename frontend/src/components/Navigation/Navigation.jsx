import React, { useState, useEffect } from 'react'
import { GrInstagram, GrLinkedinOption, GrTwitter } from 'react-icons/gr'
import {
	AnimateSharedLayout,
	useMotionValue,
	useTransform,
	useViewportScroll,
} from 'framer-motion'

import { useClickOutsideRef } from '../../hooks'

import {
	barOneVariants,
	barTwoVariants,
	barThreeVariants,
	navLinksContainerVariantsDesktop,
	navLinksContainerVariantsMobile,
	navLinkVariantsDesktop,
	navLinkVariantsMobile,
	socialLinksVariants,
	socialIconVariants,
	linkHover,
	logoHover,
	socialHover,
	hamburgerHover,
} from './styles/Navigation.animations'

import {
	IconicNavContainer,
	IconicNav,
	IconicBar,
	IconicHamburger,
	IconicLink,
	IconicLogo,
	IconicNavLinksContainer,
	IconicNavLinks,
	IconicSocialLinks,
	IconicSocialIcon,
	IconicNavLinkWrapper,
	IconicNavLink,
	IconicNavLinkMarker,
} from './styles/Navigation.styles'

import { navLinks } from './Data'

const Navigation = () => {
	const [isActive, setIsActive] = useState(false)
	const [selected, setSelected] = useState(null)
	const [windowWidth, setWidowWidth] = useState(window.innerWidth)

	const mouseX = useMotionValue(0)
	const x = useTransform(mouseX, [0, 80], [0, 80])

	const { scrollYProgress } = useViewportScroll()
	const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 720])

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidowWidth(window.innerWidth)
		})
	})

	const clickOutsideElement = useClickOutsideRef(() => setIsActive(false))

	return (
		<IconicNavContainer ref={clickOutsideElement}>
			<IconicNav>
				<IconicLink to="/">
					<IconicLogo
						onMouseMove={(event) => {
							mouseX.set(
								event.nativeEvent.x -
									event.nativeEvent.target.offsetLeft
							)
							console.log(
								event.nativeEvent.x -
									event.nativeEvent.target.offsetLeft
							)
							console.log(event)
						}}
						style={{ x, rotateZ }}
						whileHover={logoHover}
						src={'/images/logo.png'}
						alt="Iconic Appz Logo"
					/>
				</IconicLink>
				<IconicHamburger
					whileHover={hamburgerHover}
					onClick={() => setIsActive(!isActive)}
				>
					<IconicBar
						variants={barOneVariants}
						animate={isActive ? 'active' : 'notActive'}
					/>
					<IconicBar
						variants={barTwoVariants}
						animate={isActive ? 'active' : 'notActive'}
					/>
					<IconicBar
						variants={barThreeVariants}
						animate={isActive ? 'active' : 'notActive'}
					/>
				</IconicHamburger>
			</IconicNav>
			<IconicNavLinksContainer>
				<IconicNavLinks
					initial={false}
					variants={
						windowWidth > 991
							? navLinksContainerVariantsDesktop
							: navLinksContainerVariantsMobile
					}
					animate={isActive ? 'visible' : 'hidden'}
				>
					<AnimateSharedLayout>
						{navLinks.map((link, index) => (
							<IconicNavLinkWrapper
								key={index}
								onClick={() => setSelected(index)}
								initial={false}
								whileHover={linkHover}
								variants={
									windowWidth >= 991
										? navLinkVariantsDesktop
										: navLinkVariantsMobile
								}
							>
								<IconicNavLink to={link.to}>
									{link.title}
								</IconicNavLink>
								{selected === index && (
									<IconicNavLinkMarker
										initial={false}
										layoutId="marked"
										animate={{
											backgroundColor: link.markerColor,
										}}
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 20,
										}}
									/>
								)}
							</IconicNavLinkWrapper>
						))}
					</AnimateSharedLayout>
				</IconicNavLinks>
				<IconicSocialLinks
					variants={socialLinksVariants}
					animate={isActive ? 'visible' : 'hidden'}
				>
					<IconicSocialIcon
						variants={socialIconVariants}
						href="https://www.instagram.com/iconicappz/"
						target="_blank"
						whileHover={socialHover}
					>
						<GrInstagram />
					</IconicSocialIcon>
					<IconicSocialIcon
						variants={socialIconVariants}
						href="https://www.linkedin.com/company/71537625/admin/"
						target="_blank"
						whileHover={socialHover}
					>
						<GrLinkedinOption />
					</IconicSocialIcon>
					<IconicSocialIcon
						variants={socialIconVariants}
						href="https://twitter.com/?lang=en"
						target="_blank"
						whileHover={socialHover}
					>
						<GrTwitter />
					</IconicSocialIcon>
				</IconicSocialLinks>
			</IconicNavLinksContainer>
		</IconicNavContainer>
	)
}

export default Navigation
