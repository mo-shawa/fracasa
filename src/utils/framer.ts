import { Variants } from "framer-motion"

export const twoColumnVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.5,
		},
	},
}

export const twoColumnChildVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -20,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "tween",
		},
	},
}

export const familyImageContainerVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
			staggerChildren: 0.1,
		},
	},
}

export const familyImageVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
}
