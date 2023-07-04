import { ButtonLarge } from '@/components'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function index () {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERVEN DO BRASIL"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='bg-white pt-10'>
      <div className='text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20'>
        <h2 className='text-3xl font-extrabold text-black sm:text-4xl'>
          <span className='block text-black'>
            Tradição e qualidade{' '}
            <strong className='bg-yellow text-black px-2'>New Holland</strong>
          </span>
        </h2>
        <p className='text-2xl mt-4 max-w-md mx-auto text-black font-bold'>
        <span ref={el}></span>
        </p>
        <p className='text-xl mt-4'>Seu representante em Brasília, entorno e Tocantins</p>
        <div className='lg:mt-0 lg:flex-shrink-0'>
          <div className='mt-12 inline-flex rounded-md shadow'>
            <ButtonLarge>
              Solicitar Orçamento
            </ButtonLarge>
          </div>
        </div>
      </div>
    </div>
  )
}
