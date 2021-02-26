import React, { useState, useEffect } from 'react'
import { GrInstagram, GrLinkedinOption, GrTwitter } from 'react-icons/gr'

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
} from './styles/Navigation.styles'

const Navigation = () => {
	const [isActive, setIsActive] = useState(false)
	const [windowWidth, setWidowWidth] = useState(window.innerWidth)

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
					<IconicNavLinkWrapper
						initial={false}
						variants={
							windowWidth >= 991
								? navLinkVariantsDesktop
								: navLinkVariantsMobile
						}
						whileHover={linkHover}
					>
						<IconicNavLink to="/">Home</IconicNavLink>
					</IconicNavLinkWrapper>
					<IconicNavLinkWrapper
						initial={false}
						variants={
							windowWidth >= 991
								? navLinkVariantsDesktop
								: navLinkVariantsMobile
						}
						whileHover={linkHover}
					>
						<IconicNavLink to="/test">Work</IconicNavLink>
					</IconicNavLinkWrapper>
					<IconicNavLinkWrapper
						initial={false}
						variants={
							windowWidth >= 991
								? navLinkVariantsDesktop
								: navLinkVariantsMobile
						}
						whileHover={linkHover}
					>
						<IconicNavLink to="/test">Team</IconicNavLink>
					</IconicNavLinkWrapper>
					<IconicNavLinkWrapper
						initial={false}
						variants={
							windowWidth >= 991
								? navLinkVariantsDesktop
								: navLinkVariantsMobile
						}
						whileHover={linkHover}
					>
						<IconicNavLink to="/test">Contact</IconicNavLink>
					</IconicNavLinkWrapper>
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
