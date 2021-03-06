import React from 'react';
import './App.css';
import Header from './Components/Header/Header/Header';
import Course from './Components/Course/Course';

function App() {
  return (
    <div className="bg-primary">
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
