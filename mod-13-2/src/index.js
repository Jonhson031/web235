import React from 'react';
import ReactDOM from 'react-dom/client';
import ExApp from './ExApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExApp />
  </React.StrictMode>
);

// When I tried to set up file your way, I got an error "render is not a function". I just used the code from the template and it worked.
