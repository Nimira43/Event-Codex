import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import Logo from '@/public/logo.png'

export default function DashboardLayout({children}: {children: ReactNode}) {

  return (
    <>
      <div className='min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <div className='hidden md:block border-r border-[#daa520] bg-[#eee]/40 '>
          <div className='flex h-full max-h-screen flex-col gap-2'>
            <div className='flex h-14 items-center border-b border-[#daa520] px-4 lg:[60px] lg:px-6'>
              <Link href='/' className='flex items-center gap-2'>
                <Image src={Logo} alt='Logo' className='size-8'/>
                <p className='text-xl font-semibold '>
                  Event
                  <span className='text-[#ffa500]'> Codex</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}