import './App.css'
import Navbar from './components/Navigation/Navbar'
import PrimaryButton from './components/PrimaryButton'
import heroImage from './assets/hero.png'
import { familyImages, stepImages } from './utils/assets'

import { motion } from 'framer-motion'
import { twoColumnVariants, twoColumnChildVariants, familyImageVariants, familyImageContainerVariants } from './utils/framer'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <motion.section className='mx-4 py-20 pb-28 mb- flex flex-col items-center justify-center text-center' variants={twoColumnVariants}>
        <motion.h1 variants={twoColumnChildVariants} className='text-5xl font-bold'>
          Ready to move in?
        </motion.h1>
        <motion.p variants={twoColumnChildVariants} className='my-6 text-xl max-w-2xl'>
          Move into your dream home today and build savings for your down payment while you rent. Own your home in 3 years or less.
        </motion.p>

        <PrimaryButton text='Apply now' />
      </motion.section>
      <Footer />
    </>
  )
}

export default App

function Hero() {
  return (
    <>
      <section className='bg-slate-50  px-4 pt-12 relative'>
        <motion.div initial='hidden' variants={twoColumnVariants} whileInView='visible' viewport={{ once: true }} className='section-inner grid grid-cols-1 md:grid-cols-2 gap-10'>
          <motion.div variants={twoColumnChildVariants} className='flex flex-col justify-center items-center md:items-start gap-6'>
            <motion.h1 variants={twoColumnChildVariants} className='leading-tight text-black '>
              Want to afford your <br />
              <span className='text-brand font-bold underline decoration-[0.25rem] underline-offset-8 '>dream home</span>
              ? <br /> We've got you.
            </motion.h1>
            <motion.div variants={twoColumnChildVariants} className='flex flex-col text-brand font-bold text-xl'>
              <span>👋 Goodbye 20%+ down-payments</span>
              <span>🎉 Hello rent-to-own homes</span>
            </motion.div>
            <PrimaryButton long text='Check your eligibility' />
          </motion.div>
          <motion.div variants={twoColumnChildVariants} className='flex items-center'>
            <img src={heroImage} alt='Hero Image' />
          </motion.div>
        </motion.div>
      </section>
      <div className='family-img-wrapper'>
        <motion.div initial='hidden' whileInView='visible' variants={familyImageContainerVariants} viewport={{ once: true }} className='family-img-container'>
          {familyImages.map((image, index) => (
            <motion.img key={index} className='family-img' src={image} alt='Image of a family' variants={familyImageVariants} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

function Steps() {
  return (
    <section className='min-h-screen bg-slate-100 px-4 pb-20'>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }} className='text-center text-black pt-10'>
        How it works
      </motion.h1>
      <motion.div initial='hidden' variants={twoColumnVariants} whileInView='visible' viewport={{ once: true }} className='section-inner grid grid-cols-1 md:grid-cols-2 gap-10'>
        <motion.div variants={twoColumnChildVariants} className='flex justify-center md:justify-start order-2 md:order-1  items-center w-full'>
          <img src={stepImages[0]} alt='Step 1' />
        </motion.div>
        <motion.div variants={twoColumnChildVariants} className='flex flex-col justify-center order-1 md:order-2 items-center md:items-start gap-6'>
          <span className='text-2xl font-bold text-center md:text-left'>1. Ready to be a homeowner?</span>
          <motion.h1 variants={twoColumnChildVariants} className=''>
            Pay only a 5% deposit
          </motion.h1>
          <p className='text-xl text-center md:text-left'>Calculate your budget with us in minutes, then take the first step towards homeownership with a minimal initial investment.</p>
          <motion.div variants={twoColumnChildVariants} className='flex flex-col text-brand font-bold text-xl'></motion.div>
          <PrimaryButton long text='Check your eligibility' />
        </motion.div>
      </motion.div>
      <motion.div initial='hidden' variants={twoColumnVariants} whileInView='visible' viewport={{ once: true }} className='section-inner grid grid-cols-1 md:grid-cols-2 gap-10'>
        <motion.div variants={twoColumnChildVariants} className='flex flex-col justify-center items-center md:items-start gap-6'>
          <span className='text-2xl font-bold text-center md:text-left'>2. Move in and start saving</span>
          <motion.h1 variants={twoColumnChildVariants} className='lg:whitespace-nowrap'>
            Fracasa buys your dream home
          </motion.h1>
          <p className='text-xl text-center md:text-left'>
            Fracasa buys the home, and you move in. Savings for your down payment are built into your Fracasa monthly payment, so they add up over time. You’ll be mortgage eligible in 3 years (or less!)
          </p>
          <motion.div variants={twoColumnChildVariants} className='flex flex-col text-brand font-bold text-xl'></motion.div>
          <PrimaryButton text='Apply now' />
        </motion.div>
        <motion.div variants={twoColumnChildVariants} className='flex justify-center order-2 md:order-1 items-center md:justify-end'>
          <img src={stepImages[1]} alt='Step 2' />
        </motion.div>
      </motion.div>
      <motion.div initial='hidden' variants={twoColumnVariants} whileInView='visible' viewport={{ once: true }} className='section-inner grid grid-cols-1 md:grid-cols-2 gap-10'>
        <motion.div variants={twoColumnChildVariants} className='flex justify-center md:justify-start order-2 md:order-1  items-center w-full'>
          <img src={stepImages[2]} alt='Step 3' />
        </motion.div>
        <motion.div variants={twoColumnChildVariants} className='flex flex-col justify-center order-1 md:order-2 items-center md:items-start gap-6'>
          <span className='text-2xl font-bold text-center md:text-left'>3. Buy out Fracasa's equity position</span>
          <motion.h1 variants={twoColumnChildVariants} className=''>
            Own your home in 3 years
          </motion.h1>
          <p className='text-xl text-center md:text-left'>Take control of your future as you buy out Fracasa's equity, paving the way for you to secure a mortgage and become a proud homeowner.</p>
          <motion.div variants={twoColumnChildVariants} className='flex flex-col text-brand font-bold text-xl'></motion.div>
          <PrimaryButton text='Get started' />
        </motion.div>
      </motion.div>
    </section>
  )
}
