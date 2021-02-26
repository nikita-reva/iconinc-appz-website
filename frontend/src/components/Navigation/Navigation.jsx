import React, { useState } from 'react'
import { GrInstagram, GrLinkedinOption, GrTwitter } from 'react-icons/gr'

import { useClickOutsideRef } from '../../hooks'

import {
	barOneVariants,
	barTwoVariants,
	barThreeVariants,
	navLinksContainerVariants,
	navLinkVariants,
	socialLinksVariants,
	socialIconVariants,
	linkHover,
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

	const clickOutsideElement = useClickOutsideRef(() => setIsActive(false))

	return (
		<IconicNavContainer ref={clickOutsideElement}>
			<IconicNav>
				<IconicLink to="/">
					<IconicLogo
						whileHover={{
							boxShadow: '0 0 6px 1px rgba(0, 0, 0, 0.3)',
							scale: 1.04,
						}}
						src={'/images/logo.png'}
						alt="Iconic Appz Logo"
					/>
				</IconicLink>
				<IconicHamburger
					whileHover={{
						backgroundColor: 'var(--iconic-yellow)',
					}}
					transition={{
						type: 'spring',
						ease: 'easeIn',
						duration: 1,
					}}
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
					variants={navLinksContainerVariants}
					animate={isActive ? 'visible' : 'hidden'}
				>
					<IconicNavLinkWrapper
						initial={false}
						variants={navLinkVariants}
						whileHover={linkHover}
					>
						<IconicNavLink to="/">Home</IconicNavLink>
					</IconicNavLinkWrapper>
					<IconicNavLinkWrapper
						initial={false}
						variants={navLinkVariants}
						whileHover={linkHover}
					>
						<IconicNavLink to="/test">Work</IconicNavLink>
					</IconicNavLinkWrapper>
					<IconicNavLinkWrapper
						initial={false}
						variants={navLinkVariants}
						whileHover={linkHover}
					>
						<IconicNavLink to="/test">Team</IconicNavLink>
					</IconicNavLinkWrapper>
					<IconicNavLinkWrapper
						initial={false}
						variants={navLinkVariants}
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
						whileHover={linkHover}
					>
						<GrInstagram />
					</IconicSocialIcon>
					<IconicSocialIcon
						variants={socialIconVariants}
						href="https://www.linkedin.com/company/71537625/admin/"
						target="_blank"
						whileHover={linkHover}
					>
						<GrLinkedinOption />
					</IconicSocialIcon>
					<IconicSocialIcon
						variants={socialIconVariants}
						href="https://twitter.com/?lang=en"
						target="_blank"
						whileHover={linkHover}
					>
						<GrTwitter />
					</IconicSocialIcon>
				</IconicSocialLinks>
			</IconicNavLinksContainer>
		</IconicNavContainer>
	)
}

export default Navigation
