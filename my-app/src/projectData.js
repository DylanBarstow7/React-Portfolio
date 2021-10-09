import React from 'react';
import Leaderboard from './images/Leaderboard.PNG'; // Tell webpack this JS file uses this image
import fitnessTrackerHome from './images/fitnessTrackerHome.PNG';
import NoteTakerHerokuDeployment2 from './images/NoteTakerHerokuDeployment2.PNG'

const projects = [
  {
    title: 'The Iron Throne',
    image: Leaderboard,
    description: 'The Iron Throne is a Game of Thrones personality quiz that pairs the user with a character from the series, your result will be shared with all other logged users to discover your allies.',
    tools: ['React', 'Redux', 'MongoDB', 'JWT', 'Express'],
    github: 'https://github.com/DylanBarstow7/theIronThrone',
    link: 'https://stormy-bastion-03201.herokuapp.com/',
  },
  {
    title: 'Note-Taker',
    image: fitnessTrackerHome,
    description: 'A note taking app that uses an espress.js back-end and JSON to write, save, and delete notes.',
    tools: ['React', 'API'],
    github: 'https://github.com/DylanBarstow7/Note-Taker2',
    link: 'https://shielded-lake-82703.herokuapp.com/notes.html',
  },
  {
    title: 'Fitness Tracker',
    image: NoteTakerHerokuDeployment2,
    description: 'Chart your workout then go to your dashboard page to see charts containing the total weight and duration for the last 7 workouts. ',
    tools: ['Javascript', 'API', 'MongoDB', 'Express'],
    github: 'https://github.com/DylanBarstow7/Fitness-Tracker',
    link: 'https://stormy-plateau-54951.herokuapp.com/?id=615bed6785bf98a0f544ac18',
  },
];

export default projects;