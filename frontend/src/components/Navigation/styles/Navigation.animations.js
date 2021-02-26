// Hover animations
export const logoHover = {
	boxShadow: '0 0 6px 1px rgba(0, 0, 0, 0.3)',
	scale: 1.04,
}

export const hamburgerHover = {
	backgroundColor: 'var(--iconic-yellow)',
	transition: {
		type: 'spring',
		ease: 'easeIn',
		duration: 1,
	},
}

export const linkHover = {
	scale: 1.1,
	transition: {
		type: 'spring',
		mass: 1.2,
		damping: 4,
		stiffness: 1000,
	},
}

export const socialHover = {
	scale: 1.2,
	transition: {
		type: 'spring',
		mass: 2,
		stiffness: 800,
	},
}

// Variants
export const barOneVariants = {
	notActive: {
		rotateZ: 0,
		y: 0,
		transition: {
			type: 'spring',
			duration: 0.5,
			stiffness: 200,
		},
	},
	active: {
		rotateZ: 45,
		y: 10,
		transition: {
			type: 'spring',
			stiffness: 200,
			delay: 0.2,
		},
	},
}

export const barTwoVariants = {
	notActive: {
		scaleX: 1,
		transition: {
			type: 'spring',
			duration: 0.6,
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

export const barThreeVariants = {
	notActive: {
		rotateZ: 0,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 200,
		},
	},
	active: {
		rotateZ: -45,
		y: -10,
		transition: {
			type: 'spring',
			stiffness: 200,
			delay: 0.2,
		},
	},
}

export const navLinksContainerVariantsDesktop = {
	hidden: {
		height: 0,
		transition: {
			type: 'tween',
			duration: 0.4,
			ease: 'easeIn',
			when: 'afterChildren',
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		height: 200,
		transition: {
			type: 'spring',
			ease: 'easeIn',
			stiffness: 160,
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
}

export const navLinksContainerVariantsMobile = {
	hidden: {
		height: 0,
		transition: {
			type: 'tween',
			duration: 0.4,
			ease: 'easeIn',
			when: 'afterChildren',
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		height: 300,
		transition: {
			type: 'spring',
			ease: 'easeIn',
			stiffness: 160,
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
}

export const navLinkVariantsDesktop = {
	hidden: {
		x: 0,
		y: -300,
	},
	visible: {
		x: 0,
		y: 0,
	},
}

export const navLinkVariantsMobile = {
	hidden: {
		y: 0,
		x: '-70vw',
	},
	visible: {
		y: 0,
		x: 0,
		transition: {
			type: 'spring',
			velocity: 5,
			restSpeed: 5,
			ease: 'easeIn',
		},
	},
}

export const socialLinksVariants = {
	hidden: {
		width: 0,
		transition: {
			when: 'afterChildren',
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		width: 80,
		transition: {
			when: 'beforeChildren',
			delay: 0.4,
			staggerChildren: 0.2,
		},
	},
}

export const socialIconVariants = {
	hidden: {
		opacity: 0,
		x: 100,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
}
