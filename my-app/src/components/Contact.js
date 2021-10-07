import React from 'react';

const Contact = () => {
  return (
    <article className='my-28'>
      <header className='text-2xl font-bold'>
        <h>Contact Me</h>
      </header>
      <div className='flex flex-col md:flex-row justify-between md:items-end'>
        <div className='bg-gray px-6 py-8 rounded-lg shadow-lg justify-center my-7 md:w-6/12  '>
          <div>
            <p className='font-bold'>Dylan Barstow</p>
            <p className='font-thin'>Saint Louis, Missouri</p>
            <p className='border-b-2 mt-3 inline-block border-gray-500'>dcbarstow7@gmail.com</p>
          </div>
          <p className='border-b-2 mt-3 inline-block border-gray-500'>Resume</p>
          <div className='flex flex-row flex-wrap mt-5 space-x-3 '>
            <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
              <img src='./img/github.svg' alt='github' />
            </div>
            <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
              <img src='./img/linkedin.svg' alt='linkedin' />
            </div>
            <div className='mr-1  flex flex-row gap-1 items-end border border-gray-500 py-1.5 px-2 rounded-lg text-sm'>
              <img src='./img/codepen.svg' alt='codepen' />
            </div>
          </div>
        </div>
        <div className='mt-10 m-auto md:mt-0 max-w-xs md:max-w-md'>
          <img src='./img/' alt='' />
        </div>
      </div>
    </article>
  );
};

export default Contact;