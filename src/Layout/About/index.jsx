import { ButtonLarge } from '@/components'
import React from 'react'

export default function index () {
  return (
    <section className='text-gray-600 body-font bg-white mt-10'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Luiz Antônio T. da Silva
            <br />
            <span className='text-gray-500 text-lg'>
              Representante Comercial
            </span>
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            O <strong>Grupo BAMAQ</strong> possui mais de 40 anos de tradição,
            de sucesso e solidez. De origem mineira, as empresas do Grupo, estão
            presentes em dezesseis estados do país. O Grupo possui concessão da
            marca <strong>New Holland Construction</strong>, entre outras, além
            de trabalhar com serviços, consórcio e seguros.
          </p>
        </div>
        <div className='flex justify-center'>
          <ButtonLarge>Solicitar Orçamento</ButtonLarge>
        </div>
      </div>
    </section>
  )
}
