import React from 'react';

const Project = () => {
  return (
    <>
      <article className='mt-52 mb-28'>
        <header className='text-2xl font-bold'>
          <h2>Projects</h2>
        </header>
        <div className='my-7 space-y-24'>
          <div className='flex flex-wrap md:justify-between md:items-center'>
            <img src='./img/rn2-mockup.png' alt='MERN eCommerce' className='w-100 md:w-6/12 rounded-lg shadow-lg' />
            <div className='flex flex-col space-y-3 my-3 mx-1 w-100 md:w-5/12 '>
              <h3 className='uppercase font-bold text-lg'>MERN eCommerce</h3>
              <p>Full featured, responsive eCommerce store with PayPal payment.</p>
              <div className='flex overflow-auto space-x-2 pb-2'>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>React.js</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Redux</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>MongoDB</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>JWT</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Express</span>
              </div>
              <div className='w-auto flex space-x-5 relative'>
                <img src='./img/github.svg' alt='github' />
                <img src='./img/external-link.svg' alt='external link' />
              </div>
            </div>
          </div>

          <div className='flex flex-wrap md:justify-between md:items-center'>
            <img src='./img/tmdb2-mockup.png' alt='Movie App' className='w-100  md:w-6/12 rounded-lg shadow-lg md:order-1' />
            <div className='flex flex-col space-y-3 my-3 mx-1 w-100 md:w-5/12'>
              <h3 className='uppercase font-bold text-lg'>Movie App</h3>
              <p>Movie search app that will search and return movies based on the movie title.</p>
              <div className='flex overflow-auto space-x-2 pb-2'>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>React.js</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>API</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>SASS</span>
              </div>
              <div className='w-auto flex space-x-5'>
                <img src='./img/github.svg' alt='github' />
                <img src='./img/external-link.svg' alt='external link' />
              </div>
            </div>
          </div>

          <div className='flex flex-wrap md:justify-between md:items-center'>
            <img src='./img/recipe2-mockup.png' alt='Recipe Finder' className='w-100  md:w-6/12 rounded-lg shadow-lg' />
            <div className='flex flex-col space-y-3 my-3 mx-1 w-100 md:w-5/12'>
              <h3 className='uppercase font-bold text-lg'>Recipe Finder</h3>
              <p>Simple app to find and save recpies. API from themealdb.com.</p>
              <div className='flex overflow-auto space-x-2 pb-4'>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>Javascript</span>
                <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm'>API</span>
              </div>
              <div className='w-auto flex space-x-5'>
                <img src='./img/github.svg' alt='github' />
                <img src='./img/external-link.svg' alt='external link' />
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className='bg-gray shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto'>See more on Github</div>
    </>
  );
};

export default Project;