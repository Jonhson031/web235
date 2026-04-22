import React from 'react';
import ReactDOM from 'react-dom/client';

function MyApp() {
  return (
    <div>
      <p>Web 235 - Module 13 Lab 1. First component, Internal.</p>
      <p>I'm attempting to add another paragraph</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyApp />
);

