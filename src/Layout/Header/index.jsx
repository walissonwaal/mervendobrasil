import React, {useState} from 'react'
import Image from 'next/image'
import { ButtonLarge } from '@/components'
import Link from 'next/link'

const Index = () => {
  const [showButton, setShowButton] = useState(true)
  return (
    <header className='w-full h-24 bg-black'>
      <div className='container px-6 h-full flex gap-4 items-center justify-between lg:px-32'>
        <Link href='/'>
          <Image
            className='w-[100px] sm:w-[200px]'
            src='/assets/logomarca.png'
            loading='lazy'
            alt='Logomarca'
            width={200}
            height={50}
          />
        </Link>
        {/* <ButtonLarge>Solicitar contato</ButtonLarge> */}
        <Image
            className='w-[100px] sm:w-[200px]'
            src='/assets/logo-new.png'
            loading='lazy'
            alt='Logomarca'
            width={200}
            height={50}
          />
          <div className='hidden md:flex'>
            <ButtonLarge>Solicitar Orçamento</ButtonLarge>
          </div>
      </div>
    </header>
  )
}

export default Index
