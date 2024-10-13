import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'
import { AuthModal } from './AuthModal'

export function Navbar() {
  
  return (
    <div className='flex p-5 items-center justify-between bg-[#247a9f]'>
      <Link href='/' className='flex items-center gap-2'>
        <Image src={Logo} alt='Logo' className='size-10'/>
        <h4 className='text-3xl font-semibold '>
          Event
          <span className='text-[#ffd700]'> Codex</span>
        </h4>
      </Link>
      <AuthModal />
    </div>
  )
}