import React from 'react';

const Hero = () => {
  return (
    <section className='my-16  md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0'>
      <div className='ml-auto w-72 md:w-96 lg:w-3/6 '>
        <img src='./imag/TEMPORARY' alt='TEMPORARY' />
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl '>Hello. My name is Dylan Barstow </h1>
        <p>I'm a soon to be graduate of the Washington University 2U Full Stack Web Development program.</p>
      </div>
    </section>
  );
};

export default Hero;