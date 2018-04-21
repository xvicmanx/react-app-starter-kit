import React from 'react';
import placeholder from './assets/placeholder.png';

const App = () => (
  <div>
    <h1 className="App__title">Hello, world!</h1>
    <img src={placeholder} alt="placeholder" />
    <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
  </div>
);

export default App;
