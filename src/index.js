import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact =
  React.createElement('div', { className: 'me' },
    React.createElement('h1', {}, 'Nathan Campbell'),
    React.createElement('p', {}, 'An awesome dude with sweet design/coding skills'),
    React.createElement('ul', { className: 'my-interests' },
      [
        React.createElement('li', {}, 'Illustrator'),
        React.createElement('li', {}, 'Ruby on Rails'),
        React.createElement('li', {}, 'Singing'),
        React.createElement('li', {}, 'Traveling')
      ]
  )
);






ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
