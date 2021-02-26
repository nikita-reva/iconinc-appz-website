export const barOneVariants = {
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

export const barTwoVariants = {
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

export const barThreeVariants = {
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

export const navLinksContainerVariants = {
	hidden: {
		height: 0,
		transition: {
			delay: 0.2,
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
			duration: 0.5,
			ease: 'easeIn',
			stiffness: 160,
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
}

export const navLinkVariants = {
	hidden: {
		y: -300,
	},
	visible: {
		y: 0,
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

export const linkHover = {
	scale: 1.2,
	transition: {
		type: 'spring',
		mass: 2,
		stiffness: 800,
	},
}
