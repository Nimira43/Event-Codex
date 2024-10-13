import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
import GoogleLogo from '@/public/google.svg'
import GitHubLogo from '@/public/github.svg'
import Image from 'next/image'

export function GoogleAuthButton() {
  const {pending} = useFormStatus()
  return (
    <>
    {pending ? (
      <Button>
        <Image src={GitHubLogo} alt='Google Logo' className='size-4 mr-2' />
        Sign in with GitHub
      </Button>
    ): (
      <Button>
        <Image src={GoogleLogo} alt='Google Logo' className='size-4 mr-2' />
        Sign in with Google
      </Button>
    )}
    </>
  )
}