import Logo from '../../assets/svg/logo.svg'

export default function LogoWithText() {
  return (
    <div className='flex-1 gap-1 items-center cursor-pointer'>
      <img src={Logo} alt='Fracasa Logo' />
      <a href='#' className='normal-case text-xl font-bold'>
        Fracasa
      </a>
    </div>
  )
}
