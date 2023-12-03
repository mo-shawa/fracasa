import RightArrow from '../assets/misc/right-arrow.svg'
import { motion } from 'framer-motion'

type PrimaryButtonProps = {
  text: string
  long?: boolean
}

export default function PrimaryButton({ text, long = false }: PrimaryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={`flex w-full max-w-xs items-center justify-center gap-4 rounded-full text-white shadow-lg shadow-brand2/70 bg-brand2  py-5 text-lg transition-shadow duration-300 ease-in-out
			hover:shadow-brand2/70 hover:shadow-xl group relative font-semibold ${long ? 'pr-10' : 'px-5'}
		`}>
      {text}
      <motion.img layout='position' src={RightArrow} alt='Right Arrow' className='h-5 absolute right-16 group-hover:translate-x-2 transition-transform' />
    </motion.button>
  )
}
