import React from 'react';

const Contact = () => {
  return (
    <article className='bg-gray px-4 py-6 rounded-lg shadow-lg'>
      <header className='text-2xl font-bold'>
        <h1>Contact Me</h1>
      </header>
      <div className=' my-6'>
        <p className='font-bold'>Dylan Barstow</p>
        <p className='font-thin'>Saint Louis, Missouri</p>
        <p className='border-b-2 w-3/6 mt-3 border-gray-300'>dcbarstow7@gmail.com</p>
      </div>
      <div className='flex flex-row mt-5 justify-around'>
          <div className='mr-1  flex flex-row gap-1 items-end border border-white py-1.5 px-2 rounded-lg text-sm'>
            <img src='./img/github.svg' alt='github' /> Github
          </div>
          <div className='mr-1  flex flex-row gap-1 items-end border border-white py-1.5 px-2 rounded-lg text-sm'>
            <img src='./img/linkedin.svg' alt='linkedin' /> Linkedin
          </div>
          <div className='mr-1  flex flex-row gap-1 items-end border border-white py-1.5 px-2 rounded-lg text-sm'>
            <img src='./img/codepen.svg' alt='codepen' /> Codepen
          </div>
        </div>
    </article>
  );
};

export default Contact;