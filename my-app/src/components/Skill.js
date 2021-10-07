import React from 'react';

const Skill = () => {
  return (
    <article className='bg-gray px-4 py-6 rounded-lg shadow-lg'>
      <header className='text-2xl font-bold'>
        <h1>Skills & Tools</h1>
        </header>
      <div className='flex flex-row my-6 gap-5 justify-center'>
        <div className='flex flex-col w-15'>
          <img src='./img/javascript-original.svg' alt='github' className='w-16 ' />
          javascript
        </div>
        <div className='flex flex-col w-15'>
          <img src='./img/react-original.svg' alt='github' className='w-16' />
          React Js
        </div>
        <div className='flex flex-col w-15'>
          <img src='./img/nodejs-original.svg' alt='github' className='w-16' />
          <span>Node Js</span>
        </div>
        <div className='flex flex-col w-15'>
          <img src='./img/mongodb-original.svg' alt='github' className='w-16' />
          <span>Mongo DB</span>
        </div>
      </div>
    </article>
  );
};

export default Skill;