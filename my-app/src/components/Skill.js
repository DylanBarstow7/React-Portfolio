import React from 'react';

const Skill = () => {
  return (
    <article className='my-28'>
    <header className='text-2xl font-bold '>
      <h2>Skills & Tools</h2>
    </header>
    <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6  text-center place-items-center bg-star-pattern'>
      <div>
        <img src='./img/javascript-original.svg' alt='github' className='w-16' />
        javascript
      </div>
      <div>
        <img src='./img/react-original.svg' alt='github' className='w-16' />
        React Js
      </div>
      <div>
        <img src='./img/nodejs-original.svg' alt='github' className='w-16' />
        <span>Node Js</span>
      </div>
      <div>
        <img src='./img/mongodb-original.svg' alt='github' className='w-16' />
        <span>Mongo DB</span>
      </div>
      <div>
        <img src='./img/html5-original.svg' alt='github' className='w-16' />
        <span>HTML 5</span>
      </div>
      <div>
        <img src='./img/css3-original.svg' alt='github' className='w-16' />
        <span>CSS 3</span>
      </div>
    </div>
  </article>
);
};

export default Skill;