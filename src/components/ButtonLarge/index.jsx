import React from 'react';

const Index = ({children}) => {
  return (
    <button className='px-4 py-2 bg-yellow hover:bg-yellowSecondary rounded-lg duration-150 font-bold'>{children}</button>
  );
}

export default Index;
