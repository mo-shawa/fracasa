import "./App.css"
import Navbar from "./components/Navigation/Navbar"
import PrimaryButton from "./components/PrimaryButton"
import heroImage from "./assets/hero.png"
import { familyImages, stepImages } from "./utils/assets"

import { motion } from "framer-motion"
import {
	twoColumnVariants,
	twoColumnChildVariants,
	familyImageVariants,
	familyImageContainerVariants,
} from "./utils/framer"

function App() {
	return (
		<>
			<Navbar />
			<section className="bg-slate-50  px-4 pt-20 relative">
				<motion.div
					initial="hidden"
					variants={twoColumnVariants}
					whileInView="visible"
					viewport={{ once: true }}
					className="section-inner grid grid-cols-1 md:grid-cols-2 gap-10"
				>
					<motion.div
						variants={twoColumnChildVariants}
						className="flex flex-col justify-center items-center md:items-start gap-6"
					>
						<motion.h1
							variants={twoColumnChildVariants}
							className="text-5xl text-center md:text-start font-bold leading-snug"
						>
							Want to afford your <br />
							<span className="text-brand font-bold underline ">
								dream home
							</span>
							? <br /> We've got you.
						</motion.h1>
						<motion.div
							variants={twoColumnChildVariants}
							className="flex flex-col text-brand font-bold text-xl"
						>
							<span>👋 Goodbye 20%+ down-payments</span>
							<span>🎉 Hello rent-to-own homes</span>
						</motion.div>
						<PrimaryButton text="Check your eligibility" />
					</motion.div>

					<motion.div
						variants={twoColumnChildVariants}
						className="flex items-center"
					>
						<img src={heroImage} alt="Hero Image" />
					</motion.div>
				</motion.div>
			</section>
			<div className="family-img-wrapper">
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={familyImageContainerVariants}
					viewport={{ once: true }}
					className="family-img-container"
				>
					<motion.img
						className="family-img"
						src={familyImages[1]}
						alt="Image of a family"
						variants={familyImageVariants}
					/>
					<motion.img
						className="family-img"
						src={familyImages[2]}
						alt="Image of a family"
						variants={familyImageVariants}
					/>
					<motion.img
						className="family-img"
						src={familyImages[3]}
						alt="Image of a family"
						variants={familyImageVariants}
					/>
					<motion.img
						className="family-img"
						src={familyImages[6]}
						alt="Image of a family"
						variants={familyImageVariants}
					/>
					<motion.img
						className="family-img"
						src={familyImages.yourFamily}
						alt="Image of a family"
						variants={familyImageVariants}
					/>
					<motion.img
						className="family-img"
						src={familyImages[4]}
						alt="Image of a family"
						variants={familyImageVariants}
					/>
					<motion.img
						className="family-img"
						src={familyImages[5]}
						alt="Image of a family"
						variants={familyImageVariants}
					/>
				</motion.div>
			</div>
			<section className="min-h-screen bg-slate-100 px-4 pb-20">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1 }}
					viewport={{ once: true }}
					className="text-5xl font-bold text-center pt-10"
				>
					How it works
				</motion.h1>
				<motion.div
					initial="hidden"
					variants={twoColumnVariants}
					whileInView="visible"
					viewport={{ once: true }}
					className="section-inner grid grid-cols-1 md:grid-cols-2 gap-10"
				>
					<motion.div
						variants={twoColumnChildVariants}
						className="flex justify-center md:justify-start order-2 md:order-1  items-center w-full"
					>
						<img src={stepImages[1]} alt="Step 1" />
					</motion.div>
					<motion.div
						variants={twoColumnChildVariants}
						className="flex flex-col justify-center order-1 md:order-2 items-center md:items-start gap-6"
					>
						<span className="text-2xl font-bold">
							1. Ready to be a homeowner?
						</span>
						<motion.h1
							variants={twoColumnChildVariants}
							className="text-brand text-5xl text-center md:text-start font-bold leading-snug"
						>
							Pay only a 5% deposit
						</motion.h1>
						<p className="text-xl text-center md:text-left">
							Calculate your budget with us in minutes, then take the first step
							towards homeownership with a minimal initial investment.
						</p>
						<motion.div
							variants={twoColumnChildVariants}
							className="flex flex-col text-brand font-bold text-xl"
						></motion.div>
						<PrimaryButton text="Check your eligibility" />
					</motion.div>
				</motion.div>
				<motion.div
					initial="hidden"
					variants={twoColumnVariants}
					whileInView="visible"
					viewport={{ once: true }}
					className="section-inner grid grid-cols-1 md:grid-cols-2 gap-10"
				>
					<motion.div
						variants={twoColumnChildVariants}
						className="flex flex-col justify-center items-center md:items-start gap-6"
					>
						<span className="text-2xl font-bold">
							2. Move in and start saving
						</span>
						<motion.h1
							variants={twoColumnChildVariants}
							className="text-brand text-5xl lg:whitespace-nowrap text-center md:text-start font-bold leading-snug"
						>
							Fracasa buys your dream home
						</motion.h1>
						<p className="text-xl text-center md:text-left">
							Fracasa buys the home, and you move in. Savings for your down
							payment are built into your Fracasa monthly payment, so they add
							up over time. You’ll be mortgage eligible in 3 years (or less!)
						</p>
						<motion.div
							variants={twoColumnChildVariants}
							className="flex flex-col text-brand font-bold text-xl"
						></motion.div>
						<PrimaryButton text="Check your eligibility" />
					</motion.div>
					<motion.div
						variants={twoColumnChildVariants}
						className="flex justify-center order-2 md:order-1 items-center md:justify-end"
					>
						<img src={stepImages[2]} alt="Step 2" />
					</motion.div>
				</motion.div>
				<motion.div
					initial="hidden"
					variants={twoColumnVariants}
					whileInView="visible"
					viewport={{ once: true }}
					className="section-inner grid grid-cols-1 md:grid-cols-2 gap-10"
				>
					<motion.div
						variants={twoColumnChildVariants}
						className="flex justify-center md:justify-start order-2 md:order-1  items-center w-full"
					>
						<img src={stepImages[3]} alt="Step 3" />
					</motion.div>
					<motion.div
						variants={twoColumnChildVariants}
						className="flex flex-col justify-center order-1 md:order-2 items-center md:items-start gap-6"
					>
						<span className="text-2xl font-bold">
							3. Buy out Fracasa's equity position
						</span>
						<motion.h1
							variants={twoColumnChildVariants}
							className="text-brand text-5xl text-center md:text-start font-bold leading-snug"
						>
							Own your home in 3 years
						</motion.h1>
						<p className="text-xl text-center md:text-left">
							Take control of your future as you buy out Fracasa's equity,
							paving the way for you to secure a mortgage and become a proud
							homeowner.
						</p>
						<motion.div
							variants={twoColumnChildVariants}
							className="flex flex-col text-brand font-bold text-xl"
						></motion.div>
						<PrimaryButton text="Check your eligibility" />
					</motion.div>
				</motion.div>
			</section>
			<motion.section
				className="mx-4 py-20 pb-28 mb- flex flex-col items-center justify-center text-center"
				variants={twoColumnVariants}
			>
				<motion.h1
					variants={twoColumnChildVariants}
					className="text-5xl font-bold"
				>
					Ready to move in?
				</motion.h1>
				<motion.p
					variants={twoColumnChildVariants}
					className="my-6 text-xl max-w-2xl"
				>
					Move into your dream home today and build savings for your down
					payment while you rent. Own your home in 3 years or less.
				</motion.p>

				<PrimaryButton text="Apply now" />
			</motion.section>
		</>
	)
}

export default App
